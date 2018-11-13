webpackJsonp(["item-dashboard.module"],{

/***/ "../../../../../src/app/item-dashboard/account-info/account-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-dashboard/account-info/account-info.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Login Form -->\n<section class=\"dispen-dashboard\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<!-- Tab links -->\n\t\t\t\t<div class=\"dispen-dashboard-nav\">\n\t\t\t\t\t<ul  class=\"nav nav-pills\">\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard\">Store Details</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/my-menu\" *ngIf=\"roles == 'D' || roles == 'B'\">My Menu</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/reviews\">Review</a></li>\n\t\t\t\t\t\t<li class=\"active\"><a>Account Info</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tab content -->\n\t\t\t\t<div class=\"tab-content-wrapper clearfix\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"tab-pane\">\n\t\t\t\t\t\t<div class=\"inn-container\">\n\t\t\t\t\t\t\t<h3 class=\"dis-dash-title\">Account Info</h3>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 p-o\">\n\t\t\t\t\t\t\t\t<span class=\"password-tit\"><b>Business name</b></span>\n\t\t\t\t\t\t\t\t<p class=\"password-txt\">{{user.username1}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 p-o\">\n\t\t\t\t\t\t\t\t<span class=\"password-tit\"><b>Email</b></span>\n\t\t\t\t\t\t\t\t<p class=\"password-txt\">{{user.email}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 p-o\">\n\t\t\t\t\t\t\t\t\t<span class=\"password-tit\"><b>Change Password</b></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<div class=\"change-password-wrap\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 p-o\">\n\t\t\t\t\t\t\t\t\t\t<label>Current Password</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"currentPassword\" id=\"currentPassword\" [(ngModel)]=\"obj.currentPassword\" class=\"form-control\" placeholder=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 p-o\">\n\t\t\t\t\t\t\t\t\t\t<label>New Password</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"newPassword\" id=\"newPassword\" [(ngModel)]=\"obj.newPassword\" class=\"form-control\" placeholder=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<label><!-- New Password (Again) -->Confirm Password</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" [(ngModel)]=\"obj.confirmPassword\" class=\"form-control\" placeholder=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"errMessage\" class=\"col-sm-8 text-right text-danger\">\n\t\t\t\t\t\t\t\t\t\t{{errMessage}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"successMessage\" class=\"col-sm-8 text-right text-success\">\n\t\t\t\t\t\t\t\t\t\t{{successMessage}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 text-right\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn cus-btn cus-login\" (click)=\"changePassword()\" >Change Password</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Login Form -->\n\n\n\n\n<div class=\"clearfix\"></div>\n\n<!-- Modal -->\n<div class=\"modal fade product-modal in\" id=\"unfav\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\n\t  <!-- Modal content-->\n\t  <div class=\"modal-content\">\n\t    <div class=\"modal-header\">\n\t      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n\t    </div>\n\t    <div class=\"modal-body\">\n\t      <div class=\"col-sm-4\">\n\t      \t<img src=\"assets/img/pop-pro-img.jpg\" class=\"img-responsive\">\n\t      </div>\n\t      <div class=\"col-sm-8\">\n\t      \t<div class=\"model-review-tit\">\n\t      \t\t<h4>Chem File</h4>\n\t      \t\t<span><img src=\"assets/img/favicon.png\"><img src=\"assets/img/favicon.png\"><img src=\"assets/img/favicon.png\"><img src=\"assets/img/favicon.png\"><img src=\"assets/img/favicon.png\"></span>\n\t      \t\t<span class=\"ret-model\">4.43|1094 Stari Reviews</span>\n\t      \t\t<h6>INDICA</h6>\n\t      \t</div>\n\t      \t<ul class=\"pln-list\">\n\t\t\t\t<li>\n\t\t\t\t\t<p>1GB</p>\n\t\t\t\t\t<h6>$10</h6>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p>2GB</p>\n\t\t\t\t\t<h6>$20</h6>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p>1/8</p>\n\t\t\t\t\t<h6>$35</h6>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p>1/4</p>\n\t\t\t\t\t<h6>$70</h6>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p>1/2</p>\n\t\t\t\t\t<h6>$130</h6>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p>OZ</p>\n\t\t\t\t\t<h6>$230</h6>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<p>Mix and match with 4 different 1/4's from our wild selection of regular strains for a discounted price.</p>\n\t\t\t<p>CA Residents: <a href=\"#\">Proposition 65 warning</a></p>\n\t      </div>\n\t    </div>\n\t    <div class=\"modal-footer\">\n\t    </div>\n\t  </div>\n\t  \n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/item-dashboard/account-info/account-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountInfoComponent = /** @class */ (function () {
    function AccountInfoComponent(_sharedService) {
        this._sharedService = _sharedService;
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].config.BASE_URL;
        this.user = {};
        this.obj = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        };
        this.errMessage = '';
        this.successMessage = '';
    }
    AccountInfoComponent.prototype.ngOnInit = function () {
        this.fetch();
        this.roles = this._sharedService.getRoles();
    };
    AccountInfoComponent.prototype.fetch = function () {
        var _this = this;
        this._sharedService.get('getuserdetail').then(function (res) {
            if (res.success) {
                _this.user = res.data.user;
            }
            else {
            }
        }, function (error) { });
    };
    AccountInfoComponent.prototype.changePassword = function () {
        var _this = this;
        this.errMessage = '';
        this.successMessage = '';
        var body = {
            currentPassword: this.obj.currentPassword,
            newPassword: this.obj.newPassword,
            confirmPassword: this.obj.confirmPassword
        };
        this._sharedService.loader('show');
        this._sharedService.put(body, 'changepassword').then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.successMessage = res.message;
                _this.obj = {
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                };
            }
            else {
                _this.errMessage = res.error.message;
            }
        }, function (error) { });
    };
    AccountInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-info',
            template: __webpack_require__("../../../../../src/app/item-dashboard/account-info/account-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-dashboard/account-info/account-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__["a" /* SharedService */]])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Login Form -->\n<section class=\"dispen-dashboard\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"dispen-dashboard-nav\">\n\t\t\t\t\t<ul  class=\"nav nav-pills\">\n\t\t\t\t\t\t<li class=\"active\"><a>{{roles == 'DR' ? 'Doctor':''}} {{roles == 'D' ? 'Store':''}} {{roles == 'B' ? 'Brand':''}} Details</a></li>\n\t\t\t\t\t\t<li *ngIf=\"((roles == 'D' || roles == 'B') && showMyMenu)\"><a href=\"#/item-dashboard/my-menu\">My Menu</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/reviews\">Review</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/account-info\">Account Info</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tab content -->\n\t\t\t\t<div class=\"tab-content-wrapper clearfix\">\n\t\t\t\t\t<div class=\"active\">\n\t\t\t\t\t\t<div class=\"inn-container\">\n\t\t\t\t\t\t\t<h3 class=\"dis-dash-title\">{{roles == 'DR' ? 'Doctor':''}} {{roles == 'D' ? 'Store':''}} {{roles == 'B' ? 'Brand':''}} Details</h3>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" id=\"name\" [(ngModel)]=\"object.name\" class=\"form-control\" placeholder=\"Name\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"address\" id=\"address\" [(ngModel)]=\"object.address\" class=\"form-control\" placeholder=\"Address\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"object.city\" class=\"form-control\" placeholder=\"City\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t<label>Postal Code</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"postal_code\" id=\"postal_code\" [(ngModel)]=\"object.postal_code\" class=\"form-control\" placeholder=\"Postal Code\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"email\" id=\"email\" [(ngModel)]=\"object.email\" class=\"form-control\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<label>Website</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"website\" id=\"website\" [(ngModel)]=\"object.website\" class=\"form-control\" placeholder=\"Website\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<label>Phone</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"mobile\" id=\"mobile\" [(ngModel)]=\"object.mobile\" class=\"form-control\" placeholder=\"Phone\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<label>Logo</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input #myInput type=\"file\" name=\"image\" id=\"image\" data-multiple-caption=\"{count} files selected\" multiple imageUpload\n                (imageSelected)=\"uploadImage($event)\"\n                 accept=\"image/jpg, image/jpeg, image/png, image/gif\" class=\"logo-file-input\">\n\t\t\t\t\t\t\t\t\t\t\t<span>Upload</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-show-img\"><img *ngIf=\"!object.image\" src=\"assets/img/no-image.jpg\" style=\"width: 100px;margin-top: 10px;\"> <img style=\"width: 100px;margin-top: 10px;\" *ngIf=\"object.image\" src=\"{{_host}}images/dispensary/thumbnail/200/{{object.image}}\"> </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<label>About Us Text</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"50\" id=\"about_us\" name=\"about_us\" [(ngModel)]=\"object.about_us\" class=\"form-control text-form-control\" placeholder=\"About Us\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t    \t<div class=\"operation-steep\" *ngIf=\"roles != 'B'\">\n\t\t\t\t\t\t\t\t    \t\t<h4 class=\"rit-main-title\">Hours Of Operation</h4>\n\t\t\t\t\t\t\t\t\t    \t<ul class=\"hours-oper\">\n\t\t\t\t\t\t\t\t\t    \t\t<li *ngFor=\"let obj of object.scheduler\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"day\">{{obj.day}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"startTime\" id=\"startTime\" [(ngModel)]=\"obj.startTime\" class=\"form-control\">-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"closeTime\" id=\"closeTime\" [(ngModel)]=\"obj.closeTime\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn cus-btn cus-login\" (click)=\"save()\">{{ itemID ? 'Update':'Save'}} Detail</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Login Form -->\n"

/***/ }),

