webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/auth/login-signup/login-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'login-signup',
        component: __WEBPACK_IMPORTED_MODULE_2__login_signup_login_signup_component__["a" /* LoginSignupComponent */]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/auth/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_signup_login_signup_component__["a" /* LoginSignupComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login-signup/login-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login-signup/login-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(94,227,86,0.18)\"\nsize = \"default\"\ncolor = \"#fff\"\ntype = \"square-jelly-box\"\n></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Banner -->\n<div class=\"banner login-signup\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t<p>Log In or Sign Up for a free account.<br>\n\t\t\t\t\tRegistered users can post reviews, upload, bookmark strains,<br>follow dispensaries and much more!</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n</div>\n<!-- End Banner -->\n\n<!-- This is a Login Form -->\n<section class=\"main-log-form\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-4 col-sm-offset-2\">\n\t\t\t\t<div class=\"inner-form\">\n\t\t\t\t\t<h2>{{userType == 'dispensary' ? '' : 'User'}} Log In</h2>\n\t\t\t\t\t<form action=\"\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"email1\">Email</label>\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\"  id='email1' [(ngModel)]=\"login.username\" placeholder=\"Email\" name=\"email1\" required>\n\t\t\t\t\t    </div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"password1\">Password</label>\n\t\t\t\t\t\t    <input type=\"password\" class=\"form-control\"  id='password1' [(ngModel)]=\"login.password\" placeholder=\"Password\" name=\"password1\" required>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div>\n\t\t\t\t\t    \t<div class=\"col-sm-6 text-left p-o\"><span class=\"psw\">Forgot password?</span></div>\n\t\t\t\t\t    \t<div class=\"col-sm-6 text-right p-o\"><button (click)=\"loginUser()\" type=\"submit\">Login</button></div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t     <div class=\"form-group text-danger\" *ngIf=\"errLogin\">\n\t\t\t\t\t    \tEmail id or password not correct.\n\t\t\t\t\t    </div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"inner-form\">\n\t\t\t\t\t<h2>{{userType == 'dispensary' ? '' : 'User'}} Sign Up</h2>\n\t\t\t\t\t<form action=\"\">\n\t\t\t\t\t\t<!-- <div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"firstName\">First Name</label>\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\"  id='firstName' [(ngModel)]=\"register.firstName\" placeholder=\"First Name\" name=\"firstName\" required>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"lastName\">Last Name</label>\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\"  id='lastName' [(ngModel)]=\"register.lastName\" placeholder=\"Last Name\" name=\"lastName\" required>\n\t\t\t\t\t    </div> -->\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"username1\">{{ userType == 'dispensary' ? 'Username' : 'Business name'}}</label>\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\"  id='username1' [(ngModel)]=\"register.username1\" placeholder=\"Username\" name=\"username1\" required>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"email\">Email</label>\n\t\t\t\t\t\t    <input type=\"email\"  autocomplete=\"off\"  class=\"form-control\"  id='email' [(ngModel)]=\"register.email\" placeholder=\"Email\" name=\"email\" required>\n\t\t\t\t\t    </div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t    <label for=\"password\">Password</label>\n\t\t\t\t\t\t    <input type=\"password\"  autocomplete=\"off\"  class=\"form-control\"  id='password' [(ngModel)]=\"register.password\" placeholder=\"Password\" name=\"password\" required>\n\t\t\t\t\t    </div>\n\n\t\t\t\t\t    <div class=\"form-group\" *ngIf=\"userType == 'dispensary'\">\n\t\t\t\t\t\t    <label for=\"roles\">Type</label>\n\t\t\t\t\t\t    <select id=\"roles\" class=\"form-control\" name=\"roles\" [(ngModel)]=\"register.roles\">\n\t\t\t\t\t\t    \t<!-- <option value=\"U\">User</option> -->\n\t\t\t\t\t\t    \t<option value=\"D\">Dispensary</option>\n\t\t\t\t\t\t    \t<option value=\"B\">Brand</option>\n\t\t\t\t\t\t    \t<option value=\"DR\">Doctor</option>\n\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t    <!-- <input type=\"number\" class=\"form-control\"  id='roles' [(ngModel)]=\"register.roles\" placeholder=\"First Name\" name=\"roles\" required> -->\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t      <span class=\"input-single\"><input type=\"checkbox\" [(ngModel)]=\"acceptTerms\" id='acceptTerms' name=\"acceptTerms\"><label for=\"\">I accept and agree to the <a href=\"\">Term of Use</a> and <br><a href=\"\">privacy policy</a> & certify that i am over 18 </label></span>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group text-success\" *ngIf=\"successRegister\">\n\t\t\t\t\t    \t{{successRegister}}\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group text-danger\" *ngIf=\"errRegister\">\n\t\t\t\t\t    \t{{errRegister}}\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"text-right\">\n\t\t\t\t\t    \t<button type=\"submit\" (click)=\"registerUser()\">SIGN UP</button>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div><br><br>\n\t\t\t<div class=\"col-sm-12 text-center login-dtl\">\n\t\t\t\t<p>Business Owners: <a >Claim or Add a Business</a> | <a (click)=\"changeType()\" style=\"cursor:pointer\">Business Log /In or Sign Up</a></p>\n\t\t\t\t<!-- <p>Instaleaf Portal: <a href=\"http://18.222.19.50:3001/#/login\" target=\"_blank\"  >Log In</a></p> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Login Form -->\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/login-signup/login-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginSignupComponent = /** @class */ (function () {
    // email@e.coml
    function LoginSignupComponent(_router, _sharedService, _cookieService) {
        this._router = _router;
        this._sharedService = _sharedService;
        this._cookieService = _cookieService;
        this.login = {
            username: '',
            password: ''
        };
        this.register = {
            // firstName:'',
            // lastName:'',
            username1: '',
            email: '',
            password: '',
            username: '',
            roles: 'U'
        };
        this.userType = 'endUser';
        this.acceptTerms = false;
        this.errLogin = false;
        this.errRegister = '';
        this.successRegister = '';
    }
    LoginSignupComponent.prototype.ngOnInit = function () { };
    LoginSignupComponent.prototype.loginUser = function () {
        var _this = this;
        this.errLogin = false;
        var data = JSON.parse(JSON.stringify(this.login));
        this._sharedService.loader('show');
        this._sharedService.login(data).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this._sharedService.showAlert('Login Successfully', 'alert-success');
                var route = '/item-dashboard';
                _this._cookieService.put('token', res.data.access_token);
                _this._cookieService.put('roles', res.data.roles);
                _this._cookieService.put('loginID', res.data.id);
                _this._cookieService.putObject('user', res.data);
                if (res.data.roles == 'U')
                    route = '/dashboard';
                _this._router.navigate([route]);
            }
            else {
                _this._sharedService.showAlert(res.error.message, 'alert-success');
                _this.errLogin = true;
            }
        }, function (error) {
            _this._sharedService.showAlert("There are some error please try after some time.", 'alert-success');
        });
    };
    LoginSignupComponent.prototype.registerUser = function () {
        var _this = this;
        if (!this.acceptTerms) {
            this._sharedService.showAlert('Please accept terms and conditions.', 'alert-danger');
            // this.errRegister = 'Please accept terms and conditions.'
            return;
        }
        this.errRegister = '';
        var data = JSON.parse(JSON.stringify(this.register));
        data['username'] = data['email'];
        data['Type'] = data['roles'];
        this._sharedService.loader('show');
        this._sharedService.register(data).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this._sharedService.showAlert('Registered Successfuly', 'alert-success');
                // this.successRegister = 'Register Successfuly';
                _this.register = {
                    // firstName:'',
                    // lastName:'',
                    username1: '',
                    username: '',
                    email: '',
                    password: '',
                    roles: 'U'
                };
            }
            else {
                _this._sharedService.showAlert(res.error.message, 'alert-danger');
                // this.errRegister = res.error.message;
            }
        }, function (error) {
            _this._cookieService.put('token', 'token');
            _this._cookieService.putObject('actions', { 'actions': 'A' });
        });
    };
    LoginSignupComponent.prototype.changeType = function () {
        var _this = this;
        this._sharedService.loader('show');
        setTimeout(function () {
            _this._sharedService.loader('hide');
            window.scrollTo(500, 0);
            _this.register.roles = 'D';
            _this.userType = 'dispensary';
        }, 500);
    };
    LoginSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-signup',
            template: __webpack_require__("../../../../../src/app/auth/login-signup/login-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login-signup/login-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]])
    ], LoginSignupComponent);
    return LoginSignupComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map