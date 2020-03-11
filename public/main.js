(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/dashboard/dashboard.module": [
		"./src/app/modules/dashboard/dashboard.module.ts",
		"modules-dashboard-dashboard-module"
	],
	"./modules/product/product.module": [
		"./src/app/modules/product/product.module.ts"
	],
	"./modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"modules-user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"toolbar toolbar_header\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div class=\"toolbar__logo\" fxFlex.lt-md=\"80\" fxFlex=\"25\" fxLayoutAlign=\"start center\">\n    <a href=\"\">\n      <img src=\"./assets/images/hmade_logo_dark.svg\" height=\"36px\" alt=\"logo\">\n    </a>\n  </div>\n  <div fxFlex fxHide.lt-md=\"true\">\n  </div>\n  <div fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n    <!-- <a *ngIf=\"allowTo('notUser')\" mat-button [routerLink]=\"['/', 'user', 'login']\"\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: false}\">\n      <span>Login</span>\n    </a> -->\n\n    <a mat-button [routerLink]=\"['/', 'feedback']\" [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions]=\"{exact: false}\">\n\n        <i class=\"item far fa-envelope\"></i>\n        <span class=\"item\">Написати мені</span>\n    </a>\n    <a *ngIf=\"allowTo('user')\" mat-button [routerLink]=\"['/', 'dashboard', 'product-form']\"\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: false}\">\n      <span>\n        <i class=\"item fas fa-cogs\"></i>\n        <span class=\"item\">Налаштування</span>\n      </span>\n    </a>\n    <a *ngIf=\"allowTo('guest')\" mat-button (click)=\"logout()\">\n      <span>\n        <i class=\"item fas fa-door-open\"></i>\n        <span class=\"item\">Вийти</span>\n      </span>\n    </a>\n  </div>\n\n  <div class=\"toolbar__menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\" fxFlex=\"20\" fxLayoutAlign=\"end center\">\n    <button mat-button (click)=\"sidenav.toggle()\" aria-label=\"Menu\">\n      <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\n      <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\n    </button>\n  </div>\n</header>\n<main fxLayout>\n  <mat-sidenav-container fxFlex>\n\n    <!-- [fixedInViewport]=\"true\" [fixedTopGap]=\"0\" [fixedBottomGap]=\"0\" -->\n    <mat-sidenav class=\"sidenav\" #sidenav position=\"end\" closed role=\"navigation\" mode=\"over\">\n      <div class=\"container\">\n        <div class=\"row\" fxLayout=\"row\" (click)=\"sidenav.close()\">\n          <div *ngIf=\"productsUrl\" class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"center\">\n            <app-product-nav (sidenavCloseEmitter)=\"sidenav.close()\"></app-product-nav>\n          </div>\n          <!-- <div class=\"cell\" fxFlex=\"100\">\n            <a *ngIf=\"allowTo('notUser')\" [routerLink]=\"['/', 'user', 'login']\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact: false}\">\n              <span>Login</span>\n            </a>\n          </div> -->\n          <div class=\"cell\" fxFlex=\"100\">\n            <a [routerLink]=\"['/', 'feedback']\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact: false}\">\n              <span>\n                <i class=\"item far fa-envelope\"></i>\n                <span class=\"item\">Написати мені</span>\n              </span>\n            </a>\n          </div>\n          <div class=\"cell\" fxFlex=\"100\">\n            <a *ngIf=\"allowTo('manager')\" [routerLink]=\"['/', 'dashboard', 'product-form']\"\n              [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: false}\">\n              <span>\n                <i class=\"item fas fa-cogs\"></i>\n                <span class=\"item\">Налаштування</span>\n              </span>\n            </a>\n          </div>\n          <div class=\"cell\" fxFlex=\"100\">\n            <a *ngIf=\"allowTo('guest')\" (click)=\"logout()\">\n              <span>\n                <i class=\"item fas fa-door-open\"></i>\n                <span class=\"item\">Вийти</span>\n              </span>\n            </a>\n          </div>\n\n\n        </div>\n      </div>\n\n\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</main>\n<footer class=\"toolbar toolbar_footer\" fxLayout=\"row\">\n  <div class=\"toolbar__logo\" fxLayoutAlign=\"start center\">\n    <a href=\"\">\n      <img src=\"./assets/images/hmade_logo_dark.svg\" height=\"36px\" alt=\"logo\">\n    </a>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"br-menu container-v\">\n  <a class=\"br-menu__item br-menu__item_home\" [routerLink]=\"['/products', 'all']\" [routerLinkActive]=\"['']\"\n    [routerLinkActiveOptions]=\"{exact: true}\">\n    <span>\n      <i class=\"item fa fa-home\"></i>\n    </span>\n  </a>\n  <ng-container *ngIf=\"!navLoading\">\n    <a *ngFor=\"let breadcrumbItem of breadcrumb\" class=\"br-menu__item br-menu__item_current animationAppear05s\"\n      [routerLink]=\"['/products', breadcrumbItem._id]\"\n      [queryParams]=\"{seoTitle: breadcrumbItem.seoTitle, seoMeta: breadcrumbItem.seoMeta}\" [routerLinkActive]=\"['']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <span>\n        <!-- <i class=\"fas fa-check-double\"></i> -->\n        <span>{{breadcrumbItem.name}}</span>\n      </span>\n    </a>\n  </ng-container>\n  <ng-container *ngIf=\"!navLoading\">\n    <a *ngFor=\"let child of feedChildren\" class=\"br-menu__item br-menu__item_feed animationAppear05s\"\n      [routerLink]=\"['/products', child._id]\" [queryParams]=\"{seoTitle: child.seoTitle, seoMeta: child.seoMeta}\"\n      [routerLinkActive]=\"['br-menu__item_active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <span>{{child.name}}</span>\n    </a>\n  </ng-container>\n\n</div>\n<!-- \n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"cell\">---</div>\n  </div>\n</div>\n<div class=\"row\" fxLayout=\"row\">\n  <mat-chip-list class=\"cell\" aria-label=\"Breadcrumb\">\n    <mat-chip [routerLink]=\"['/products', 'all']\" [routerLinkActive]=\"['chips_active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <span>\n        <i class=\"item fa fa-home\"></i>\n      </span>\n    </mat-chip>\n    <ng-container *ngIf=\"!navLoading\">\n      <mat-chip *ngFor=\"let breadcrumbItem of breadcrumb\" class=\"animationAppear05s\"\n        [routerLink]=\"['/products', breadcrumbItem._id]\"\n        [queryParams]=\"{seoTitle: breadcrumbItem.seoTitle, seoMeta: breadcrumbItem.seoMeta}\"\n        [routerLinkActive]=\"['chips_active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <span>\n          <span class=\"item\">{{breadcrumbItem.name}}</span>\n          <i class=\"fas fa-angle-right\"></i>\n        </span>\n      </mat-chip>\n    </ng-container>\n    <ng-container *ngIf=\"!navLoading\">\n      <mat-chip class=\"chips_primary animationAppear05s\" *ngFor=\"let child of feedChildren\"\n        [routerLink]=\"['/products', child._id]\" [queryParams]=\"{seoTitle: child.seoTitle, seoMeta: child.seoMeta}\"\n        [routerLinkActive]=\"['chips-active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <span>{{child.name}}</span>\n      </mat-chip>\n    </ng-container>\n  </mat-chip-list>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-item/product-item.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-item/product-item.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"product\" class=\"product\" fxLayout=\"column\">\n  <img class=\"product__picture\" fxFlex (click)=\"openDialog()\"\n  [src]=\"productPicture.link + '/' + product.picture\" alt=\"product picture\">\n\n  <div *ngIf=\"allowTo('manager')\" class=\"product__editor\" fxLayout=\"row\">\n    <button mat-button (click)=\"edit()\" fxFlex>Редагувати</button>\n    <button mat-button (click)=\"deleteProduct()\" fxFlex>Видалити</button>\n  </div>\n  <div class=\"product__info\" fxLayout=\"row\">\n    <div class=\"cell product__info-main\" fxFlex=\"50\">\n      <p>\n        <i class=\"item far fa-eye\"></i>\n        <span class=\"item\">{{product.views}}</span>\n      </p>\n      <p>\n        <i class=\"item fa fa-calendar\"></i>\n        <span class=\"item\">{{product.createdAt | date: 'dd-MM-yy'}}</span>\n      </p>\n    </div>\n    <div class=\"cell product__info-name\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n      <span>{{product.name}}</span>\n    </div>\n  </div>\n  <!-- <div class=\"product__inf\">\n    <div class=\"container\">\n      <div class=\"row\" fxLayout=\"row\" fxFlex>\n        <div class=\"cell\" fxFlex=\"35\" fxLayoutAlign=\"center\">\n          <span>\n            <i class=\"item far fa-eye\"></i>\n            <span class=\"item\">{{product.views}}</span>\n          </span>\n        </div>\n        <div class=\"cell\" fxFlex=\"65\" fxLayoutAlign=\"center\">\n          <span>\n            <i class=\"item fa fa-calendar\"></i>\n            <span class=\"item\">{{product.createdAt | date: 'dd-MM-yyyy'}}</span>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-nav/product-nav.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-nav/product-nav.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\"> -->\n  <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"cell\">\n      <mat-button-toggle-group appearance=\"legacy\" aria-label=\"Sort order\" [ngModel]=\"sortToggle\"\n        (ngModelChange)=\"onToggle($event)\">\n        <mat-button-toggle [value]=\"SortTypes.Views\">Популярні</mat-button-toggle>\n        <mat-button-toggle [value]=\"SortTypes.CreatedAt\">Останні</mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n  </div>\n<!-- </div>\n<div class=\"container animationAppear05s\" *ngIf=\"!navLoading\"> -->\n  <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"cell\">\n      <mat-chip-list aria-label=\"feed\" fxLayoutAlign=\"center center\">\n        <mat-chip *ngFor=\"let feedItem of feedSiblings\" fxFlex=\"100\" fxLayoutAlign=\"center center\"\n          [routerLink]=\"['/products', feedItem._id]\" (click)=\"sidenavClose()\"\n          [queryParams]=\"{seoTitle: feedItem.seoTitle, seoMeta: feedItem.seoMeta}\" [routerLinkActive]=\"['chips_active']\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <span>\n            {{feedItem.name}}\n          </span>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n  </div>\n<!-- </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress-bar\">\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div class=\"container-h\">\n  <div class=\"container\">\n    <div class=\"row\" fxLayout=\"row\">\n      <div class=\"cell\" fxFlex=\"100\">\n        <app-product-breadcrumb></app-product-breadcrumb>\n      </div>\n\n      <div class=\"cell\" fxHide.lt-md fxFlex.md=\"20\" fxFlex.gt-md=\"15\">\n        <router-outlet></router-outlet>\n\n      </div>\n      <div class=\"cell\" fxFlex.lt-md=\"100\" fxFlex.md=\"80\" fxFlex.gt-md=\"85\">\n        <div class=\"row\" fxLayout=\"row\">\n          <div *ngFor=\"let product of products\" class=\"cell_full-width animationAppear05s\" fxFlex.xs=\"100\"\n            fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.lg=\"25\" fxFlex.xl=\"20\">\n            <app-product-item [product]=\"product\" [loading]=\"loading\"></app-product-item>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"container-h\">\n  <div class=\"container\">\n    <div class=\"row\" fxLayout=\"row\">\n\n      <div class=\"container\" fxHide.lt-md fxFlex.md=\"20\" fxFlex.gt-md=\"15\">\n        <div class=\"row\" fxLayout=\"row\">\n          <div class=\"cell\" fxFlex=\"100\">\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n      \n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div *ngIf=\"!topProgressBarActive\" class=\"progress-bar\">\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/feedback/feedback.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/feedback/feedback.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress-bar\">\n  <mat-progress-bar *ngIf=\"processing\" mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div class=\"container-h container-v\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cell\" fxFlex.gt-xs=\"10\" fxFlex.gt-md=\"15\"></div>\n      <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"70\">\n\n        <form class=\"form\" #feedbackFormDirective=\"ngForm\" [formGroup]=\"feedbackForm\" novalidate>\n          <div class=\"container\">\n\n            <div class=\"row\">\n              <div class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"center\">\n                <img src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\n              </div>\n\n              <div class=\"cell\" fxFlex=\"100\">\n                <div class=\"container-h\">\n                  <div class=\"row\" fxLayout=\"row\">\n                    <div class=\"cell\" fxLayoutAlign=\"center center\">\n                      <mat-icon class=\"mat-18\" color=\"primary\">mail</mat-icon>\n                    </div>\n                    <div class=\"cell\" fxFlex>\n                      <mat-form-field fxFlex>\n                        <textarea rows=\"5\" matInput placeholder=\"Повідомлення\" formControlName=\"message\"\n                          required></textarea>\n                        <mat-error *ngIf=\"(feedbackForm.get('message').errors?.minlength ||\n                                                                  feedbackForm.get('message').errors?.maxlength ||\n                                                                  feedbackForm.get('message').errors?.required) &&\n                                                                  feedbackForm.get('message').touched\">\n                          Довжина повинна бути від 3 до 500 символів\n                        </mat-error>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"cell\" fxFlex=\"100\">\n                <div class=\"container-h\">\n                  <div class=\"row\" fxLayout=\"row\">\n                    <div class=\"cell\" fxLayoutAlign=\"center center\">\n                      <mat-icon class=\"mat-18\" color=\"primary\">account_circle</mat-icon>\n                    </div>\n                    <div class=\"cell\" fxFlex>\n                      <mat-form-field fxFlex>\n                        <input matInput placeholder=\"Ваше ім'я\" formControlName=\"name\" required>\n                        <mat-error *ngIf=\"feedbackForm.get('contacts').errors?.required &&\n                                              feedbackForm.get('name').touched\">\n                          Введіть ім'я\n                        </mat-error>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"cell\" fxFlex=\"100\">\n                <div class=\"container-h\">\n                  <div class=\"row\" fxLayout=\"row\">\n                    <div class=\"cell\" fxLayoutAlign=\"center center\">\n                      <mat-icon class=\"mat-18\" color=\"primary\">contacts</mat-icon>\n                    </div>\n                    <div class=\"cell\" fxFlex>\n                      <mat-form-field fxFlex>\n                        <input matInput placeholder=\"Контактний номер або email\" formControlName=\"contacts\" required>\n                        <mat-error *ngIf=\"feedbackForm.get('contacts').errors?.required &&\n                                                              feedbackForm.get('contacts').touched\">\n                          Введіть котактну інформацію\n                        </mat-error>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- <re-captcha [ngClass]=\"{'display-none':\n                      !feedbackForm.get('contacts').valid || !feedbackForm.get('contacts').valid ||\n                      !feedbackForm.get('message').valid}\" [formControlName]=\"'recaptcha'\" #recaptchaRef\n              siteKey=\"{{environment.recaptchaSiteKey}}\">\n            </re-captcha> -->\n              <div class=\"cell\" fxFlex=\"100\">\n                <div class=\"container-h form__button-wrapper\" fxLayoutAlign=\"center\">\n                  <button mat-button aria-label=\"Send message\"\n                    [disabled]=\"!feedbackForm.valid || processing\" (click)=\"onFeedbackFormSubmit()\">\n                    <mat-icon color=\"primary\" *ngIf=\"feedbackForm.valid\">message</mat-icon>\n                     Написати мені\n                  </button>\n   \n                </div>\n              </div>\n\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- \n\n<div class=\"container\">\n\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n    <div fxFlex.gt-xs=\"10\" fxFlex.gt-md=\"15\"></div>\n\n    <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"70\">\n\n      <mat-card>\n        <mat-card-content>\n          <div class=\"row\">\n            <div class=\"cell\" fxFlex>\n              <img src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\n            </div>\n          </div>\n\n          <form #fForm=\"ngForm\" [formGroup]=\"feedbackForm\" (submit)=\"onFeedbackFormSubmit()\">c\n\n            <div fxLayout=\"row\">\n              <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\n                <mat-icon color=\"primary\">textsms</mat-icon>\n              </div>\n              <mat-form-field>\n                <textarea rows=\"5\" matInput placeholder=\"Повідомлення\" formControlName=\"message\" required></textarea>\n                <mat-error *ngIf=\"(feedbackForm.get('message').errors?.minlength ||\n                                    feedbackForm.get('message').errors?.maxlength ||\n                                    feedbackForm.get('message').errors?.required) &&\n                                    feedbackForm.get('message').touched\">\n                  Довжина повинна бути від 3 до 500 символів\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div fxLayout=\"row\">\n              <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\n                <mat-icon color=\"primary\">account_circle</mat-icon>\n              </div>\n              <mat-form-field>\n                <input matInput placeholder=\"Ваше ім'я\" formControlName=\"name\" required>\n                <mat-error *ngIf=\"feedbackForm.get('contacts').errors?.required &&\n                        feedbackForm.get('name').touched\">\n                  Введіть ім'я\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div fxLayout=\"row\">\n              <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\n                <mat-icon color=\"primary\">contacts</mat-icon>\n              </div>\n              <mat-form-field>\n                <input matInput placeholder=\"Контактний номер або email\" formControlName=\"contacts\" required>\n                <mat-error *ngIf=\"feedbackForm.get('contacts').errors?.required &&\n                        feedbackForm.get('contacts').touched\">\n                  Введіть котактну інформацію\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <re-captcha [ngClass]=\"{'display-none':\n          !feedbackForm.get('contacts').valid || !feedbackForm.get('contacts').valid ||\n          !feedbackForm.get('message').valid}\" [formControlName]=\"'recaptcha'\" #recaptchaRef\n              siteKey=\"{{environment.recaptchaSiteKey}}\">\n            </re-captcha>\n            <div class=\"submit-button-wrapper\">\n              <button mat-raised-button class=\"full-width\" color=\"primary\" aria-label=\"Send message\"\n                [disabled]=\"!feedbackForm.valid || processing\">\n                <mat-icon *ngIf=\"!processing\">message</mat-icon> Написати мені\n              </button>\n            </div>\n\n          </form>\n        </mat-card-content>\n      </mat-card>\n\n\n    </div>\n  </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal-confirm/modal-confirm.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal-confirm/modal-confirm.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"conntainer\">\n  <div class=\"row\" fxLayout=\"row\">\n    <div class=\"cell\">\n      <h3 class=\"mat-h3\">{{data.message}}</h3>\n    </div>\n  </div>\n  <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n    <div class=\"cell\">\n      <button mat-button (click)=\"onClose(true, data.payload)\" aria-label=\"Yes\">Так</button>\n    </div>\n    <div class=\"cell\">\n      <button mat-raised-button (click)=\"onClose(false, null)\" aria-label=\"No\">Ні</button>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal/modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal/modal.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\">\n  <div class=\"modal__image-container\" (click)=\"onClose()\">\n    <img class=\"modal__image\" src=\"{{data.picture}}\" alt=\"product picture\">\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/page404/page404.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/page404/page404.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-h container-v\">\n  <div class=\"container-v\">\n    <h1 class=\"mat-h1\">Сторінку не знайдено</h1>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/actions/app.actions.ts":