/***/ "../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddupdateItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddupdateItemComponent = /** @class */ (function () {
    function AddupdateItemComponent(_router, _sharedService) {
        this._router = _router;
        this._sharedService = _sharedService;
        this.object = {
            name: '',
            address: '',
            city: '',
            postal_code: null,
            email: '',
            mobile: null,
            website: '',
            about_us: '',
            image: '',
            logo: '',
            lat: 1,
            businessType: 'doctor',
            medical: null,
            recreation: null,
            lng: 1,
            isFeatured: false,
            scheduler: []
        };
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].config.BASE_URL;
        this.itemID = '';
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.showMyMenu = true;
    }
    AddupdateItemComponent.prototype.ngOnInit = function () {
        this.fetch();
        this.roles = this._sharedService.getRoles();
    };
    AddupdateItemComponent.prototype.fetch = function () {
        var _this = this;
        this._sharedService.get('getDispensary').then(function (res) {
            if (res.success) {
                _this.object = res.data.key;
                _this.itemID = _this.object.id;
            }
            else {
                _this.showMyMenu = false;
                if (_this.roles != 'B')
                    _this.addScheduler();
            }
        }, function (error) {
            if (_this.roles != 'B')
                _this.addScheduler();
            _this.showMyMenu = false;
        });
    };
    AddupdateItemComponent.prototype.addScheduler = function () {
        var _this = this;
        this.days.forEach(function (key) {
            var obj = {
                day: key,
                startTime: '9:00AM',
                closeTime: '5:00PM'
            };
            _this.object.scheduler.push(obj);
        });
    };
    AddupdateItemComponent.prototype.save = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.object));
        this._sharedService.loader('show');
        if (this.itemID) {
            var path = 'edit_dispensary/' + this.itemID;
            this._sharedService.put(data, path).then(function (res) {
                _this._sharedService.loader('hide');
                if (res.success) {
                    var dType = _this.object.businessType == 'doctor' ? 'Doctor' : _this.object.businessType == 'dispensary' ? 'Dispensary' : 'Brand';
                    var message = dType + ' Updated Successfully';
                    _this._sharedService.showAlert(message, 'alert-success');
                }
                else {
                    _this._sharedService.showAlert(res.error.message, 'alert-danger');
                }
            }, function (error) { });
        }
        else {
            data['businessType'] = this.roles == 'B' ? 'brand' : this.roles == 'D' ? 'dispensary' : 'doctor';
            this._sharedService.post(data, 'add_dispensary').then(function (res) {
                _this._sharedService.loader('hide');
                if (res.success) {
                    var dType = _this.object.businessType == 'doctor' ? 'Doctor' : _this.object.businessType == 'dispensary' ? 'Dispensary' : 'Brand';
                    var message = dType + ' Created Successfully';
                    _this._sharedService.showAlert(message, 'alert-success');
                    _this._router.navigate(["/item-dashboard/my-menu"]);
                    _this.showMyMenu = true;
                }
                else {
                    _this._sharedService.showAlert(res.error.message, 'alert-danger');
                }
            }, function (error) { });
        }
    };
    AddupdateItemComponent.prototype.uploadImage = function (imageResult) {
        var _this = this;
        var object = {
            data: imageResult.dataURL,
            type: 'dispensary'
        };
        this.myInputVariable.nativeElement.value = "";
        this._sharedService.loader('show');
        this._sharedService.post(object, 'upload').then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.object.image = res.data.fullPath;
            }
            else {
            }
        }, function (err) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], AddupdateItemComponent.prototype, "myInputVariable", void 0);
    AddupdateItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addupdate-item',
            template: __webpack_require__("../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__["a" /* SharedService */]])
    ], AddupdateItemComponent);
    return AddupdateItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-dashboard/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Login Form -->\n<section class=\"dispen-dashboard\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"dispen-dashboard-nav\">\n\t\t\t\t\t<ul  class=\"nav nav-pills\">\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard\">{{roles == 'DR' ? 'Doctor':''}} {{roles == 'D' ? 'Store':''}} {{roles == 'B' ? 'Brand':''}} Details</a></li>\n\t\t\t\t\t\t<li  class=\"active\"><a href=\"#/item-dashboard/my-menu\">My Menu</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/reviews\">Review</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/account-info\">Account Info</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tab content -->\n\t\t\t\t<div class=\"tab-content-wrapper clearfix\">\n\t\t\t\t\t<div class=\"active\">\n\t\t\t\t\t\t<div class=\"inn-container\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<h3 class=\"dis-dash-title\">Edit Product</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 text-right p-o\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 p-o\">\n\t\t\t\t\t\t\t\t<form class=\"dispensary-table row\">\n\t\t\t\t\t\t\t\t\t<div class=\"dispensary-table-inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" id=\"name\" [(ngModel)]=\"obj.name\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pre-roll</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"pre_roll\" id=\"pre_roll\" [(ngModel)]=\"obj.pre_roll\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Grams</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"grams\" id=\"grams\" [(ngModel)]=\"obj.grams\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Eighth</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"Eighth\" id=\"Eighth\" [(ngModel)]=\"obj.Eighth\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Quarter</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"quarter\" id=\"quarter\" [(ngModel)]=\"obj.quarter\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Half</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"half\" id=\"half\" [(ngModel)]=\"obj.half\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Ounce</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"ounce\" id=\"ounce\" [(ngModel)]=\"obj.ounce\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>THC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"thc\" id=\"thc\" [(ngModel)]=\"obj.thc\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>CBD</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"cbd\" id=\"cbd\" [(ngModel)]=\"obj.cbd\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"cat\" name=\"cat\" [(ngModel)]=\"obj.category_id\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"\">Select Category</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let cat of categories\" value=\"{{cat.id}}\">{{cat.name}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Details</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows=\"7\" cols=\"50\" name=\"details\" id=\"details\" [(ngModel)]=\"obj.details\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Update picture</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input #myInput type=\"file\" name=\"image\" id=\"image\" data-multiple-caption=\"{count} files selected\" multiple imageUpload\n                (imageSelected)=\"uploadImage($event)\"\n                 accept=\"image/jpg, image/jpeg, image/png, image/gif\" class=\"logo-file-input custom-file-input\">\n\t\t\t\t\t\t\t\t\t\t\t<span>Upload</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-show-img\"><img *ngIf=\"!obj.image\" src=\"assets/img/no-image.jpg\" style=\"width: 100px;margin-top: 10px;\" > <img style=\"width: 100px;margin-top: 10px;\" *ngIf=\"obj.image\" src=\"{{_host}}images/product/thumbnail/200/{{obj.image}}\"> </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<div class=\"clone-form row\"></div>\n \n\t\t\t\t\t\t  </div> \n\t\t\t\t\t\t  <div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t    <button class=\"btn btn-success cus-add-btn\" (click)=\"save()\">Update</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Login Form -->"

