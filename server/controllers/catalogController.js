const CatalogModel = require('../models/catalogModel');
const { DbError } = require('../errors');

getPrefix = (req, res, next) => {
  const _id = req.params._id;
  CatalogModel.findOne({ _id }, { prefix: 1, _id: 0 })
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError()));
};

getChildren = (req, res, next) => {
  const _id = req.params._id;
  CatalogModel.aggregate([
    {
      $match: { parent: _id },
    },
    {
      $sort: { order: 1 },
    },
  ])
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError({ message: 'Помилка отримання підкатегорії' })));
};

/**
* Return all parents of category(_id)
* included current category
* excluded root categories, which is higher than top level
* @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return  {object[]} // Catalog items array
*/
getAllParentsInclCurrentCategory = (req, res, next) => {
  const _id = req.query._id;
  const topLevel = req.query.topLevel;
  CatalogModel
      .aggregate([
        { $match: { _id } },
        // Takes document with _id: 'sweetBouquets'. Then take it's 'parent' field value (startWith).
        // matches the startWith value against the connectToField (_id in 'catalogs')
        // in matched document takes value of connectFromField (parent)
        // then searches in catalogs for '_id' with that value ..
        {
          $graphLookup: {
            from: 'catalogs',
            startWith: '$parent',
            connectToField: '_id',
            connectFromField: 'parent',
            as: 'hierarchy', // write result as field with name 'hierarchy'
          },
        },
        { $addFields: { root: '$$ROOT' } }, // add field with name 'root', value previous root

        // delete field 'hierarchy' from new 'root'
        // (get current category same as the match result in stage1)
        { $project: { 'root.hierarchy': 0 } },

        { $addFields: { hierarchyAndCurrent: { $concatArrays: ['$hierarchy', ['$root']] } } }, // concat all categories together
        { $project: { hierarchyAndCurrent: 1, _id: 0 } }, // delete all unnecessary fields

        // next steps to get in every categy length of ancestors array
        { $unwind: '$hierarchyAndCurrent' },
        { $replaceRoot: { newRoot: '$hierarchyAndCurrent' } },
        { $addFields: { sizeOfAncestors: { $size: '$ancestors' } } },

        // save root and get level of new root category
        {
          $group: {
            _id: null,
            rootElems: { $push: '$$ROOT' },
            rootLevel: { $addToSet: { $cond: [{ $eq: ['$_id', topLevel] }, '$sizeOfAncestors', ''] } },
          },
        },
        // rootLevel is [] with two elems: top level and '', convert to [] only with top level
        {
          $addFields: {
            rootLevelSet: {
              $filter: {
                input: '$rootLevel',
                as: 'rootLevel',
                cond: { $ne: ['$$rootLevel', ''] },
              },
            },
          },
        },

        // get new [], which starts with new top level
        {
          $addFields: {
            filtered: {
              $filter: {
                input: '$rootElems',
                as: 'rootElems',
                cond: { $gte: ['$$rootElems.sizeOfAncestors', { $arrayElemAt: ['$rootLevelSet', 0] }] },
              },
            },
          },
        },
        { $project: { filtered: 1, _id: 0 } }, // delete all unnecessary fields
        { $unwind: '$filtered' },
        { $replaceRoot: { newRoot: '$filtered' } },
        { $sort: { sizeOfAncestors: 1 } },
      ])
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError(new DbError({ message: 'Помилка завантаження навігації' }))));
};

/**
* Return siblings of category(_id)
*
* @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return  {object[]} // Catalog items array
*/
getAllSiblingsOfCurrentCategory = (req, res, next) => {
  const _id = req.query._id;
  CatalogModel
      .aggregate([
        { $match: { _id } },
        {
          $lookup: {
            from: 'catalogs',
            localField: 'parent',
            foreignField: 'parent',
            as: 'siblings',
          },
        },
        { $unwind: '$siblings' },
        { $replaceRoot: { newRoot: '$siblings' } },
      ])
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError(new DbError({ message: 'Помилка завантаження навігації' }))));
};

module.exports = {
  getPrefix,
  getChildren,
  getAllParentsInclCurrentCategory,
  getAllSiblingsOfCurrentCategory,
};