/*!****************************************!*\
  !*** ./src/app/actions/app.actions.ts ***!
  \****************************************/
/*! exports provided: AppActionTypes, LoadAppNav, LoadAppNavSuccess, LoadAppProducts, LoadAppProductsSuccess, LoadApp, LoadAppSuccess, LoadAppFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActionTypes", function() { return AppActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppNav", function() { return LoadAppNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppNavSuccess", function() { return LoadAppNavSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppProducts", function() { return LoadAppProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppProductsSuccess", function() { return LoadAppProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadApp", function() { return LoadApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppSuccess", function() { return LoadAppSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppFailure", function() { return LoadAppFailure; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AppActionTypes;
(function (AppActionTypes) {
    AppActionTypes["LoadAppNav"] = "[App] Load App Nav";
    AppActionTypes["LoadAppNavSuccess"] = "[App] Load App Nav Success";
    AppActionTypes["LoadAppProducts"] = "[App] Load App Products";
    AppActionTypes["LoadAppProductsSuccess"] = "[App] Load App Products Success";
    AppActionTypes["LoadApp"] = "[App] Load App";
    AppActionTypes["LoadAppSuccess"] = "[App] Load App Success";
    AppActionTypes["LoadAppFailure"] = "[App] Load App Failure";
})(AppActionTypes || (AppActionTypes = {}));
class LoadAppNav {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadAppNav;
    }
}
class LoadAppNavSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadAppNavSuccess;
    }
}
class LoadAppProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadAppProducts;
    }
}
class LoadAppProductsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadAppProductsSuccess;
    }
}
class LoadApp {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadApp;
    }
}
class LoadAppSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadAppSuccess;
    }
}
class LoadAppFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionTypes.LoadAppFailure;
    }
}


/***/ }),