/***/ }),

/***/ "../../../../../src/app/item-dashboard/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(_router, _route, _sharedService) {
        this._router = _router;
        this._route = _route;
        this._sharedService = _sharedService;
        this._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
        this.obj = {
            "name": "",
            "pre_roll": "",
            "Eighth": "",
            "quarter": "",
            "grams": "",
            "half": "",
            "ounce": "",
            "category_id": '',
            "details": "",
            "thc": "",
            "image": "",
            "isDeleted": false,
            "cbd": "",
            "status": "active",
            "brand_name": "",
            "product_id": ""
        };
        this.categories = [];
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.fetch();
        this.roles = this._sharedService.getRoles();
    };
    EditProductComponent.prototype.fetch = function () {
        var _this = this;
        var options = {
            id: this._route.snapshot.params['id']
        };
        this._sharedService.loader('show');
        this._sharedService.queryParams('getItemProduct', options).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.obj = res.data.key[0];
                _this.getAllCategories();
            }
        }, function (error) { });
    };
    EditProductComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._sharedService.get('categoryList').then(function (res) {
            if (res.success) {
                _this.categories = res.data.category;
            }
            else {
            }
        }, function (err) { });
    };
    EditProductComponent.prototype.save = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.obj));
        this._sharedService.loader('show');
        this._sharedService.updateProducts(data.id, data).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this._router.navigate(['item-dashboard/my-menu']);
            }
            else {
            }
        }, function (err) { });
    };
    EditProductComponent.prototype.uploadImage = function (imageResult) {
        var _this = this;
        var object = {
            data: imageResult.dataURL,
            type: 'product'
        };
        this.myInputVariable.nativeElement.value = "";
        this._sharedService.loader('show');
        this._sharedService.post(object, 'upload').then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.obj.image = res.data.fullPath;
            }
            else {
            }
        }, function (err) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], EditProductComponent.prototype, "myInputVariable", void 0);
    EditProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__("../../../../../src/app/item-dashboard/edit-product/edit-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-dashboard/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/item-dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addupdate_item_addupdate_item_component__ = __webpack_require__("../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_menu_my_menu_component__ = __webpack_require__("../../../../../src/app/item-dashboard/my-menu/my-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/item-dashboard/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_info_account_info_component__ = __webpack_require__("../../../../../src/app/item-dashboard/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_listing_products_listing_component__ = __webpack_require__("../../../../../src/app/item-dashboard/products-listing/products-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/item-dashboard/edit-product/edit-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__addupdate_item_addupdate_item_component__["a" /* AddupdateItemComponent */]
    }, {
        path: 'my-menu',
        component: __WEBPACK_IMPORTED_MODULE_6__products_listing_products_listing_component__["a" /* ProductsListingComponent */]
    }, {
        path: 'addupdate-products',
        component: __WEBPACK_IMPORTED_MODULE_3__my_menu_my_menu_component__["a" /* MyMenuComponent */]
    }, {
        path: 'reviews',
        component: __WEBPACK_IMPORTED_MODULE_4__reviews_reviews_component__["a" /* ReviewsComponent */]
    }, {
        path: 'account-info',
        component: __WEBPACK_IMPORTED_MODULE_5__account_info_account_info_component__["a" /* AccountInfoComponent */]
    }, {
        path: 'edit-product/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__edit_product_edit_product_component__["a" /* EditProductComponent */]
    }];
var ItemDashboardRoutingModule = /** @class */ (function () {
    function ItemDashboardRoutingModule() {
    }
    ItemDashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ItemDashboardRoutingModule);
    return ItemDashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/item-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDashboardModule", function() { return ItemDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_imageupload__ = __webpack_require__("../../../../ng2-imageupload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_dashboard_routing_module__ = __webpack_require__("../../../../../src/app/item-dashboard/item-dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addupdate_item_addupdate_item_component__ = __webpack_require__("../../../../../src/app/item-dashboard/addupdate-item/addupdate-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/item-dashboard/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_info_account_info_component__ = __webpack_require__("../../../../../src/app/item-dashboard/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_menu_my_menu_component__ = __webpack_require__("../../../../../src/app/item-dashboard/my-menu/my-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_listing_products_listing_component__ = __webpack_require__("../../../../../src/app/item-dashboard/products-listing/products-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/item-dashboard/edit-product/edit-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ItemDashboardModule = /** @class */ (function () {
    function ItemDashboardModule() {
    }
    ItemDashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_6__item_dashboard_routing_module__["a" /* ItemDashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_imageupload__["ImageUploadModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__addupdate_item_addupdate_item_component__["a" /* AddupdateItemComponent */], __WEBPACK_IMPORTED_MODULE_8__reviews_reviews_component__["a" /* ReviewsComponent */], __WEBPACK_IMPORTED_MODULE_9__account_info_account_info_component__["a" /* AccountInfoComponent */], __WEBPACK_IMPORTED_MODULE_10__my_menu_my_menu_component__["a" /* MyMenuComponent */], __WEBPACK_IMPORTED_MODULE_11__products_listing_products_listing_component__["a" /* ProductsListingComponent */], __WEBPACK_IMPORTED_MODULE_12__edit_product_edit_product_component__["a" /* EditProductComponent */]]
        })
    ], ItemDashboardModule);
    return ItemDashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/my-menu/my-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-dashboard/my-menu/my-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Login Form -->\n<section class=\"dispen-dashboard\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"dispen-dashboard-nav\">\n\t\t\t\t\t<ul  class=\"nav nav-pills\">\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard\">{{roles == 'DR' ? 'Doctor':''}} {{roles == 'D' ? 'Store':''}} {{roles == 'B' ? 'Brand':''}} Details</a></li>\n\t\t\t\t\t\t<li  class=\"active\"><a href=\"#/item-dashboard/my-menu\">My Menu</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/reviews\">Review</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/account-info\">Account Info</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tab content -->\n\t\t\t\t<div class=\"tab-content-wrapper clearfix\">\n\t\t\t\t\t<div class=\"active\">\n\t\t\t\t\t\t<div class=\"inn-container\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<h3 class=\"dis-dash-title\">My Menu</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 text-right p-o\">\n\t\t\t\t\t\t\t\t<form class=\"form-inline\" >\n\t\t\t\t\t\t\t      <!-- <div class=\"form-group top-fil\">\n\t\t\t\t\t\t\t        <label for=\"price\">Price</label>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t      <div class=\"form-group top-fil\">\n\t\t\t\t\t\t\t        <label for=\"filter\">Filter</label>\n\t\t\t\t\t\t\t        <select class=\"form-control\" id=\"sel1\">\n\t\t\t\t\t\t\t          <option>Dispensary Name</option>\n\t\t\t\t\t\t\t          <option>1</option>\n\t\t\t\t\t\t\t          <option>2</option>\n\t\t\t\t\t\t\t          <option>3</option>\n\t\t\t\t\t\t\t          <option>4</option>\n\t\t\t\t\t\t\t        </select>\n\t\t\t\t\t\t\t      </div> -->\n\t\t\t\t\t\t\t      <div class=\"add-up-fil\" (click)=\"addObject()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i><span>Add</span></div>\n\t\t\t\t\t\t\t    </form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 p-o\">\n\t\t\t\t\t\t\t\t<form class=\"dispensary-table row\">\n\t\t\t\t\t\t\t\t\t<div class=\"dispensary-table-inner\" *ngFor=\"let obj of products;let i=index\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name{{i}}\" id=\"name{{i}}\" [(ngModel)]=\"obj.name\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pre-roll</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"pre_roll{{i}}\" id=\"pre_roll{{i}}\" [(ngModel)]=\"obj.pre_roll\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Grams</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"grams{{i}}\" id=\"grams{{i}}\" [(ngModel)]=\"obj.grams\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Eighth</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"Eighth{{i}}\" id=\"Eighth{{i}}\" [(ngModel)]=\"obj.Eighth\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Quarter</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"quarter{{i}}\" id=\"quarter{{i}}\" [(ngModel)]=\"obj.quarter\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Half</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"half{{i}}\" id=\"half{{i}}\" [(ngModel)]=\"obj.half\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Ounce</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"ounce{{i}}\" id=\"ounce{{i}}\" [(ngModel)]=\"obj.ounce\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>THC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"thc{{i}}\" id=\"thc{{i}}\" [(ngModel)]=\"obj.thc\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>CBD</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"cbd{{i}}\" id=\"cbd{{i}}\" [(ngModel)]=\"obj.cbd\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"cat{{i}}\" name=\"cat{{i}}\" [(ngModel)]=\"obj.category_id\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Category</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let cat of categories\" value=\"{{cat.id}}\">{{cat.name}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Details</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows=\"7\" cols=\"50\" name=\"details{{i}}\" id=\"details{{i}}\" [(ngModel)]=\"obj.details\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Update picture</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input #myInput type=\"file\" name=\"image{{i}}\" id=\"image{{i}}\" data-multiple-caption=\"{count} files selected\" multiple imageUpload\n                (imageSelected)=\"uploadImage($event,i)\"\n                 accept=\"image/jpg, image/jpeg, image/png, image/gif\" class=\"logo-file-input custom-file-input\">\n\t\t\t\t\t\t\t\t\t\t\t<span>Upload</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-show-img\"><img *ngIf=\"!obj.image\" src=\"assets/img/user-profile.jpg\"> <img style=\"width: 150px\" *ngIf=\"obj.image\" src=\"{{_host}}images/product/thumbnail/200/{{obj.image}}\"> </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<div class=\"clone-form row\"></div>\n \n\t\t\t\t\t\t  </div> \n\t\t\t\t\t\t  <div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t    <button class=\"btn btn-success cus-add-btn\" (click)=\"save()\">Save Menu</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Login Form -->"

