(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fxFlex>\r\n  <mat-sidenav class=\"sidenav\" #dashboardSidenav position=\"start\" closed role=\"navigation\" mode=\"side\" (click)=\"dashboardSidenav.close()\">\r\n    <div class=\"container\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\" *ngFor=\"let dashboardRootMenuItem of dashboardRootMenu\" fxFlex=\"100\" fxLayoutAlign=\"center\">\r\n          <a class=\"link\" mat-button [routerLink]=\"['/', 'dashboard', dashboardRootMenuItem._id]\" [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{exact: false}\">\r\n                    <i class=\"link__icon fas fa-spa\"></i>\r\n                    <span class=\"link__icon-text\">{{dashboardRootMenuItem.name}}</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div class=\"container-h container-v\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"cell\" fxShow=\"true\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\r\n            <button class=\"link\" mat-button (click)=\"dashboardSidenav.toggle()\" aria-label=\"Menu\">\r\n              <span *ngIf=\"dashboardSidenav.opened\"><i class=\"link__icon fas fa-angle-left\"></i></span>\r\n              <span *ngIf=\"!dashboardSidenav.opened\"><i class=\"link__icon fas fa-angle-right\"></i></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/product-form/product-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/product-form/product-form.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" fxLayout=\"row\">\n  <div class=\"cell\" fxHide.lt-md fxFlex=\"25\"></div>\n  <div class=\"cell\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"50\">\n    <form [formGroup]=\"productForm\" #productFormDirective=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"cell_full-width\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n          <div class=\"pictureForm\" fxLayoutAlign=\"center center\">\n            <img class=\"pictureForm__picture\" *ngIf=\"productForm.get('picture').value\"\n              src=\"{{ productPicture.link + '/' + productForm.get('picture').value}}\" alt=\"Picture\">\n            <img class=\"pictureForm__picture\" *ngIf=\"!productForm.get('picture').value\"\n              src=\"{{ productPicture.link + '/' + environment.defaults.productPicture}}\" alt=\"Picture\">\n            <input #inputPictureDirective type=\"file\" (change)=\"addPicture($event)\"\n              accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\n            <mat-spinner *ngIf=\"processingLoadPicture\" class=\"addPicture__spinner\" [diameter]=\"24\"></mat-spinner>\n            <button mat-mini-fab color=\"primary\" *ngIf=\"!processingLoadPicture\" type=\"button\" aria-label=\"add\"\n              (click)=\"inputPictureDirective.click()\" [disabled]=\"processingLoadPicture\">\n              <mat-icon *ngIf=\"!processingLoadPicture && !productForm.get('picture').dirty\">add</mat-icon>\n              <mat-icon *ngIf=\"!processingLoadPicture && productForm.get('picture').dirty\">redo</mat-icon>\n            </button>\n          </div>\n        </div>\n        <div class=\"cell\" fxFlex=\"100\">\n          <div class=\"container-v\">\n            <div class=\"row\">\n              <div formArrayName=\"parents\" class=\"cell\" fxFlex=\"50\"\n                *ngFor=\"let categoryBlock of productForm.get('parents')['controls']; let i = index\">\n                <mat-form-field fxFlex>\n                  <mat-select placeholder=\"Категорія\" formControlName=\"{{i}}\" required\n                    (selectionChange)=\"onSelectCategory($event, i)\">\n                    <mat-option *ngFor=\"let child of children[i]\" [value]=\"child._id\">\n                      {{child.name}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"categoryBlock.hasError('required')\">*</mat-error>\n                </mat-form-field>\n\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex=\"100\">\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"Назва\" formControlName=\"name\">\n            <button mat-button *ngIf=\"productForm.get('name').value\" matSuffix mat-icon-button aria-label=\"Clear\"\n              (click)=\"clearNameField()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n        </div>\n        <div class=\"cell\" fxFlex=\"100\">\n          <div class=\"container-v\">\n            <div class=\"row\">\n              <label class=\"cell\" fxFlex>Публікувати? </label>\n              <mat-radio-group formControlName=\"display\" class=\"cell\" fxFlex fxLayoutAlign=\"center center\">\n                <mat-radio-button class=\"item\" [value]=\"true\">Так</mat-radio-button>\n                <mat-radio-button class=\"item\" [value]=\"false\">Ні</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n        </div>\n        <div class=\"cell\" fxFlex=\"100\">\n          <div class=\"container-v\">\n            <div class=\"row\">\n              <div class=\"cell\" fxFlex=\"50\">\n                <span class=\"mat-body1\">Артикул</span>\n              </div>\n              <div class=\"cell\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n                <span class=\"mat-body2\">{{this.productForm.get('_id').value}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"cell\" fxFlex=\"100\">\n          <div class=\"container-v\">\n            <div class=\"row\">\n              <div class=\"cell\" fxFlex=\"50\" fxLayoutAlign=\"center\">\n                <button mat-raised-button color=\"primary\" (click)=\"submitProductForm()\" fxFlex\n                  [disabled]=\"!productForm.valid || processingLoadPicture\">OK</button>\n              </div>\n              <div class=\"cell\" fxFlex=\"50\" fxLayoutAlign=\"center\">\n                <div class=\"row\">\n                  <div class=\"cell\" fxFlex=\"50\" fxLayoutAlign=\"center\">\n                    <button mat-raised-button (click)=\"resetProductForm()\"\n                      [disabled]=\"processingLoadPicture\">Reset</button>\n                  </div>\n                  <div class=\"cell\" fxFlex=\"50\" fxLayoutAlign=\"center\">\n                    <button mat-raised-button (click)=\"goBack()\">Назад</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/modules/dashboard/product-form/product-form.component.ts");
/* harmony import */ var _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/page404/page404.component */ "./src/app/modules/shared/page404/page404.component.ts");