/***/ "./src/app/actions/product-form.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/actions/product-form.actions.ts ***!
  \*************************************************/
/*! exports provided: ProductFormActionTypes, LoadProductForms, LoadProductFormsSuccess, LoadProductFormsFailure, AddProductForms, ResetProductForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormActionTypes", function() { return ProductFormActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductForms", function() { return LoadProductForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductFormsSuccess", function() { return LoadProductFormsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductFormsFailure", function() { return LoadProductFormsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductForms", function() { return AddProductForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetProductForms", function() { return ResetProductForms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProductFormActionTypes;
(function (ProductFormActionTypes) {
    ProductFormActionTypes["LoadProductForms"] = "[ProductForm] Load ProductForms";
    ProductFormActionTypes["LoadProductFormsSuccess"] = "[ProductForm] Load ProductForms Success";
    ProductFormActionTypes["LoadProductFormsFailure"] = "[ProductForm] Load ProductForms Failure";
    ProductFormActionTypes["ResetProductForms"] = "[ProductForm] Reset ProductForms";
    ProductFormActionTypes["AddProductForms"] = "[ProductForm] Add ProductForms";
})(ProductFormActionTypes || (ProductFormActionTypes = {}));
class LoadProductForms {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductFormActionTypes.LoadProductForms;
    }
}
class LoadProductFormsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductFormActionTypes.LoadProductFormsSuccess;
    }
}
class LoadProductFormsFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductFormActionTypes.LoadProductFormsFailure;
    }
}
class AddProductForms {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductFormActionTypes.AddProductForms;
    }
}
class ResetProductForms {
    constructor() {
        this.type = ProductFormActionTypes.ResetProductForms;
    }
}


/***/ }),

/***/ "./src/app/actions/product.actions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/product.actions.ts ***!
  \********************************************/
/*! exports provided: ProductActionTypes, LoadingProducts, LoadProducts, LoadProductsFailure, AddProduct, UpsertProduct, AddProducts, UpsertProducts, UpdateProduct, UpdateProducts, DeleteProduct, DeleteProducts, ClearProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductActionTypes", function() { return ProductActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingProducts", function() { return LoadingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProducts", function() { return LoadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductsFailure", function() { return LoadProductsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertProduct", function() { return UpsertProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProducts", function() { return AddProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertProducts", function() { return UpsertProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProduct", function() { return UpdateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProducts", function() { return UpdateProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProduct", function() { return DeleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProducts", function() { return DeleteProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearProducts", function() { return ClearProducts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProductActionTypes;
(function (ProductActionTypes) {
    ProductActionTypes["GetProducts"] = "[Product] Get Products";
    ProductActionTypes["LoadingProducts"] = "[Product] Loading Products";
    ProductActionTypes["LoadProducts"] = "[Product] Load Products";
    ProductActionTypes["LoadProductsFailure"] = "[ProductForm] Load Products Failure";
    ProductActionTypes["AddProduct"] = "[Product] Add Product";
    ProductActionTypes["UpsertProduct"] = "[Product] Upsert Product";
    ProductActionTypes["AddProducts"] = "[Product] Add Products";
    ProductActionTypes["UpsertProducts"] = "[Product] Upsert Products";
    ProductActionTypes["UpdateProduct"] = "[Product] Update Product";
    ProductActionTypes["UpdateProducts"] = "[Product] Update Products";
    ProductActionTypes["DeleteProduct"] = "[Product] Delete Product";
    ProductActionTypes["DeleteProducts"] = "[Product] Delete Products";
    ProductActionTypes["ClearProducts"] = "[Product] Clear Products";
})(ProductActionTypes || (ProductActionTypes = {}));
// get products from db
// export class GetProducts implements Action {
//   readonly type = ProductActionTypes.GetProducts;
//   constructor(public payload: {
//     currentCategory: string;
//     display: boolean;
//     sort: string;
//     skip: number;
//     limit: number;
//   }) { }
// }
// set or cancel loading status
class LoadingProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.LoadingProducts;
    }
}
// entities
class LoadProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.LoadProducts;
    }
}
class LoadProductsFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.LoadProductsFailure;
    }
}
class AddProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.AddProduct;
    }
}
class UpsertProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpsertProduct;
    }
}
class AddProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.AddProducts;
    }
}
class UpsertProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpsertProducts;
    }
}
class UpdateProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpdateProduct;
    }
}
class UpdateProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpdateProducts;
    }
}
class DeleteProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.DeleteProduct;
    }
}
class DeleteProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.DeleteProducts;
    }
}
class ClearProducts {
    constructor() {
        this.type = ProductActionTypes.ClearProducts;
    }
}


/***/ }),

/***/ "./src/app/actions/screen.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/screen.actions.ts ***!
  \*******************************************/
/*! exports provided: ScreenActionTypes, LoadScreens, ChangedScreens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenActionTypes", function() { return ScreenActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScreens", function() { return LoadScreens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangedScreens", function() { return ChangedScreens; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ScreenActionTypes;
(function (ScreenActionTypes) {
    ScreenActionTypes["LoadScreens"] = "[Screen] Load Screens";
    ScreenActionTypes["ChangedScreens"] = "[Screen] Changed Screens";
})(ScreenActionTypes || (ScreenActionTypes = {}));
class LoadScreens {
    constructor() {
        this.type = ScreenActionTypes.LoadScreens;
    }
}
class ChangedScreens {
    constructor(payload) {
        this.payload = payload;
        this.type = ScreenActionTypes.ChangedScreens;
    }
}


/***/ }),