/***/ }),

/***/ "../../../../../src/app/item-dashboard/my-menu/my-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyMenuComponent = /** @class */ (function () {
    function MyMenuComponent(_router, _sharedService) {
        this._router = _router;
        this._sharedService = _sharedService;
        this._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
        this.products = [];
        this.categories = [];
    }
    MyMenuComponent.prototype.ngOnInit = function () {
        // this.fetch();
        this.addObject();
        this.getAllCategories();
        this.roles = this._sharedService.getRoles();
    };
    MyMenuComponent.prototype.fetch = function () {
        // this._sharedService.loader('show');
        // this._sharedService.get('AllProductByUser').then((res: any) => {
        //   this._sharedService.loader('hide');
        //     if(res.success) {
        //         this.products = res.data.key ? res.data.key : []; 
        // this.getAllCategories()
        //     } else {
        //     }
        // },(error) => { this._sharedService.loader('hide'); });
        // this._sharedService.get('getDispensary').then((res: any) => {
        //     if(res.success) {
        //         let object = res.data.key; 
        //         this.dispenaryID = object.id;
        //     } else {
        //     }
        // },(error) => { });
    };
    MyMenuComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._sharedService.get('categoryList').then(function (res) {
            if (res.success) {
                _this.categories = res.data.category;
                // if(this.products.length==0) this.addObject();
                if (_this.categories.length > 0)
                    _this.products[0].category_id = _this.categories[0]['id'];
            }
            else {
            }
        }, function (err) { });
    };
    MyMenuComponent.prototype.save = function () {
        var _this = this;
        var arrayObj = JSON.parse(JSON.stringify(this.products));
        arrayObj.forEach(function (obj) {
            obj.dispensary_id = _this.dispenaryID;
        });
        var data = { data: arrayObj };
        this._sharedService.loader('show');
        this._sharedService.post(data, 'add_item_product').then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this._router.navigate(['item-dashboard/my-menu']);
            }
            else {
            }
        }, function (err) { });
    };
    MyMenuComponent.prototype.addObject = function () {
        var obj = {
            "name": "",
            "pre_roll": "",
            "Eighth": "",
            "quarter": "",
            "grams": "",
            "half": "",
            "ounce": "",
            "category_id": this.categories.length > 0 ? this.categories[0]['id'] : '',
            "details": "",
            "thc": "",
            "image": "",
            "isDeleted": false,
            "cbd": "",
            "status": "active",
            "brand_name": "",
            "product_id": ""
        };
        this.products.push(obj);
    };
    MyMenuComponent.prototype.uploadImage = function (imageResult, index) {
        var _this = this;
        var object = {
            data: imageResult.dataURL,
            type: 'product'
        };
        this.myInputVariable.nativeElement.value = "";
        this._sharedService.loader('show');
        this._sharedService.post(object, 'upload').then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.products[index].image = res.data.fullPath;
            }
            else {
            }
        }, function (err) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], MyMenuComponent.prototype, "myInputVariable", void 0);
    MyMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-menu',
            template: __webpack_require__("../../../../../src/app/item-dashboard/my-menu/my-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-dashboard/my-menu/my-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], MyMenuComponent);
    return MyMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/products-listing/products-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-dashboard/products-listing/products-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Login Form -->\n<section class=\"dispen-dashboard\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"dispen-dashboard-nav\">\n\t\t\t\t\t<ul  class=\"nav nav-pills\">\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard\">{{roles == 'DR' ? 'Doctor':''}} {{roles == 'D' ? 'Store':''}} {{roles == 'B' ? 'Brand':''}} Details</a></li>\n\t\t\t\t\t\t<li  class=\"active\"><a >My Menu</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/reviews\">Review</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/account-info\">Account Info</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tab content -->\n\t\t\t\t<div class=\"tab-content-wrapper clearfix\">\n\t\t\t\t\t<div class=\"active\">\n\t\t\t\t\t\t<div class=\"inn-container\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t<h3 class=\"dis-dash-title pull-left\">My Menu</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t<div class=\"form-group top-fil\">\n\t\t\t\t\t\t\t        <label for=\"filter\">Filter</label>\n\t\t\t\t\t\t\t        <select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]='category_id' (change)=\"fetch()\">\n\t\t\t\t\t\t\t          <option value=\"\">Category Name</option>\n\t\t\t\t\t\t\t          <option *ngFor=\"let obj of categories\" value=\"{{obj.id}}\">{{obj.name}}</option>\n\t\t\t\t\t\t\t          <!-- <option>2</option>\n\t\t\t\t\t\t\t          <option>3</option>\n\t\t\t\t\t\t\t          <option>4</option> -->\n\t\t\t\t\t\t\t        </select>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 p-0\">\n\t\t\t\t\t\t\t\t<a href=\"#/item-dashboard/addupdate-products\"><div class=\"add-up-fil add-pro-fil pull-right\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i><span>Add Product</span></div></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 p-o\">\n\t\t\t\t\t\t\t\t<form class=\"dispensary-table row\">\n\t\t\t\t\t\t\t\t\t<div class=\"dispensary-table-inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pre-role</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Grams</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Eighth</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Quarter</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Half</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Ounce</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>THC%</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>CBD%</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Category</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of products\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.pre_roll}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.grams ? obj.grams : '-'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.Eighth}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.quarter}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.half}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.ounce}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.thc}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{obj.cbd}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{getCategory(obj.category_id)}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" [routerLink]=\"['/item-dashboard/edit-product/'+obj.id]\">Edit</button> <button class=\"btn btn-danger\" (click)=\"remove(obj.id)\">Delete</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<div class=\"clone-form row\"></div>\n \n\t\t\t\t\t\t  </div> \n\t\t\t\t\t\t  <!-- <div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t    <button class=\"btn btn-success cus-add-btn\">Save Menu</button>\n\t\t\t\t\t\t  </div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Login Form -->"

/***/ }),

