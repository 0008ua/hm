(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-item/product-item.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-item/product-item.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product\" fxLayout=\"column\">\n  <img class=\"product__picture\" fxFlex [src]=\"product.picture\" alt=\"product picture\">\n  <div *ngIf=\"product.name\" class=\"product__name\" fxFlex>\n    {{product.name}}\n  </div>\n  <div class=\"product__icons container\" fxFlex fxLayoutAlign=\"center end\">\n    <div class=\"row\" fxLayout=\"row\" fxFlex>\n      <div class=\"cell\" fxFlex fxLayoutAlign=\"center\">\n        <span>\n          <i class=\"far fa-eye\"></i>\n          <span class=\"item\">1025</span>\n        </span>\n\n\n      </div>\n      <div class=\"cell\" fxFlex fxLayoutAlign=\"center\">\n        <span>\n          <i class=\"fa fa-calendar\"></i>\n          <span class=\"item\">25.02.2020</span>\n        </span>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\" fxLayout=\"row\">\n    <div *ngFor=\"let product of products\" fxFlex=\"33.3\" class=\"cell\">\n      <app-product-item [product]=product></app-product-item>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/modules/product/product-item/product-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/product/product-item/product-item.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/product/product-item/product-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/product/product-item/product-item.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductItemComponent = class ProductItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "product", void 0);
ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-item/product-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item.component.scss */ "./src/app/modules/product/product-item/product-item.component.scss")).default]
    })
], ProductItemComponent);



/***/ }),

/***/ "./src/app/modules/product/product-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/product/product-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.component */ "./src/app/modules/product/product.component.ts");




const routes = [
    {
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
        pathMatch: 'full'
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/modules/product/product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/product/product.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/product/product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductComponent = class ProductComponent {
    constructor() { }
    ngOnInit() {
        this.products = [
            {
                name: 'Віночок',
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0003_1547651124513',
                description: 'lorem ipsum'
            },
            {
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0002_1546520032273',
                description: ''
            },
            {
                name: 'Віночок',
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0001_1546518611126',
                description: ''
            },
            {
                name: 'Віночок',
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0013_1551278734776',
                description: ''
            },
            {
                name: 'Віночок',
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0010_1551113875498',
                description: ''
            },
            {
                name: 'Віночок',
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0014_1551279496552',
                description: ''
            },
            {
                name: 'Віночок',
                picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0011_1551114577517',
                description: ''
            }
        ];
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/modules/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/modules/product/product.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/product/product.module.ts ***!
  \***************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/modules/product/product-item/product-item.component.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.component */ "./src/app/modules/product/product.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/modules/product/product-routing.module.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");







let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"],
            _product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"]
        ]
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=modules-product-product-module.js.map