/***/ "./src/app/actions/user.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/user.actions.ts ***!
  \*****************************************/
/*! exports provided: UserActionTypes, GetUser, Authenticated, NotAuthenticated, AuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticated", function() { return Authenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthenticated", function() { return NotAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["getUser"] = "[User] Get user";
    UserActionTypes["authenticated"] = "[User] Authenticated";
    UserActionTypes["notAuthenticated"] = "[User] Not Authenticated";
    // googleLogin = '[User] Google login attempt',
    // logout = '[User] Logout',
    UserActionTypes["authError"] = "[User] Error";
})(UserActionTypes || (UserActionTypes = {}));
// Get User AuthState
class GetUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.getUser;
    }
}
class Authenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.authenticated;
    }
}
class NotAuthenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.notAuthenticated;
    }
}
class AuthError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.authError;
    }
}
// | Logout;


/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        ],
        exports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        ],
    })
], AppMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shared/page404/page404.component */ "./src/app/modules/shared/page404/page404.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _modules_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/feedback/feedback.component */ "./src/app/modules/shared/feedback/feedback.component.ts");






const routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { auth: 'manager' },
    },
    {
        path: 'feedback',
        component: _modules_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"],
    },
    {
        path: 'products',
        loadChildren: './modules/product/product.module#ProductModule',
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _modules_shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _actions_screen_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/screen.actions */ "./src/app/actions/screen.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");











let AppComponent = class AppComponent {
    constructor(userService, store, router, route, titleService, metaService) {
        this.userService = userService;
        this.store = store;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ngOnInit() {
        const $routerEvents = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((event) => {
            if (event.url.split('/')[1] === 'products' || event.url.split('/')[1] === '') {
                this.productsUrl = true;
            }
            else {
                this.productsUrl = false;
            }
            //   })
            //   );
            // $routerEvents.subscribe(_ => _);
            gtag('config', 'UA-151728431-1', {
                page_path: event.urlAfterRedirects
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(() => this.route), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(route => route.outlet === 'primary'));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])($routerEvents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])((route) => route.queryParamMap)), // query params
        $routerEvents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])((route) => route.data)) // routing.module data
        )
            .subscribe((result) => {
            const paramMap = result[0];
            const data = result[1];
            // prioryty: 1. embeded to router 2. passed as queryParams 3.default values
            const seoTitle = data.dataTitle || paramMap.get('seoTitle') || src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].seoTitle;
            const seoMeta = data.dataMeta || paramMap.get('seoMeta') || src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].seoMeta;
            this.titleService.setTitle(seoTitle);
            const tag = { name: 'description', content: seoMeta };
            const attributeSelector = 'name="description"';
            this.metaService.removeTag(attributeSelector);
            this.metaService.addTag(tag, false);
        });
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetUser"]());
        this.store.select('auth')
            .subscribe(store => this.user = store.user);
        this.store.dispatch(new _actions_screen_actions__WEBPACK_IMPORTED_MODULE_5__["LoadScreens"]());
    }
    allowTo(permittedRole) {
        return this.userService.allowTo(permittedRole);
    }
    restrictTo(restrictedRoles) {
        return this.userService.restrictTo(restrictedRoles);
    }
    logout() {
        this.userService.logout().subscribe(_ => this.router.navigate(['/']));
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./effects/user.effects */ "./src/app/effects/user.effects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _effects_product_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/product.effects */ "./src/app/effects/product.effects.ts");
/* harmony import */ var _effects_screen_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/screen.effects */ "./src/app/effects/screen.effects.ts");
/* harmony import */ var _effects_product_form_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/product-form.effects */ "./src/app/effects/product-form.effects.ts");
/* harmony import */ var _effects_app_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effects/app.effects */ "./src/app/effects/app.effects.ts");
/* harmony import */ var _modules_product_product_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/product/product.module */ "./src/app/modules/product/product.module.ts");
/* harmony import */ var _modules_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/shared/modal/modal.component */ "./src/app/modules/shared/modal/modal.component.ts");
/* harmony import */ var _modules_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/shared/modal-confirm/modal-confirm.component */ "./src/app/modules/shared/modal-confirm/modal-confirm.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _modules_product_product_module__WEBPACK_IMPORTED_MODULE_22__["ProductModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_user_effects__WEBPACK_IMPORTED_MODULE_14__["UserEffects"], _effects_product_effects__WEBPACK_IMPORTED_MODULE_18__["ProductEffects"], _effects_screen_effects__WEBPACK_IMPORTED_MODULE_19__["ScreenEffects"], _effects_product_form_effects__WEBPACK_IMPORTED_MODULE_20__["ProductFormEffects"], _effects_app_effects__WEBPACK_IMPORTED_MODULE_21__["AppEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["HttpInterceptorService"], multi: true },
        ],
        entryComponents: [
            _modules_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_23__["ModalComponent"],
            _modules_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_24__["ModalConfirmComponent"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/effects/app.effects.ts":
/*!****************************************!*\
  !*** ./src/app/effects/app.effects.ts ***!
  \****************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/app.actions */ "./src/app/actions/app.actions.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/product.actions */ "./src/app/actions/product.actions.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");











let AppEffects = class AppEffects {
    constructor(actions$, store$, catalogService, dbService) {
        this.actions$ = actions$;
        this.store$ = store$;
        this.catalogService = catalogService;
        this.dbService = dbService;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"];
        this.loadNav = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["AppActionTypes"].LoadAppNav), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.catalogService.getAllParentsInclCurrentCategory(payload.currentCategory, 'products'), 
        // delete unneeded root categorie
        this.catalogService.getAllSiblingsOfCurrentCategory(payload.currentCategory === 'products' ? null : payload.currentCategory), this.catalogService.getChildren(payload.currentCategory))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => new _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppNavSuccess"]({
            breadcrumb: data[0].slice(1),
            feedSiblings: data[1],
            feedChildren: data[2],
            navLoading: false,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppFailure"](error))));
        this.getProducts = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["AppActionTypes"].LoadAppProducts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((actionAndStoreState) => {
            const combinedStoreWithPayload = Object.assign({}, actionAndStoreState[1].app.products, actionAndStoreState[0].payload // replace current values with incoming payload
            );
            return combinedStoreWithPayload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((combinedStoreWithPayload) => {
            return this.catalogService.getChildren(combinedStoreWithPayload.currentCategory)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((children) => {
                if (combinedStoreWithPayload.currentCategory === 'products') {
                    // if root
                    return this.dbService.allItems('products', combinedStoreWithPayload.display, this.environment.sortQueries[combinedStoreWithPayload.sort], combinedStoreWithPayload.skip, combinedStoreWithPayload.limit);
                }
                else if (!children.length) {
                    // if no children - show items
                    this.children = [];
                    return this.dbService.itemsByParents('products', [combinedStoreWithPayload.currentCategory], combinedStoreWithPayload.display, this.environment.sortQueries[combinedStoreWithPayload.sort], combinedStoreWithPayload.skip, combinedStoreWithPayload.limit);
                }
                else {
                    // show children (for menu) and all of every child items
                    this.children = children;
                    const childrenIds = children.map(item => item._id);
                    return this.dbService.itemsByParents('products', childrenIds, combinedStoreWithPayload.display, this.environment.sortQueries[combinedStoreWithPayload.sort], combinedStoreWithPayload.skip, combinedStoreWithPayload.limit);
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((response) => {
                const products = response.items;
                const { total } = response;
                const IncomingProductsAction = combinedStoreWithPayload.ProductsAction;
                return [
                    new _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppProductsSuccess"]({
                        currentCategory: combinedStoreWithPayload.currentCategory,
                        display: combinedStoreWithPayload.display,
                        sort: combinedStoreWithPayload.sort,
                        skip: combinedStoreWithPayload.skip,
                        limit: combinedStoreWithPayload.limit,
                        total
                    }),
                    new IncomingProductsAction({ products }),
                    new _actions_product_actions__WEBPACK_IMPORTED_MODULE_9__["LoadingProducts"]({ loading: false })
                ];
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppFailure"](error))));
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _services_catalog_service__WEBPACK_IMPORTED_MODULE_7__["CatalogService"] },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_8__["DbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], AppEffects.prototype, "loadNav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], AppEffects.prototype, "getProducts", void 0);
AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppEffects);



/***/ }),

/***/ "./src/app/effects/product-form.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/effects/product-form.effects.ts ***!
  \*************************************************/
/*! exports provided: ProductFormEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormEffects", function() { return ProductFormEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/product-form.actions */ "./src/app/actions/product-form.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");







let ProductFormEffects = class ProductFormEffects {
    constructor(actions$, productService) {
        this.actions$ = actions$;
        this.productService = productService;
        this.loadProductForm = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__["ProductFormActionTypes"].LoadProductForms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(payload => {
            if (payload._id) {
                // edit existing product
                return this.productService.getProduct(payload._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(product => new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__["LoadProductFormsSuccess"](product)));
            }
            else if (payload.parent) {
                // create new empty product
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__["AddProductForms"]({ parent: payload.parent }));
            }
            else if (payload.product) {
                // restore product from state
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__["LoadProductFormsSuccess"](payload.product));
            }
            else {
                // create new empty product
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__["LoadProductFormsSuccess"](null));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_4__["LoadProductFormsFailure"](error))));
    }
};
ProductFormEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProductFormEffects.prototype, "loadProductForm", void 0);
ProductFormEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductFormEffects);