/***/ "../../../../../src/app/item-dashboard/products-listing/products-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsListingComponent = /** @class */ (function () {
    function ProductsListingComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.products = [];
        this.page = 1;
        this.count = 100;
        this.category_id = '';
        this.categories = [];
    }
    ProductsListingComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
        this.fetch();
        this.roles = this._sharedService.getRoles();
    };
    ProductsListingComponent.prototype.fetch = function () {
        var _this = this;
        this._sharedService.loader('show');
        this._sharedService.AllProductItemByCategory(this.category_id, this.page, this.count).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.products = res.data.data ? res.data.data : [];
            }
            else {
            }
        }, function (error) { });
    };
    ProductsListingComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._sharedService.get('categoryList').then(function (res) {
            if (res.success) {
                _this.categories = res.data.category;
            }
            else {
            }
        }, function (err) { });
    };
    ProductsListingComponent.prototype.getCategory = function (id) {
        var name = '-';
        this.categories.forEach(function (obj) {
            if (obj.id == id)
                name = obj.name;
        });
        return name;
    };
    ProductsListingComponent.prototype.remove = function (id, index) {
        var _this = this;
        if (confirm("Do you want to delete ?")) {
            this._sharedService.loader('show');
            this._sharedService.remove(id).then(function (res) {
                _this._sharedService.loader('hide');
                if (res.success) {
                    _this.fetch();
                }
                else {
                }
            }, function (err) { });
        }
    };
    ProductsListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-listing',
            template: __webpack_require__("../../../../../src/app/item-dashboard/products-listing/products-listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-dashboard/products-listing/products-listing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__["a" /* SharedService */]])
    ], ProductsListingComponent);
    return ProductsListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item-dashboard/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-dashboard/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spc-top\"></div>\n<!-- This is a Login Form -->\n<section class=\"dispen-dashboard\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"dispen-dashboard-nav\">\n\t\t\t\t\t<ul  class=\"nav nav-pills\">\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard\">{{roles == 'DR' ? 'Doctor':''}} {{roles == 'D' ? 'Store':''}} {{roles == 'B' ? 'Brand':''}} Details</a></li>\n\t\t\t\t\t\t<li><a  href=\"#/item-dashboard/my-menu\" *ngIf=\"roles == 'D' || roles == 'B'\">My Menu</a></li>\n\t\t\t\t\t\t<li class=\"active\"><a>Review</a></li>\n\t\t\t\t\t\t<li><a href=\"#/item-dashboard/account-info\">Account Info</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tab content -->\n\t\t\t\t<div class=\"tab-content-wrapper clearfix\">\n\t\t\t\t\t<div class=\"active\">\n\t\t\t\t\t\t<div class=\"inn-container\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 p-o\">\n\t\t\t\t\t\t\t\t<h3 class=\"dis-dash-title\">Review</h3>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class=\"col-sm-6 text-right date-filter p-o\">\n\t\t\t\t\t          <div class=\"form-inline\">\n\t\t\t\t\t            <label for=\"email\">Date Filter</label>\n\t\t\t\t\t            <select class=\"form-control\" id=\"sel1\">\n\t\t\t\t\t              <option>Previous Months</option>\n\t\t\t\t\t              <option>Today</option>\n\t\t\t\t\t              <option>Last Week</option>\n\t\t\t\t\t              <option>Last Month</option>\n\t\t\t\t\t              <option>Previous Months</option>\n\t\t\t\t\t            </select>\n\t\t\t\t\t          </div>\n\t\t\t\t\t        </div>    \n\t\t\t\t\t        <div class=\"clearfix\"></div>\n\t\t\t\t\t        <div class=\"col-sm-4 p-0\" *ngIf=\"arrayObj.length > 0\" >\n\t\t\t\t\t          <div class=\"inner-review-lft\">\n\t\t\t\t\t            <span class=\"riv-rat\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t            <span class=\"riv-num-rat\"><strong>{{average}}</strong> out of 5 stars <P>{{count}} Reviews</P></span>\n\t\t\t\t\t          </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class=\"col-sm-8 p-r\">\n\t\t\t\t\t          <div class=\"inner-review-rit\" *ngFor=\"let obj of arrayObj;let i=index\">\n\t\t\t\t\t            <div class=\"col-sm-2\">\n\t\t\t\t\t            \t<div class=\"revi-img\"><img src=\"assets/img/review-logo.png\" class=\"img-responsive\"></div>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"col-sm-7\">\n\t\t\t\t\t              <h4 class=\"rit-main-title\">{{obj.addedBy ? obj.addedBy['username1'] ? obj.addedBy['username1'] : obj.addedBy['username'] :\"Unknown name\"}}</h4>\n\t\t\t\t\t              <span class=\"riv-rat\">\n\t\t\t\t\t                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t              </span>\n\t\t\t\t\t              <span class=\"riv-rat-no\">{{obj.rating}}</span>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"col-sm-3 text-right\">\n\t\t\t\t\t              <p class=\"month-view\">{{obj.createdAt | date:'dd/mm/yyyy'}}</p>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"clearfix\"></div>\n\t\t\t\t\t            <div class=\"col-sm-10 col-sm-offset-2\">\n\t\t\t\t\t              <div class=\"revi-comment\">\n\t\t\t\t\t                  <h4>{{obj.name ? obj.name :\"Cody Marquez\"}}</h4>\n\t\t\t\t\t                  <p>{{obj.detail}}</p>\n\t\t\t\t\t                  <p *ngIf=\"obj.replies\">Reply: <strong>{{obj.replies}}</strong></p>\n\t\t\t\t\t                  <button class=\"btn btn-default pull-right\" *ngIf=\"!obj.replies && i !== selectedIndex\" (click)=\"selectedIndex=i\" >Reply</button>\n\t\t\t\t\t              </div>\n\t\t\t\t\t              <div class=\"revi-comment\" *ngIf=\"i == selectedIndex\">\n\t\t\t\t\t                  <textarea cols=\"36\" id=\"reply\" name=\"reply\" [(ngModel)]=\"reply\"></textarea>\n\t\t\t\t\t                  <button class=\"btn btn-default pull-right\" (click)=\"send(i,obj.id)\" >send</button>\n\t\t\t\t\t              </div>\n\t\t\t\t\t            </div>\n\t\t\t\t\t          </div>\n\t\t\t\t\t          <div *ngIf=\"arrayObj.length == 0\" class=\"text-center align-center\">{{message}}</div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/item-dashboard/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.arrayObj = [];
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.fetch();
        this.roles = this._sharedService.getRoles();
    };
    ReviewsComponent.prototype.fetch = function () {
        var _this = this;
        this._sharedService.get('reviews').then(function (res) {
            if (res.success) {
                _this.arrayObj = res.data.reviews ? res.data.reviews : [];
                _this.count = res.data.count;
                _this.average = res.data.avg ? res.data.avg : 0;
            }
            else {
                _this.message = res.error.message;
            }
        }, function (error) { });
    };
    ReviewsComponent.prototype.send = function (index, id) {
        var _this = this;
        var data = {
            review_id: id,
            detail: this.reply,
        };
        this._sharedService.loader('show');
        this._sharedService.post(data, 'replies').then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.arrayObj[index]['replies'] = " " + _this.reply;
                _this.reply = '';
                _this.selectedIndex = null;
            }
            else {
            }
        }, function (error) { });
    };
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__("../../../../../src/app/item-dashboard/reviews/reviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-dashboard/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__["a" /* SharedService */]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ })

});
//# sourceMappingURL=item-dashboard.module.chunk.js.map