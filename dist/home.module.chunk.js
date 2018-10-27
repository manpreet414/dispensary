webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spc-top\"></div>\n<!-- This is a Banner -->\n<div class=\"banner\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n                <h1>helping you find your leaf</h1>\n                <div class=\"location-search search-container\">\n                    <form action=\"/action_page.php\">\n                      <div class=\"search-form-group\">\n                        <span class=\"ban-ser-icon\"><img src=\"assets/img/search-icon.png\" class=\"img-responsive\"></span>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search..\" name=\"search\">\n                        <span class=\"close-icon\">\n                            <button type=\"button\" class=\"close\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </span>\n                      </div>\n                          <button type=\"submit\" class=\"btn btn-success cus-btn\">find dispensary</button>\n                        </form>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Banner -->\n    \n<!-- This is a Dispensaries -->\n<section class=\"featured-disp\" *ngIf=\"dispensary.length  > 0\">\n    <div class=\"container-flude\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12 text-center\">\n                <h2><img src=\"assets/img/title-icon.png\"> featured dispensaries</h2>\n                <div class=\"mor-btn-grp\" *ngIf=\"dispensaryTotal > 5\">\n                   <button [routerLink]=\"['/page/view-items/dispensary']\" class=\"btn btn-default\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n                </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-2\" *ngFor=\"let obj of dispensary\">\n                <a href=\"#/page/item-detail/{{obj.id}}\">\n                    <div class=\"wrap\">\n                        <div class=\"top-sec\">\n                            <img *ngIf=\"obj.image\" src=\"{{_host}}images/dispensary/thumbnail/200/{{obj.image}}\">\n                            <img *ngIf=\"!obj.image\" src=\"assets/img/no-image-text.png\">\n                            <span class=\"loc-track\"><img src=\"assets/img/loc-map-icon.png\" class=\"img-responsive\"></span>\n                        </div>\n                        <div class=\"midd-sec\">\n                            <p>{{obj.address}}, {{obj.city}}</p>\n                            <h6>{{obj.name}}</h6>\n                            <p>Medical</p>\n                        </div>\n                        <div class=\"bottom-sec row\">\n                            <div class=\"col-sm-8\">\n                                <span class=\"rating\">\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                </span>\n                            </div>    \n                            <div class=\"col-sm-4 text-right\">\n                                <span>1mi</span>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Dispensaries -->\n\n\n<div class=\"clearfix\"></div>\n<!-- This is a Brands -->\n<section class=\"featured-brands\" *ngIf=\"brand.length  > 0\">\n    <div class=\"container-flude\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12 text-center\">\n                <h2><img src=\"assets/img/title-icon.png\"> featured Brands</h2>\n                <div class=\"mor-btn-grp\" *ngIf=\"brandTotal > 5\">\n                    <button [routerLink]=\"['/page/view-items/brand']\" class=\"btn btn-default\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n                </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-2\" *ngFor=\"let obj of brand\">\n                <a href=\"#/page/item-detail/{{obj.id}}\">\n                    <div class=\"wrap\">\n                        <div class=\"top-sec\">\n                            <img *ngIf=\"!obj.image\" src=\"assets/img/no-image.jpg\" class=\"img-responsive\">\n                            <img *ngIf=\"obj.image\" src=\"{{_host}}images/dispensary/thumbnail/200/{{obj.image}}\" class=\"img-responsive\">\n                        </div>\n                        <div class=\"midd-sec\">\n                            <h6>{{obj.name}}</h6>\n                        </div>\n                        <div class=\"bottom-sec row\">\n                            <div class=\"col-sm-12\">\n                                <span class=\"rating\">\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                </span>\n                            </div> \n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Brands -->\n\n<div class=\"clearfix\"></div>\n<!-- This is a Medical -->\n<section class=\"featured-medical\" *ngIf=\"doctor.length > 0\">\n    <div class=\"container-flude\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12 text-center\">\n                <h2><img src=\"assets/img/title-icon.png\"> Medical</h2>\n                <div class=\"mor-btn-grp\" *ngIf=\"doctorTotal > 5\">\n                    <button [routerLink]=\"['/page/view-items/doctor']\" class=\"btn btn-default\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n                </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-2\" *ngFor=\"let obj of doctor\">\n                <a href=\"#/page/item-detail/{{obj.id}}\">\n                    <div class=\"wrap\">\n                        <div class=\"top-sec\">\n                            <img *ngIf=\"!obj.image\" src=\"assets/img/no-image.jpg\" class=\"img-responsive\">\n                            <img *ngIf=\"obj.image\" src=\"{{_host}}images/dispensary/thumbnail/200/{{obj.image}}\" class=\"img-responsive\">\n                        </div>\n                        <div class=\"midd-sec\">\n                            <h6>{{obj.name}}</h6>\n                        </div>\n                        <div class=\"bottom-sec row\">\n                            <div class=\"col-sm-12\">\n                                <span class=\"rating\">\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                </span>\n                            </div> \n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Medical -->\n\n\n<div class=\"clearfix\"></div>\n<!-- This is a Mob-App -->\n<section class=\"mob-app\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"app-img\"><img src=\"assets/img/mob-app.png\" class=\"img-responsive\"></div>\n            </div>\n            <div class=\"col-sm-6\">\n                <h2>Download our <br>app Today</h2>\n                <div class=\"app-btn\">\n                    <a href=\"\"><img src=\"assets/img/app-store.png\" class=\"img-responsive\"></a>\n                    <a href=\"\"><img src=\"assets/img/google-play.png\" class=\"img-responsive\"></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Mob-App -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, _sharedService) {
        this._router = _router;
        this._sharedService = _sharedService;
        this._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
        this.dispensary = [];
        this.brand = [];
        this.doctor = [];
        this.dispensaryTotal = 0;
        this.brandTotal = 0;
        this.doctorTotal = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetch('dispensary');
        this.fetch('brand');
        this.fetch('doctor');
    };
    HomeComponent.prototype.fetch = function (type) {
        var _this = this;
        var options = {
            businessType: type,
            page: 1,
            count: 5
        };
        this._sharedService.queryParams('FeaturedData', options).then(function (res) {
            if (res.success) {
                _this[type] = res.data.items;
                _this[type + 'Total'] = res.data.total;
            }
        }, function (error) { });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { SharedModule } from '../shared/shared.module';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]
                // SharedModule
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map