/***/ }),

/***/ "./src/app/effects/product.effects.ts":
/*!********************************************!*\
  !*** ./src/app/effects/product.effects.ts ***!
  \********************************************/
/*! exports provided: ProductEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffects", function() { return ProductEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");



let ProductEffects = class ProductEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
};
ProductEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
];
ProductEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductEffects);



/***/ }),

/***/ "./src/app/effects/screen.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/effects/screen.effects.ts ***!
  \*******************************************/
/*! exports provided: ScreenEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenEffects", function() { return ScreenEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/screen.actions */ "./src/app/actions/screen.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/app.actions */ "./src/app/actions/app.actions.ts");







let ScreenEffects = class ScreenEffects {
    constructor(actions$, sharedService) {
        this.actions$ = actions$;
        this.sharedService = sharedService;
        this.getScreens = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__["ScreenActionTypes"].LoadScreens), 
        // map((action: LoadScreens) => console.log('action', action)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(_ => this.sharedService.loadScreens().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(state => [
            new _actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__["ChangedScreens"](state),
            new _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppProductsSuccess"]({ limit: state.picturesOnPage })
        ]))));
    }
};
ScreenEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ScreenEffects.prototype, "getScreens", void 0);
ScreenEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ScreenEffects);



/***/ }),

/***/ "./src/app/effects/user.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/user.effects.ts ***!
  \*****************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







let UserEffects = class UserEffects {
    // @Effect()
    // login: Observable<Action> = this.actions$.pipe(
    //   ofType(UserActionTypes.googleLogin),
    //   map((action: UserActions) => action.payload),
    //   switchMap(payload => from(this.fireService.googleSignin()).pipe(
    //     // successful login
    //     map(credential => new GetUser()))),
    //   catchError(err => of(new AuthError({ error: err.message })))
    // );
    // @Effect()
    // logout: Observable<Action> = this.actions$.pipe(
    //   ofType(UserActionTypes.logout),
    //   map((action: UserActions) => action.payload),
    //   switchMap(payload => of(this.afAuth.auth.signOut()).pipe(
    //     map(authData => new NotAuthenticated()),
    //     catchError(err => of(new AuthError({ error: err.message })))
    //   ))
    // );
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.getUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].getUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(payload => this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user) {
                // User logged in
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Authenticated"]({ user });
            }
            else {
                // User not logged in
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["NotAuthenticated"]();
            }
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"]())));
    }
};
UserEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "getUser", void 0);
UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserEffects);



/***/ }),

/***/ "./src/app/interfaces.ts":
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/*! exports provided: User, SortTypes, ScreenTypes, PictureTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortTypes", function() { return SortTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureTypes", function() { return PictureTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(_id, displayName, role, photoURL, // TODO add default
    provider, // TODO add default
    loading, // TODO add default
    error) {
        this._id = _id;
        this.displayName = displayName;
        this.role = role;
        this.photoURL = photoURL;
        this.provider = provider;
        this.loading = loading;
        this.error = error;
    }
}
var SortTypes;
(function (SortTypes) {
    SortTypes["CreatedAt"] = "CreatedAt";
    SortTypes["Views"] = "Views";
})(SortTypes || (SortTypes = {}));
var ScreenTypes;
(function (ScreenTypes) {
    ScreenTypes["xs"] = "xs";
    ScreenTypes["sm"] = "sm";
    ScreenTypes["md"] = "md";
    ScreenTypes["lg"] = "lg";
    ScreenTypes["xl"] = "xl";
})(ScreenTypes || (ScreenTypes = {}));
var PictureTypes;
(function (PictureTypes) {
    PictureTypes["ProductPicture"] = "ProductPicture";
    PictureTypes["DashboardProductPicture"] = "DashboardProductPicture";
    PictureTypes["ModalProductPicture"] = "ModalProductPicture";
})(PictureTypes || (PictureTypes = {}));


/***/ }),

/***/ "./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LWJyZWFkY3J1bWIvcHJvZHVjdC1icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBreadcrumbComponent", function() { return ProductBreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");





let ProductBreadcrumbComponent = class ProductBreadcrumbComponent {
    constructor(router, route, catalogService, store) {
        this.router = router;
        this.route = route;
        this.catalogService = catalogService;
        this.store = store;
    }
    ngOnInit() {
        this.store.select('app')
            .subscribe((store) => {
            this.breadcrumb = store.nav.breadcrumb;
            this.feedChildren = store.nav.feedChildren;
            this.navLoading = store.nav.navLoading;
        });
    }
};
ProductBreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ProductBreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-breadcrumb.component.scss */ "./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.scss")).default]
    })
], ProductBreadcrumbComponent);



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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "./src/app/modules/shared/modal/modal.component.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/actions/product.actions */ "./src/app/actions/product.actions.ts");
/* harmony import */ var _shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/modal-confirm/modal-confirm.component */ "./src/app/modules/shared/modal-confirm/modal-confirm.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");















let ProductItemComponent = class ProductItemComponent {
    constructor(media, userService, store, router, dialog, productService) {
        this.media = media;
        this.userService = userService;
        this.store = store;
        this.router = router;
        this.dialog = dialog;
        this.productService = productService;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
        this.store.select('screen')
            .subscribe((store) => {
            this.productPicture = store.pictureLink[_interfaces__WEBPACK_IMPORTED_MODULE_4__["PictureTypes"].ProductPicture];
            this.modalProductPicture = store.pictureLink[_interfaces__WEBPACK_IMPORTED_MODULE_4__["PictureTypes"].ModalProductPicture];
        });
        this.store.select('app')
            .subscribe((appStore) => {
            this.appStore = appStore;
        });
    }
    edit() {
        this.router.navigate(['/', 'dashboard', 'product-form'], { queryParams: { _id: this.product._id } });
    }
    deleteProduct() {
        const confirmObject = {
            message: `Дійсно видалити виріб: ${this.product.name || this.product._id} ?`,
            payload: this.product._id,
        };
        const dialogRef = this.dialog.open(_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ModalConfirmComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["mergeMap"])(result => {
            if (result && result.choise) {
                return this.productService.deleteProduct(this.product._id);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        }))
            .subscribe(result => {
            if (result && result.ok === 1) {
                // reload products
                this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__["LoadingProducts"]({ loading: true }));
                this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__["DeleteProduct"]({
                    id: this.product._id
                }));
                this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__["LoadingProducts"]({ loading: false }));
            }
        }, err => console.log('error delete', this.product._id));
    }
    allowTo(permittedRole) {
        return this.userService.allowTo(permittedRole);
    }
    openDialog() {
        // if (this.media.isActive('xs')) {
        //   return;
        // }
        this.productService.incViews(this.product._id)
            .subscribe(product => {
            // reload product
            this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateProduct"]({
                product: { id: this.product._id, changes: { views: product.views } }
            }));
        }, err => console.log('err', err));
        const imageObject = {
            picture: this.modalProductPicture.link + '/' + this.product.picture,
        };
        const dialogRef = this.dialog.open(_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], {
            data: imageObject,
        });
        dialogRef.afterClosed()
            .subscribe(result => {
        }, err => console.log('err', err));
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "loading", void 0);
ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-item/product-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item.component.scss */ "./src/app/modules/product/product-item/product-item.component.scss")).default]
    })
], ProductItemComponent);



/***/ }),

/***/ "./src/app/modules/product/product-nav/product-nav.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/product/product-nav/product-nav.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LW5hdi9wcm9kdWN0LW5hdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/product/product-nav/product-nav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/product/product-nav/product-nav.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNavComponent", function() { return ProductNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/actions/app.actions */ "./src/app/actions/app.actions.ts");
/* harmony import */ var src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/actions/product.actions */ "./src/app/actions/product.actions.ts");








