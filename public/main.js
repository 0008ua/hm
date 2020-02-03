(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/product/product.module": [
		"./src/app/modules/product/product.module.ts",
		"modules-product-product-module"
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
	return __webpack_require__.e(ids[1]).then(function() {
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
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"toolbar toolbar_header\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"toolbar__logo\" fxFlex.lt-md=\"80\" fxFlex=\"25\" fxLayoutAlign=\"start center\">\r\n    <a href=\"\">\r\n      <img src=\"./assets/images/hmade_logo_light.svg\" height=\"36px\" alt=\"logo\">\r\n    </a>\r\n  </div>\r\n  <div fxFlex fxHide.lt-md=\"true\"></div>\r\n  <!-- <button (click)=\"statusFB()\">Status</button>\r\n  <button (click)=\"api()\">api</button>\r\n  <button (click)=\"logoutFB()\">logout</button>\r\n  <button (click)=\"loginFB()\">login</button> -->\r\n  <div class=\"toolbar__links\" fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\r\n    <a *ngIf=\"!user._id\" mat-button class=\"\" [routerLink]=\"['/', 'user', 'login']\" [routerLinkActive]=\"['active']\"\r\n      [routerLinkActiveOptions]=\"{exact: false}\">\r\n      <span>Login</span>\r\n    </a>\r\n    <a *ngIf=\"user._id\" mat-button class=\"\" (click)=\"logout()\">\r\n      <span>Logout</span>\r\n    </a>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"toolbar__menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\" fxFlex=\"20\" fxLayoutAlign=\"end center\">\r\n    <button mat-button (click)=\"sidenav.toggle()\" aria-label=\"Menu\">\r\n      <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\r\n      <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n    </button>\r\n  </div>\r\n</header>\r\n<main fxLayout>\r\n  <mat-sidenav-container fxFlex>\r\n\r\n    <!-- [fixedInViewport]=\"true\" [fixedTopGap]=\"0\" [fixedBottomGap]=\"0\" -->\r\n    <mat-sidenav class=\"sidenav\" #sidenav position=\"end\" closed role=\"navigation\" mode=\"over\">\r\n      <div fxLayout=\"column\">\r\n        <div class=\"sidenav__logo\" fxFlex fxLayoutAlign=\"center start\">\r\n          <a href=\"\">\r\n            <img src=\"./assets/images/hmade_logo_light.svg\" height=\"36px\" alt=\"logo\">\r\n          </a>\r\n        </div>\r\n        <div class=\"sidenav__links\" fxFlex fxLayoutAlign=\"center center\">\r\n          <a class=\"\" [routerLink]=\"['/', 'user', 'login']\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{exact: false}\">\r\n            <span>Login</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div class=\"container-h container-v\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</main>\r\n<footer class=\"toolbar toolbar_footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  Footer\r\n  <div style=\"font-size: 9px;\">{{user | json}}</div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/page404/page404.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/page404/page404.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page404 works!</p>\n");

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
        ],
        exports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
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




const routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
    },
    {
        path: '',
        loadChildren: './modules/product/product.module#ProductModule',
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





let AppComponent = class AppComponent {
    constructor(userService, store) {
        this.userService = userService;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetUser"]());
        this.store.select('auth')
            .subscribe(store => this.user = store.user);
    }
    // api() {
    //   this.fbService.FB.api('/me',
    //     {fields: 'id,name,birthday,email' },
    //     function (response) {
    //       console.log('api', response);
    //     }
    //   );
    // }
    // statusFB() {
    //   this.fbService.FB.getLoginStatus((response) => {
    //     console.log('response', response);
    //     if (response.status === 'connected') {
    //       console.log('connected');
    //       // The user is logged in and has authenticated your
    //       // app, and response.authResponse supplies
    //       // the user's ID, a valid access token, a signed
    //       // request, and the time the access token 
    //       // and signed request each expire.
    //       var uid = response.authResponse.userID;
    //       var accessToken = response.authResponse.accessToken;
    //     } else if (response.status === 'not_authorized') {
    //       console.log('not_authorized');
    //       // The user hasn't authorized your application.  They
    //       // must click the Login button, or you must call FB.login
    //       // in response to a user gesture, to launch a login dialog.
    //     } else {
    //       console.log('else');
    //       // The user isn't logged in to Facebook. You can launch a
    //       // login dialog with a user gesture, but the user may have
    //       // to log in to Facebook before authorizing your application.
    //     }
    //   });
    // }
    // logoutFB() {
    //   this.fbService.logout();
    // }
    // loginFB() {
    //   this.fbService.login();
    // }
    logout() {
        this.userService.logout().subscribe(logout => console.log(logout));
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
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
/* harmony import */ var _effects_app_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/app.effects */ "./src/app/effects/app.effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./effects/user.effects */ "./src/app/effects/user.effects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _effects_product_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/product.effects */ "./src/app/effects/product.effects.ts");




















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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_app_effects__WEBPACK_IMPORTED_MODULE_13__["AppEffects"], _effects_user_effects__WEBPACK_IMPORTED_MODULE_15__["UserEffects"], _effects_product_effects__WEBPACK_IMPORTED_MODULE_19__["ProductEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__["CookieService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["HttpInterceptorService"], multi: true },
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
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");



let AppEffects = class AppEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
];
AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppEffects);



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
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
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




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducer */ "./src/app/reducers/user.reducer.ts");



const reducers = {
    auth: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


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






let UserService = class UserService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
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
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
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
    host: 'https://localhost:8082'
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