const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: 'product-form',
                component: _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductFormComponent"],
            },
            // {
            //   path: 'product-form',
            //   component: ProductFormComponent,
            //   // canActivate: [AuthGuard],
            //   // data: { auth: 'guest' },
            // },
            {
                path: '',
                component: _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"],
            },
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalog.service */ "./src/app/services/catalog.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    ngOnInit() {
        this.catalogService.getChildren('dashboard')
            .subscribe(dashboardRootMenu => this.dashboardRootMenu = dashboardRootMenu, err => console.log('err', err.error.message));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/modules/dashboard/product-form/product-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/modules/dashboard/product-form/product-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/product-form/product-form.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/dashboard/product-form/product-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/product-form/product-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../actions/product-form.actions */ "./src/app/actions/product-form.actions.ts");













let ProductFormComponent = class ProductFormComponent {
    constructor(sharedService, productService, catalogService, matSnackBar, store, route, router, location) {
        this.sharedService = sharedService;
        this.productService = productService;
        this.catalogService = catalogService;
        this.matSnackBar = matSnackBar;
        this.store = store;
        this.route = route;
        this.router = router;
        this.location = location;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.children = [];
    }
    ngOnInit() {
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            parents: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([this.initParents()]),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            display: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.store.select('productForm')
            .subscribe((store) => {
            this.state = store;
            this.initWithState();
        });
        this.route.queryParamMap.subscribe(paramMap => {
            const _id = paramMap.get('_id');
            const parent = paramMap.get('parent');
            this.store.dispatch(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_12__["LoadProductForms"]({ _id, parent, product: null }));
        });
        this.store.select('screen')
            .subscribe((store) => {
            this.productPicture = store.pictureLink[src_app_interfaces__WEBPACK_IMPORTED_MODULE_8__["PictureTypes"].ProductPicture];
        });
    }
    initWithState() {
        while (1 < this.productForm.get('parents').length) {
            this.removeParents(this.productForm.get('parents').length - 1);
        }
        if (this.inputPictureDirective) {
            this.inputPictureDirective.nativeElement.value = [];
        }
        if (this.productFormDirective) {
            this.productFormDirective.resetForm();
        }
        this.productForm.patchValue(this.state);
        this.spinUpParents(this.state.parent || 'products');
    }
    spinUpParents(currentParent) {
        if (currentParent === 'products') {
            this.catalogService.getChildren('products')
                .subscribe((result) => this.children[0] = result, err => console.log('помилка завантаження категорій', err.error.message));
        }
        else {
            this.catalogService.getAllParentsInclCurrentCategory(currentParent, 'products')
                .subscribe(allParents => {
                allParents.forEach((parent, level) => {
                    const parentId = parent._id;
                    // don't need children of last element
                    if (level + 1 < allParents.length) {
                        if (level !== 0) {
                            // control[0] of FormArray was created at init step
                            this.addParents();
                            // 0 element of allParents[] is root,
                            // 1 element of allParents[] is control[0] value
                            this.productForm.get('parents').at(level - 1).patchValue(parent._id);
                        }
                        this.catalogService.getChildren(parentId)
                            .subscribe((children) => {
                            if (children.length) {
                                this.children[level] = children;
                            }
                        }, err => console.log(err.error.message));
                    }
                    else {
                        // last element of allParents[] is control[last - 1] value
                        this.productForm.get('parents').at(level - 1).patchValue(parent._id);
                    }
                });
            });
        }
    }
    addParents() {
        const control = this.productForm.get('parents');
        control.push(this.initParents());
    }
    removeParents(i) {
        const control = this.productForm.get('parents');
        control.removeAt(i);
    }
    initParents() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
    }
    onSelectCategory(event, level) {
        const parentId = event.value;
        while (level + 1 < this.productForm.get('parents').length) {
            this.removeParents(this.productForm.get('parents').length - 1);
        }
        this.catalogService.getChildren(parentId)
            .subscribe((children) => {
            if (children.length) {
                this.children[level + 1] = children;
                this.addParents();
                this.productForm.get('_id').patchValue('');
            }
            else {
                this.productService.generateSku(parentId)
                    .subscribe(sku => this.productForm.get('_id').patchValue(sku));
            }
        }, err => console.log(err.error.message));
    }
    clearNameField() {
        this.productForm.get('name').setValue('');
    }
    addPicture(event) {
        this.processingLoadPicture = true;
        const file = event.target.files[0];
        const error = this.sharedService.checkPictureFile(file).err;
        if (error) {
            this.matSnackBar.open(error, '', { duration: 2000 });
            this.processingLoadPicture = false;
        }
        else {
            this.sharedService.uploadPicture(file, 'product', [
                { width: 1100, height: 825, crop: 'fill', fetch_format: 'auto' },
                { width: 760, height: 570, crop: 'fill', fetch_format: 'auto' },
                { width: 590, height: 443, crop: 'fill', fetch_format: 'auto' },
                { width: 460, height: 345, crop: 'fill', fetch_format: 'auto' },
                { width: 360, height: 270, crop: 'fill', fetch_format: 'auto' },
                { width: 300, height: 225, crop: 'fill', fetch_format: 'auto' },
            ])
                .subscribe(public_id => {
                this.productForm.get('picture').setValue(public_id);
                this.processingLoadPicture = false;
                this.productForm.get('picture').markAsDirty();
            }, err => this.matSnackBar.open(err.error.message, '', { duration: 2000 }));
        }
    }
    submitProductForm() {
        const product = {
            parent: this.productForm.get('parents').at(this.productForm.get('parents').length - 1).value,
            _id: this.productForm.get('_id').value,
            name: this.productForm.get('name').value,
            picture: this.productForm.get('picture').value,
            display: this.productForm.get('display').value,
        };
        this.productService.upsertProduct(product)
            .subscribe(result => {
            this.resetProductForm();
            this.matSnackBar.open('Успішно добавлено/оновлено', '', { duration: 2000 });
            this.router.navigate(['/']);
        }, err => {
            this.store.dispatch(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_12__["LoadProductForms"]({ _id: null, parent: null, product }));
            this.matSnackBar.open(err.error.message, '', { duration: 2000 });
        });
    }
    // reset to initial values
    resetProductForm() {
        this.store.dispatch(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_12__["ResetProductForms"]());
    }
    goBack() {
        this.location.back();
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_10__["CatalogService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productFormDirective', { static: false })
], ProductFormComponent.prototype, "productFormDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputPictureDirective', { static: false })
], ProductFormComponent.prototype, "inputPictureDirective", void 0);
ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/product-form/product-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-form.component.scss */ "./src/app/modules/dashboard/product-form/product-form.component.scss")).default]
    })
], ProductFormComponent);



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map