let ProductNavComponent = class ProductNavComponent {
    constructor(router, route, catalogService, store) {
        this.router = router;
        this.route = route;
        this.catalogService = catalogService;
        this.store = store;
        this.SortTypes = src_app_interfaces__WEBPACK_IMPORTED_MODULE_2__["SortTypes"];
        this.sidenavCloseEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.store.select('app')
            .subscribe((store) => {
            // console.log('store', store);
            this.feedSiblings = store.nav.feedSiblings;
            this.sortToggle = store.products.sort;
            this.navLoading = store.nav.navLoading;
        });
    }
    onToggle(sort) {
        this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__["LoadingProducts"]({ loading: true }));
        this.store.dispatch(new src_app_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppProducts"]({ sort, skip: 0, ProductsAction: src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__["LoadProducts"] }));
    }
    sidenavClose() {
        this.sidenavCloseEmitter.emit();
    }
};
ProductNavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductNavComponent.prototype, "sidenavCloseEmitter", void 0);
ProductNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/product/product-nav/product-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-nav.component.scss */ "./src/app/modules/product/product-nav/product-nav.component.scss")).default]
    })
], ProductNavComponent);



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
/* harmony import */ var _product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-nav/product-nav.component */ "./src/app/modules/product/product-nav/product-nav.component.ts");





const routes = [
    {
        path: ':currentCategory',
        component: _product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
        children: [
            {
                path: '',
                component: _product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_4__["ProductNavComponent"],
            },
        ],
    },
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    }
    // {
    //   path: 'all',
    //   component: ProductComponent,
    //   // pathMatch: 'full'
    // },
    // {
    //   path: 'all',
    //   component: ProductNavComponent,
    //   outlet: 'sidenav',
    //   // pathMatch: 'full'
    // },
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
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/actions/app.actions */ "./src/app/actions/app.actions.ts");
/* harmony import */ var src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/actions/product.actions */ "./src/app/actions/product.actions.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let ProductComponent = class ProductComponent {
    constructor(productService, store, router, route, media) {
        this.productService = productService;
        this.store = store;
        this.router = router;
        this.route = route;
        this.media = media;
        this.products = [];
        this.children = [];
        this.topProgressBarActive = true;
        this.route.paramMap
            .subscribe(paramMap => {
            this.currentCategory = paramMap.get('currentCategory');
            if (this.currentCategory === 'all') {
                this.currentCategory = 'products';
            }
            this.store.dispatch(new src_app_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppNav"]({ currentCategory: this.currentCategory }));
            this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__["LoadingProducts"]({ loading: true }));
            this.store.dispatch(new src_app_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppProducts"]({
                currentCategory: this.currentCategory,
                ProductsAction: src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__["LoadProducts"],
                skip: 0
            }));
        });
    }
    ngOnInit() {
        this.store.select(src_app_reducers__WEBPACK_IMPORTED_MODULE_4__["selectProductLoadingAndEntities"])
            .subscribe((productsStore) => {
            this.compareChanges(productsStore.products);
            this.loading = productsStore.loading;
        });
        this.store.select('app')
            .subscribe((appStore) => {
            this.appStore = appStore;
        });
    }
    compareChanges(newProducts) {
        let theSame = true;
        if (!this.products.length && newProducts.length) {
            this.products = newProducts;
            return;
        }
        for (let i = 0; i < this.products.length; i++) {
            if (!newProducts[i]
                || this.products[i]._id !== newProducts[i]._id
                || this.products[i].views !== newProducts[i].views) {
                theSame = false;
                break;
            }
        }
        if (theSame) {
            this.products.push(...newProducts.slice(this.products.length));
        }
        else {
            this.products = newProducts;
        }
    }
    // Listening of page bottom reached
    onScroll(event) {
        this.topProgressBarActive = true;
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 300) {
            this.topProgressBarActive = false;
            if (!this.loading && this.appStore.products.skip + this.appStore.products.limit < this.appStore.products.total) {
                this.store.dispatch(new src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__["LoadingProducts"]({ loading: true }));
                this.store.dispatch(new src_app_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__["LoadAppProducts"]({
                    skip: this.appStore.products.skip + this.appStore.products.limit,
                    ProductsAction: src_app_actions_product_actions__WEBPACK_IMPORTED_MODULE_7__["AddProducts"],
                }));
            }
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["MediaObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], ProductComponent.prototype, "onScroll", null);
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
/* harmony import */ var _product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-nav/product-nav.component */ "./src/app/modules/product/product-nav/product-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _product_breadcrumb_product_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-breadcrumb/product-breadcrumb.component */ "./src/app/modules/product/product-breadcrumb/product-breadcrumb.component.ts");










let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"],
            _product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
            _product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_7__["ProductNavComponent"],
            _product_breadcrumb_product_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["ProductBreadcrumbComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            src_app_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"]
        ],
        exports: [
            _product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_7__["ProductNavComponent"],
        ]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/modules/shared/feedback/feedback.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/feedback/feedback.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shared/feedback/feedback.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/feedback/feedback.component.ts ***!
  \***************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let FeedbackComponent = class FeedbackComponent {
    constructor(location, sharedService, matSnackBar) {
        this.location = location;
        this.sharedService = sharedService;
        this.matSnackBar = matSnackBar;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.processing = false;
    }
    ngOnInit() {
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
        });
    }
    onFeedbackFormSubmit() {
        this.processing = true;
        this.feedback = this.feedbackForm.value;
        this.sharedService.sendFeedbackMessage(this.feedback, 'sddfsdf'
        //  this.feedbackForm.get('recaptcha').value
        )
            .subscribe(res => {
            this.matSnackBar.open(res, '', { duration: 3000 });
            console.log('feedback ', res);
            this.processing = false;
            this.resetForm();
            // this.location.back();
        }, err => {
            this.processing = false;
            console.log('feedback err ', err);
            this.matSnackBar.open(err.error.message, '', { duration: 3000 });
        });
    }
    resetForm() {
        if (this.feedbackFormDirective) {
            this.feedbackFormDirective.resetForm();
        }
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('feedbackFormDirective', { static: false })
], FeedbackComponent.prototype, "feedbackFormDirective", void 0);
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/modules/shared/feedback/feedback.component.scss")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/modules/shared/modal-confirm/modal-confirm.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/modal-confirm/modal-confirm.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL21vZGFsLWNvbmZpcm0vbW9kYWwtY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/shared/modal-confirm/modal-confirm.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/modal-confirm/modal-confirm.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmComponent", function() { return ModalConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ModalConfirmComponent = class ModalConfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onClose(choise, payload) {
        this.dialogRef.close({ choise, payload });
    }
};
ModalConfirmComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal-confirm/modal-confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-confirm.component.scss */ "./src/app/modules/shared/modal-confirm/modal-confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalConfirmComponent);



/***/ }),

/***/ "./src/app/modules/shared/modal/modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/modal/modal.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shared/modal/modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/modal/modal.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ModalComponent = class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/modules/shared/modal/modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/modules/shared/page404/page404.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/page404/page404.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/shared/page404/page404.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
    }
};
Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/page404/page404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.scss */ "./src/app/modules/shared/page404/page404.component.scss")).default]
    })
], Page404Component);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/modules/shared/page404/page404.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modules/shared/modal/modal.component.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-confirm/modal-confirm.component */ "./src/app/modules/shared/modal-confirm/modal-confirm.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/modules/shared/feedback/feedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ModalConfirmComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ],
        exports: [
            _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/reducers/app.reducer.ts":
/*!*****************************************!*\
  !*** ./src/app/reducers/app.reducer.ts ***!
  \*****************************************/
/*! exports provided: appFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appFeatureKey", function() { return appFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/app.actions */ "./src/app/actions/app.actions.ts");



const appFeatureKey = 'app';
const initialState = {
    products: {
        currentCategory: 'products',
        // productsPortion: [],
        display: true,
        sort: _interfaces__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].CreatedAt,
        skip: 0,
        limit: 9,
        total: 0,
    },
    nav: {
        feedSiblings: [],
        feedChildren: [],
        breadcrumb: [],
        navLoading: true,
    },
    error: null,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["AppActionTypes"].LoadAppNav: { // set loading before fires effect on tis action
            return Object.assign({}, state, { nav: Object.assign({}, state.nav, { navLoading: true }) });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["AppActionTypes"].LoadAppNavSuccess:
            return Object.assign({}, state, { nav: Object.assign({}, state.nav, action.payload) });
        // case AppActionTypes.LoadAppProducts: { // set loading before fires effect on tis action
        //   return { ...state, products: { ...state.products, productsLoading: true} };
        // }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["AppActionTypes"].LoadAppProductsSuccess:
            return Object.assign({}, state, { products: Object.assign({}, state.products, action.payload) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers, getProductState, selectProductEntities, selectAllProducts, selectProductLoadingAndEntities, getScreenState, selectScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductState", function() { return getProductState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductEntities", function() { return selectProductEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllProducts", function() { return selectAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductLoadingAndEntities", function() { return selectProductLoadingAndEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenState", function() { return getScreenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectScreen", function() { return selectScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.reducer */ "./src/app/reducers/user.reducer.ts");
/* harmony import */ var _product_form_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-form.reducer */ "./src/app/reducers/product-form.reducer.ts");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.reducer */ "./src/app/reducers/product.reducer.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.reducer */ "./src/app/reducers/app.reducer.ts");
/* harmony import */ var _screen_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screen.reducer */ "./src/app/reducers/screen.reducer.ts");








const reducers = {
    auth: _user_reducer__WEBPACK_IMPORTED_MODULE_3__["userReducer"],
    screen: _screen_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    productForm: _product_form_reducer__WEBPACK_IMPORTED_MODULE_4__["productFormReducer"],
    product: _product_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
    app: _app_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? [] : [];
const getProductState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('product');
// export const selectProductIds = createSelector(getProductState, fromProducts.selectIds);
const selectProductEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductState, _product_reducer__WEBPACK_IMPORTED_MODULE_5__["selectEntities"]);
const selectAllProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductState, _product_reducer__WEBPACK_IMPORTED_MODULE_5__["selectAll"]);
// export const selectTotalProducts = createSelector(getProductState, fromProducts.selectTotal);
const selectProductLoadingAndEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductState, state => ({ loading: state.loading, products: _product_reducer__WEBPACK_IMPORTED_MODULE_5__["selectAll"](state) })
// ({ loading: state.loading })
);
const getScreenState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('screen');
const selectScreen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getScreenState, state => state.picturesOnPage);


/***/ }),

/***/ "./src/app/reducers/product-form.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/reducers/product-form.reducer.ts ***!
  \**************************************************/
/*! exports provided: productFormFeatureKey, initialState, productFormReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFormFeatureKey", function() { return productFormFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFormReducer", function() { return productFormReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product-form.actions */ "./src/app/actions/product-form.actions.ts");



const productFormFeatureKey = 'productForm';
const initialState = {
    parent: 'products',
    _id: '',
    name: '',
    picture: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaults.productPicture,
    display: true,
};
function productFormReducer(state = initialState, action) {
    // console.log('product form reducer');
    switch (action.type) {
        case _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_2__["ProductFormActionTypes"].LoadProductFormsSuccess:
            return Object.assign({}, state, action.payload);
        case _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_2__["ProductFormActionTypes"].LoadProductFormsFailure:
            return Object.assign({}, state, initialState);
        case _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_2__["ProductFormActionTypes"].ResetProductForms:
            return Object.assign({}, state, initialState);
        case _actions_product_form_actions__WEBPACK_IMPORTED_MODULE_2__["ProductFormActionTypes"].AddProductForms:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/product.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/product.reducer.ts ***!
  \*********************************************/
/*! exports provided: productsFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsFeatureKey", function() { return productsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product.actions */ "./src/app/actions/product.actions.ts");



const productsFeatureKey = 'products';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: (product) => product._id,
});
const initialState = adapter.getInitialState({
    // additional entity state properties
    loading: true,
});
function reducer(state = initialState, action) {
    // console.log('product reducer', action.type);
    switch (action.type) {
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].LoadingProducts: { // listening on loading state changes
            return Object.assign({}, state, { loading: action.payload.loading });
        }
        // entity
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].AddProduct: {
            return adapter.addOne(action.payload.product, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].UpsertProduct: {
            return adapter.upsertOne(action.payload.product, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].AddProducts: {
            return adapter.addMany(action.payload.products, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].UpsertProducts: {
            return adapter.upsertMany(action.payload.products, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].UpdateProduct: {
            return adapter.updateOne(action.payload.product, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].UpdateProducts: {
            return adapter.updateMany(action.payload.products, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].DeleteProduct: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].DeleteProducts: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].LoadProducts: {
            return adapter.addAll(action.payload.products, state);
        }
        case _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["ProductActionTypes"].ClearProducts: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/reducers/screen.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/screen.reducer.ts ***!
  \********************************************/
/*! exports provided: screenFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenFeatureKey", function() { return screenFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_screen_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/screen.actions */ "./src/app/actions/screen.actions.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");



const screenFeatureKey = 'screen';
const initialState = {
    pictureLink: {
        [_interfaces__WEBPACK_IMPORTED_MODULE_2__["PictureTypes"].ProductPicture]: { link: '/', size: { w: 0, h: 0 } },
        [_interfaces__WEBPACK_IMPORTED_MODULE_2__["PictureTypes"].DashboardProductPicture]: { link: '/', size: { w: 0, h: 0 } },
    },
    picturesOnPage: 6,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_screen_actions__WEBPACK_IMPORTED_MODULE_1__["ScreenActionTypes"].ChangedScreens:
            return Object.assign({}, state, action.payload);
        case _actions_screen_actions__WEBPACK_IMPORTED_MODULE_1__["ScreenActionTypes"].LoadScreens:
            break;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/user.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/user.reducer.ts ***!
  \******************************************/
/*! exports provided: userFeatureKey, initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");



const userFeatureKey = 'user';
const initialState = {
    user: new _interfaces__WEBPACK_IMPORTED_MODULE_1__["User"](null, 'Guest', 'guest')
};
function userReducer(state = initialState, action) {
    // console.log('screen reducer');
    switch (action.type) {
        // fires and then effect fires on same action to fetch data
        // here is only for set loading to true (e. g. to show spinner)
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].getUser:
            return Object.assign({}, state, { user: Object.assign({}, state.user, { loading: true }) });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].authenticated:
            return Object.assign({}, state, { user: Object.assign({}, action.payload.user, { loading: false }) });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].notAuthenticated:
            return Object.assign({}, state, { user: Object.assign({}, initialState.user, { loading: false }) });
        // case UserActionTypes.googleLogin:
        //   return { ...state, user: { ...state.user, loading: true } };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].authError:
            return Object.assign({}, state, { user: Object.assign({}, action.payload.user, { loading: false }) });
        // case UserActionTypes.logout:
        //   return { ...state, user: { ...state.user, loading: true } };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate(next, state) {
        const requiredRoleForAuthorization = next.data.auth; // from routing.module
        return this.userService.userCheckAuthorization(requiredRoleForAuthorization)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((permission) => permission), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false)));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/catalog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/catalog.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CatalogService = class CatalogService {
    constructor(http) {
        this.http = http;
    }
    getPrefix(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-prefix/' + _id, httpOptions);
    }
    getChildren(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-children/' + _id, httpOptions);
    }
    /**
     * Get all parents of category(_id)
     * included current category
     * excluded root categories: home and common
     *
     */
    getAllParentsInclCurrentCategory(_id, topLevel) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('_id', _id)
                .set('topLevel', topLevel)
        };
        return this.http.get('api/catalog/get-all-parents-incl-current-category', httpOptions);
    }
    /**
     * Get all siblings of category(_id)
     ???* included current category
     *
     */
    getAllSiblingsOfCurrentCategory(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('_id', _id)
        };
        return this.http.get('api/catalog/get-all-siblings-of-current-category', httpOptions);
    }
};
CatalogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CatalogService);



/***/ }),

/***/ "./src/app/services/db.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DbService = class DbService {
    constructor(http) {
        this.http = http;
    }
    allItems(collection, displayFilter, sort, skip, limit) {
        if (!displayFilter) {
            displayFilter = false;
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('displayFilter', displayFilter + '')
                .set('sort', JSON.stringify(sort))
                .set('skip', skip + '')
                .set('limit', limit + '')
        };
        return this.http.get('api/db/all-items/' + collection, httpOptions);
    }
    itemsByParents(collection, parents, displayFilter, sort, skip, limit) {
        if (!displayFilter) {
            displayFilter = false;
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('displayFilter', displayFilter + '')
                .set('sort', JSON.stringify(sort))
                .set('skip', skip + '')
                .set('limit', limit + '')
                .set('parents', JSON.stringify(parents))
        };
        return this.http.get('api/db/items-by-parents/' + collection, httpOptions);
    }
};
DbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DbService);



/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");






let HttpInterceptorService = class HttpInterceptorService {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        // to modify request
        // req = req.clone();
        // return next.handle(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // fire action to check user auth
                this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUser"]());
                // to modify response
                // event = event.clone({ body: this.modifyBody(event.body) });
            }
            return event;
        }));
    }
    modifyBody(body) {
        /*
        * write your logic to modify the body
        * */
        return body;
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpInterceptorService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog.service */ "./src/app/services/catalog.service.ts");






let ProductService = class ProductService {
    constructor(http, catalogService) {
        this.http = http;
        this.catalogService = catalogService;
    }
    getProducts(filter) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('filter', JSON.stringify(filter))
        };
        return this.http.get('api/product/get-products/', httpOptions);
    }
    getProduct(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-product/' + _id, httpOptions);
    }
    upsertProduct(product) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('api/product/upsert-product', product, httpOptions);
    }
    getSkuList(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/product/get-sku-list/' + _id, httpOptions);
    }
    generateSku(parent_id) {
        const getPrefix$ = this.catalogService.getPrefix(parent_id);
        const getSkuList$ = this.getSkuList(parent_id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(getPrefix$, getSkuList$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            const { prefix } = result[0];
            console.log('skuList', result[1]);
            const skuList = result[1]
                .map(item => item._id) // create [] from {}
                .filter(item => item.slice(0, 3) === prefix) // take elems with needed prefix
                .map(item => +item.slice(3)); // concat prefix, take only numbers
            let freeNumber = 1;
            for (let i = 0; i < skuList.length; i++) {
                if (skuList[i] - (i + 1) >= 1) {
                    freeNumber = i + 1;
                    break;
                }
                if (i === skuList.length - 1) {
                    freeNumber = skuList.length + 1;
                }
            }
            let sku = freeNumber.toString();
            while (sku.length < 4) {
                sku = '0' + sku;
            }
            sku = prefix + sku;
            return sku;
        }, err => err));
    }
    // getProductsByParent(
    //   parent: string,
    //   collection: string,
    //   displayFilter?: boolean,
    //   sort?: number,
    //   skip?: number,
    //   limit?: number
    // ): Observable<[{ total: { totalProductsLength: number }, products: IProduct[] }]> {
    //   if (!displayFilter) {
    //     displayFilter = false;
    //   }
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //     }),
    //     params: new HttpParams()
    //       .set('parent', parent)
    //       .set('displayFilter', displayFilter + '')
    //       .set('collection', collection)
    //       .set('sort', sort + '')
    //       .set('skip', skip + '')
    //       .set('limit', limit + '')
    //   };
    //   return this.http.get<[{ total: { totalProductsLength: number }, products: IProduct[] }]>(
    //     'api/product/get-products-by-parent',
    //     httpOptions
    //   );
    // }
    incViews(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put('api/product/inc-views/' + _id, httpOptions);
    }
    deleteProduct(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.delete('api/product/delete/' + _id, httpOptions);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let SharedService = class SharedService {
    constructor(http, media) {
        this.http = http;
        this.media = media;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.cloudinaryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cloudinary.cloudHost + '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cloudinary.cloudName;
    }
    checkPictureFile(file) {
        if (!file) {
            return ({ err: 'Файл не вибрано' });
        }
        else if (file.size > 26215000) { // 25 * 1024 * 1024
            return ({ err: 'Розмір файлу повинен бути менше 25Мб' });
        }
        else if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpe' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/bmp' &&
            file.type !== 'image/png' &&
            file.type !== 'image/svg+xml' &&
            file.type !== 'image/webp') {
            return ({ err: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ err: null });
        }
    }
    uploadPicture(file, filePrefix, eager) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('filePrefix', filePrefix);
        formData.append('eager', JSON.stringify(eager));
        return this.http.post('api/shared/upload-picture', formData);
    }
    createPictureOptions(productPictureSize, screenType) {
        // tslint:disable-next-line: max-line-length
        return `c_fill,w_${productPictureSize[screenType].w},h_${productPictureSize[screenType].h},f_auto/w_${(productPictureSize[screenType].w) * 0.5},g_south_east,x_5,y_5,l_hmade_logo_light_watermark`;
    }
    createPictureLink(pictureType, screenType) {
        switch (pictureType) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ProductPicture: {
                return this.cloudinaryUrl + '/' +
                    this.createPictureOptions(this.environment.cloudinary.pictureSize[_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ProductPicture], screenType);
            }
            case _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].DashboardProductPicture: {
                return this.cloudinaryUrl + '/' +
                    this.createPictureOptions(this.environment.cloudinary.pictureSize[_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].DashboardProductPicture], screenType);
            }
            case _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ModalProductPicture: {
                return this.cloudinaryUrl + '/' +
                    this.createPictureOptions(this.environment.cloudinary.pictureSize[_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ModalProductPicture], screenType);
            }
            default: {
                return this.cloudinaryUrl;
            }
        }
    }
    loadScreens() {
        return this.media.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((_) => {
            const screenState = {};
            screenState.pictureLink = {};
            // link to cloudinary pictures depend on screen size
            for (const pictureType in _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"]) {
                if (_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].hasOwnProperty(pictureType)) { //  && !isNaN(Number(pictureType))) {
                    screenState.pictureLink[pictureType] = {};
                    if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs);
                    }
                    else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm);
                    }
                    else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md);
                    }
                    else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg);
                    }
                    else {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl);
                    }
                }
            }
            // portion of pictures to load depend on screen size
            if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs];
            }
            else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm];
            }
            else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md];
            }
            else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg];
            }
            else {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl];
            }
            return screenState;
        }));
    }
    sendFeedbackMessage(feedback, recaptcha) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post('api/shared/send-feedback-message', feedback, httpOptions);
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let UserService = class UserService {
    constructor(http, cookieService, store) {
        this.http = http;
        this.cookieService = cookieService;
        this.store = store;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"];
        this.store.select('auth')
            .subscribe(storeState => this.user = storeState.user);
    }
    getUser() {
        const cookie = this.cookieService.get('hm');
        if (cookie) {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            const user = helper.decodeToken(cookie).sub;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(user);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
    }
    logout() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/logout', httpOptions);
    }
    /** Session
     * Used for router guard (canActivate)
     *
     */
    userCheckAuthorization(requiredRoleForAuthentication) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({ fromString: `role=${requiredRoleForAuthentication}` })
        };
        return this.http.get('api/user/checkAuthorization', httpOptions);
    }
    /**
     * Helper for frontend authorization
     * Check user permittion for some restricted actions
     * like menu displaying..
     *
     */
    allowTo(permitedRole) {
        const permissions = this.environment.permissions;
        if (!this.user._id && permitedRole === 'notUser') {
            return true;
        }
        if (!this.user._id) {
            return false;
        }
        const roleFromCookie = this.user.role;
        if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    restrictTo(restrictedRoles) {
        if (!this.user) {
            return true;
        }
        const roleFromCookie = this.user.role;
        if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    host: 'https://localhost:8082',
    cloudinary: {
        cloudName: 'hd1oejweg',
        cloudHost: 'https://res.cloudinary.com',
        pictureSize: {
            ProductPicture: {
                xs: {
                    w: 590,
                    h: 443
                },
                sm: {
                    w: 460,
                    h: 345
                },
                md: {
                    w: 300,
                    h: 225
                },
                lg: {
                    w: 360,
                    h: 270
                },
                xl: {
                    w: 360,
                    h: 270
                }
            },
            DashboardProductPicture: {
                xs: {
                    w: 590,
                    h: 443
                },
                sm: {
                    w: 460,
                    h: 345
                },
                md: {
                    w: 300,
                    h: 225
                },
                lg: {
                    w: 360,
                    h: 270
                },
                xl: {
                    w: 360,
                    h: 270
                }
            },
            ModalProductPicture: {
                xs: {
                    w: 590,
                    h: 443
                },
                sm: {
                    w: 760,
                    h: 570
                },
                md: {
                    w: 760,
                    h: 570
                },
                lg: {
                    w: 1100,
                    h: 825
                },
                xl: {
                    w: 1100,
                    h: 825
                }
            }
        }
    },
    defaults: {
        productPicture: 'default_product',
        userPicture: 'default_avatar',
        picturesOnPage: {
            xs: 6,
            sm: 6,
            md: 9,
            lg: 12,
            xl: 15
        }
    },
    permissions: {
        admin: ['casual', 'guest', 'user', 'manager', 'admin', 'google', 'facebook'],
        manager: ['casual', 'guest', 'user', 'manager', 'google', 'facebook'],
        user: ['casual', 'guest', 'user', 'google', 'facebook'],
        google: ['casual', 'guest', 'user', 'google'],
        facebook: ['casual', 'guest', 'user', 'facebook'],
        guest: ['casual', 'guest'],
        casual: ['casual']
    },
    sortQueries: {
        CreatedAt: { createdAt: -1 },
        Views: { views: -1, createdAt: -1 },
    },
    seoTitle: 'HMADE - Майстерня творчості HandMADE. Ручна робота. Букети, іграшки, декор, оформлення',
    seoMeta: 'Цікаві ідеї для творчості. Солодкі букети з цекерок, букети з квітів, композиції з овочів та фруктів. Дизайн, декор, оформлення. Іграшки ручної роботи, в\'язання.',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\it\vs\hm\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map