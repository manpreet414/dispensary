webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/item-detail/item-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"spc-top\"></div>\n<!-- This is a Dispensaries -->\n<section class=\"featured-disp-section\">\n\t<div class=\"container-flude\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"col-sm-12 inner-pro-dtl\">\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"pro-logo\">\n\t\t\t\t\t\t\t<img *ngIf=\"!object.image\" src=\"assets/img/no-image-text.png\" class=\"img-responsive\">\n\t\t\t\t\t\t\t<img *ngIf=\"object.image\" src=\"{{_host}}images/dispensary/thumbnail/200/{{object.image}}\" class=\"img-responsive\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<div class=\"pro-right-sec\">\n\t\t\t\t\t\t\t<h3>{{object.name}} <span (click)=\"addRemoveFavorate()\">Favorite <i [ngClass]=\"{'fa-heart':isFvorate,'fa-heart-o':!isFvorate}\" class=\"fa\" aria-hidden=\"true\"></i></span></h3>\n\t\t\t\t\t\t\t<div class=\"col-sm-7 p-0\">\n\t\t\t\t\t\t\t\t<span class=\"rating rating-pro\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': object.totalRating < 1, 'fa-star': object.totalRating >= 1}\" title=\"Poor\"></i>\n\n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': object.totalRating < 2, 'fa-star': object.totalRating >= 2}\"  title=\"Not bad\"></i>\n                                    \n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': object.totalRating < 3, 'fa-star': object.totalRating >= 3}\"  title=\"Average\"></i>\n                                    \n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': object.totalRating < 4, 'fa-star': object.totalRating >= 4}\"  title=\"Good\"></i>\n                                    \n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': object.totalRating < 5, 'fa-star': object.totalRating >= 5}\"  title=\"Excellent\"></i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"rating-pro-no\">{{ratingR(object.totalRating)}} ({{object.totalReviews}})</span>\n\t\t\t\t\t\t\t\t<!-- <span class=\"post-revi\">Post Review</span> -->\n\t\t\t\t\t\t\t\t<button class=\"btn btn-medical\">MEDICAL</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-5 p-0 text-right\" *ngIf=\"object.businessType !=='brand' && object.scheduler[0]\">\n\t\t\t\t\t\t\t\t<p class=\"open-tim-1\">OPEN NOW</p>\n\t\t\t\t\t\t\t\t<P class=\"open-tim-2\">{{object.scheduler[0]['startTime']}}-{{object.scheduler[0]['closeTime']}} <br><!-- <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> --></P>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<ul class=\"pro-address col-sm-8\">\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{object.address}}, {{object.city}},{{object.postal_code}}</li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> {{object.email}}</li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> {{object.mobile}}</li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-globe\" aria-hidden=\"true\"></i> {{object.website}}</li>\n\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> 707-797-7680</li> -->\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t<p>{{object.about_us}} <br><!-- <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4 text-center\">\n\t\t\t\t\t<div class=\"pro-top-sec\">\n\t\t\t\t\t\t<img src=\"assets/img/map-bg.png\" class=\"img-responsive\">\n\t\t\t\t\t\t<span class=\"loc-track\"><img src=\"assets/img/loc-map-icon.png\" class=\"img-responsive\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-default pro-btn\"><img src=\"assets/img/address2.png\" class=\"img-responsive\"> Get Direction</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 p-o\">\n\t\t\t\t<div class=\"pro-menu\">\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t  <li [ngClass]=\"{'active':object.businessType != 'doctor'}\" *ngIf=\"object.businessType != 'doctor'\"><a data-toggle=\"tab\" href=\"#home\">MENU</a></li>\n\t\t\t\t\t  <li [ngClass]=\"{'active':object.businessType == 'doctor'}\"><a data-toggle=\"tab\" href=\"#menu1\">ABOUT US</a></li>\n\t\t\t\t\t  <li><a data-toggle=\"tab\" href=\"#menu2\">REVIEW</a></li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<div class=\"tab-content pro-menu-tab\">\n\t\t\t\t\t  <div id=\"home\" class=\"tab-pane fade\" [ngClass]=\"{'in active':object.businessType != 'doctor'}\">\n\t\t\t\t\t  \t<div class=\"col-sm-8\">\n\t\t\t\t\t  \t\t<div class=\"col-sm-12 text-right p-o\">\n\t\t\t\t\t  \t\t\t\t<div class=\"col-sm-5\"> \n\t\t\t\t\t  \t\t\t<form class=\"product-search\">\n\t\t\t\t\t  \t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" name=\"search\" id=\"search\" [(ngModel)]=\"name\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"fetchProduct()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form class=\"product-search\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]=\"sortBy\" (change)=\"fetchProduct()\">\n\t\t\t\t\t\t\t\t          <option value=\"\">Sort By..</option>\n\t\t\t\t\t\t\t\t          <option value=\"name asc\">Name</option>\n\t\t\t\t\t\t\t\t          <option value=\"createdAt asc\">Created Date</option>\n\t\t\t\t\t\t\t\t        </select>\n\t\t\t\t\t\t\t\t\t</div></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"category_id\" name=\"category_id\" [(ngModel)]=\"category_id\" (change)=\"fetchProduct()\">\n\t\t\t\t\t\t\t\t          <option value=\"\">Please Select Category</option>\n\t\t\t\t\t\t\t\t          <option *ngFor=\"let obj of categories\" value=\"{{obj.id}}\">{{obj.name}}</option>\n\t\t\t\t\t\t\t\t        </select>\n\t\t\t\t\t\t\t\t\t</div></div>\n\t\t\t\t\t  \t\t\t</form>\n\t\t\t\t\t  \t\t</div>\n\t\t\t\t\t  \t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t  \t\t<div class=\"col-sm-6 p-o\">\n\t\t\t\t\t  \t\t\t<h4 class=\"pro-tab-tit\">{{object.name}}</h4>\n\t\t\t\t\t  \t\t</div>\n\t\t\t\t\t  \t\t<!-- <div class=\"col-sm-6 text-right\">\n\t\t\t\t\t  \t\t\t<p class=\"update-time\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Update 14 Hours Ago</p>\n\t\t\t\t\t  \t\t</div> -->\n\t\t\t\t\t  \t\t<div class=\"col-sm-12 p-o\">\n\t\t\t\t\t  \t\t\t<ul class=\"list-of-clinic\">\n\t\t\t\t\t  \t\t\t\t<li *ngFor=\"let obj of products\">\n\t\t\t\t\t  \t\t\t\t\t<a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">\n\t\t\t\t\t  \t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t  \t\t\t\t\t\t\t<div class=\"pro-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!obj.image\" src=\"assets/img/no-image-text.png\" class=\"img-responsive\" width=\"90\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"obj.image\" src=\"{{_host}}images/product/thumbnail/200/{{obj.image}}\" class=\"img-responsive\" width=\"90\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{obj.details}}</p><h6>{{obj.name}}</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t</div>\n\t\t\t\t\t  \t\t\t\t\t\t</div>\n\t\t\t\t\t  \t\t\t\t\t\t<div class=\"col-sm-9 text-right\">\n\t\t\t\t\t  \t\t\t\t\t\t\t<ul class=\"pln-list\">\n\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>Pre-roll</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.pre_roll ? obj.pre_roll : '-'}}</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>Gram</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.grams ? obj.grams : '-'}}</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>Quater</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.quater ? obj.quater : '-'}}</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>Half</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.half ? obj.half : '-'}}</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>Ounce</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.ounce  ? obj.ounce : '-' }}</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>THC</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.thc  ? obj.thc : '-' }}%</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>CBD</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>{{obj.cbd  ? obj.cbd : '-' }}%</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>1/8</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>$35</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>1/4</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>$70</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>1/2</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>$130</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<p>OZ</p>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t\t<h6>$230</h6>\n\t\t\t\t\t  \t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t  \t\t\t\t\t\t\t</ul>\n\t\t\t\t\t  \t\t\t\t\t\t</div>\n\t\t\t\t\t  \t\t\t\t\t</a>\n\t\t\t\t\t  \t\t\t\t</li>\n\t\t\t\t\t  \t\t\t\t<li *ngIf=\"products.length == 0\">\n\t\t\t\t\t  \t\t\t\t\tNo Products to View.\n\t\t\t\t\t  \t\t\t\t</li>\n\t\t\t\t\t  \t\t\t</ul>\n\t\t\t\t\t  \t\t</div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"col-sm-4\">\n\t\t\t\t\t  \t\t<div class=\"browse-cat\">\n\t\t\t\t\t  \t\t\t<h4>Browse Menu</h4>\n\t\t\t\t\t\t  \t\t<div class=\"panel-group\" id=\"accordion\">\n\t\t\t\t\t\t\t\t  <div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t    <div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t      <h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">Price Range <span>Any</span></a>\n\t\t\t\t\t\t\t\t      </h4>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div id=\"collapse3\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t      <div class=\"panel-body\">\n\t\t\t\t\t\t\t\t      \t<!-- Default unchecked -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t\t\t\t\t\t\t  <input type=\"radio\" class=\"custom-control-input\" [(ngModel)]=\"price\" id=\"defaultUnchecked\" name='price' (click)=\"fetchProduct()\" value=\"0-30\">\n\t\t\t\t\t\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"defaultUnchecked\">Under $30</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Default checked -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t\t\t\t\t\t\t  <input type=\"radio\" class=\"custom-control-input\" [(ngModel)]=\"price\" id=\"defaultChecked\" name='price' (click)=\"fetchProduct()\" value=\"31-40\">\n\t\t\t\t\t\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"defaultChecked\">$31-$40</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t\t\t\t\t\t\t  <input type=\"radio\" class=\"custom-control-input\" [(ngModel)]=\"price\" id=\"defaultChecked\" name='price' (click)=\"fetchProduct()\" value=\"40-more\" >\n\t\t\t\t\t\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"defaultChecked\">Highest- $41 and above</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t  \t\t</div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div id=\"menu1\" class=\"tab-pane fade in\" [ngClass]=\"{'active':object.businessType == 'doctor'}\">\n\t\t\t\t\t    <h4 class=\"accordion-tit\">{{object.name}}-{{object.city}}</h4>\n\t\t\t\t\t    <div class=\"col-sm-8 p-o\">\n\t\t\t\t\t    \t<div class=\"wht-bg\">\n\t\t\t\t\t    \t\t<h4 class=\"rit-main-title\">About Us</h4>\n\t\t\t\t\t    \t\t<p>{{object.about_us}}</p>\n\t\t\t\t\t    \t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"col-sm-4\" *ngIf=\"object.businessType !=='brand'\">\n\t\t\t\t\t    \t<div class=\"wht-bg\">\n\t\t\t\t\t    \t\t<h4 class=\"rit-main-title\">Hours Of Operation</h4>\n\t\t\t\t\t\t    \t<ul class=\"hours-oper\">\n\t\t\t\t\t\t    \t\t<li *ngFor=\"let obj of object.scheduler\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"day\">{{obj.day}}</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">{{obj.startTime}}-{{obj.closeTime}}</span>\n\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"status\">OPEN NOW</span> -->\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div id=\"menu2\" class=\"tab-pane fade\">\n\t\t\t\t\t    <div class=\"inn-container review-tab\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<h4 class=\"accordion-tit\">Review</h4>\n\t\t\t\t\t        </div>    \n\t\t\t\t\t        <div class=\"clearfix\"></div>\n\t\t\t\t\t        <div class=\"col-sm-3 review-tab-left\">\n\t\t\t\t\t          <div class=\"inner-review-lft wh-bg\">\n\t\t\t\t\t            <div class=\"top-review-tab-left\">\n\t\t\t\t\t            \t<span class=\"riv-rat\"  style=\"margin-right: 12px\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t            \t<span class=\"riv-num-rat\"><strong>{{ratingR(object.totalRating)}}</strong> out of 5 stras <P>{{object.totalReviews}} Reviews</P></span>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"bottom-review-tab-left text-center\">\n\t\t\t\t\t            \t<h2>Write A Review</h2>\n\t\t\t\t\t\t\t\t\t<p>Select a rating</p>\n\t\t\t\t\t\t            <span class=\"riv-rat text-center\">\n\t\t\t\t\t\t\t\t\t\t<i (click)=\"!existRating ? clickStar(1) : '';\" class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': rating < 1, 'fa-star': rating >= 1}\" title=\"Poor\"></i>\n\n\t\t\t\t\t                    <i (click)=\"!existRating ? clickStar(2) : '';\" class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': rating < 2, 'fa-star': rating >= 2}\"  title=\"Not bad\"></i>\n\t\t\t\t\t                    \n\t\t\t\t\t                    <i (click)=\"!existRating ? clickStar(3) : '';\" class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': rating < 3, 'fa-star': rating >= 3}\"  title=\"Average\"></i>\n\t\t\t\t\t                    \n\t\t\t\t\t                    <i (click)=\"!existRating ? clickStar(4) : '';\" class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': rating < 4, 'fa-star': rating >= 4}\"  title=\"Good\"></i>\n\t\t\t\t\t                    \n\t\t\t\t\t                    <i (click)=\"!existRating ? clickStar(5) : '';\" class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': rating < 5, 'fa-star': rating >= 5}\"  title=\"Excellent\"></i>\n\t\t\t\t\t\t            </span>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"rit-main-title\">Your Review</h4>\n\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 p-0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows=\"3\" cols=\"15\" name=\"detail\" id=\"detail\" [(ngModel)]='review.detail' class=\"form-control text-form-control\" placeholder=\"Write a review...\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn cus-btn cus-login\" (click)=\"save()\">Post your review</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t          </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class=\"col-sm-9 review-tab-right\">\n\t\t\t\t\t          <div class=\"inner-review-rit wh-bg\" *ngFor=\"let obj of reviews\">\n\t\t\t\t\t            <div class=\"col-sm-2\">\n\t\t\t\t\t            \t<div class=\"revi-img\"><img src=\"assets/img/review-logo.png\" class=\"img-responsive\"></div>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"col-sm-7\">\n\t\t\t\t\t              <h4 class=\"rit-main-title\">{{obj.addedBy}}</h4>\n\t\t\t\t\t              <span class=\"riv-rat\">\n\t\t\t\t\t                <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.rating < 1, 'fa-star': obj.rating >= 1}\" title=\"Poor\"></i>\n\n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.rating < 2, 'fa-star': obj.rating >= 2}\"  title=\"Not bad\"></i>\n                                    \n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.rating < 3, 'fa-star': obj.rating >= 3}\"  title=\"Average\"></i>\n                                    \n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.rating < 4, 'fa-star': obj.rating >= 4}\"  title=\"Good\"></i>\n                                    \n                                    <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.rating < 5, 'fa-star': obj.rating >= 5}\"  title=\"Excellent\"></i>\n\t\t\t\t\t              </span>\n\t\t\t\t\t              <span class=\"riv-rat-no\">{{obj.rating}}</span>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"col-sm-3 text-right\">\n\t\t\t\t\t              <p class=\"month-view\">{{obj.createdAt | date:'dd/MM/yy'}}</p>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"clearfix\"></div>\n\t\t\t\t\t            <div class=\"col-sm-10 col-sm-offset-2\">\n\t\t\t\t\t              <div class=\"revi-comment\">\n\t\t\t\t\t                  <h4>{{obj.addedBy}}</h4>\n\t\t\t\t\t                  <p>{{obj.detail}}</p>\n\t\t\t\t\t                  <!-- <button class=\"btn btn-default pull-left\"><i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> Helpfull</button> -->\n\t\t\t\t\t              </div>\n\t\t\t\t\t            </div>\n\t\t\t\t\t          </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-right\" *ngIf=\"reviews.length < totalReview\">\n\t\t\t\t\t        \t<button class=\"btn btn-default more-btn-des\" (click)=\"fetchReviews()\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n\t\t\t\t\t        </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- End Dispensaries -->"

/***/ }),

/***/ "../../../../../src/app/pages/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
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




var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(_route, _sharedService) {
        this._route = _route;
        this._sharedService = _sharedService;
        this._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
        this.object = {
            scheduler: [{ startTime: '', closeTime: '' }]
        };
        this.products = [];
        this.categories = [];
        this.category_id = '';
        this.price = '';
        this.reviews = [];
        this.name = '';
        this.sortBy = '';
        this.pageReview = 0;
        this.totalReview = 0;
        this.isFvorate = false;
        this.rating = null;
        this.existRating = false;
        this.review = {
            item_id: '',
            type: 'dispensary',
            rating: null,
            detail: ''
        };
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.fetch();
        if (this._sharedService.isLogin())
            this.favorate();
        this.fetchProduct();
        this.fetchReviews();
        this.getAllCategories();
    };
    ItemDetailComponent.prototype.fetch = function () {
        var _this = this;
        var options = {
            id: this._route.snapshot.params['id']
        };
        this.review['item_id'] = this._route.snapshot.params['id'];
        this._sharedService.queryParams('itemDetail', options).then(function (res) {
            if (res.success) {
                _this.object = res.data.data[0];
                // this.products = res.data.key;
            }
            else {
            }
        }, function (error) { });
    };
    ItemDetailComponent.prototype.addRemoveFavorate = function () {
        var _this = this;
        if (this._sharedService.isLogin()) {
            this._sharedService.loader('show');
            var obj = {
                item_id: this.object['id'],
                type: 'dispensary'
            };
            this._sharedService.post(obj, 'favourite').then(function (res) {
                _this._sharedService.loader('hide');
                if (res.success) {
                    _this.isFvorate = !_this.isFvorate;
                    _this._sharedService.showAlert('Favourite Updated.', 'alert-success');
                }
                else {
                }
            }, function (error) { });
        }
        else {
            this._sharedService.showAlert('Please Login to add in Favourite.', 'alert-danger');
        }
    };
    ItemDetailComponent.prototype.favorate = function () {
        var options = {
            id: this._route.snapshot.params['id'],
            count: 10,
            page: 1
        };
        this._sharedService.queryParams('itemFavorite', options).then(function (res) {
            if (res.success) {
                // this.object = res.data.item[0]; 
                // this.products = res.data.key;
            }
            else {
            }
        }, function (error) { });
    };
    ItemDetailComponent.prototype.fetchProduct = function () {
        var _this = this;
        var options = {
            id: this._route.snapshot.params['id'],
            count: 1000,
            page: 1,
            sortBy: this.sortBy,
            name: this.name,
            category_id: this.category_id,
            price: this.price
        };
        this._sharedService.loader('show');
        this._sharedService.queryParams('ItemReviewsWithProduct', options).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                _this.products = res.data.data;
            }
            else {
            }
        }, function (error) { });
    };
    ItemDetailComponent.prototype.fetchReviews = function () {
        var _this = this;
        this.pageReview += 1;
        var options = {
            id: this._route.snapshot.params['id'],
            count: 2,
            page: this.pageReview
        };
        this._sharedService.loader('show');
        this._sharedService.queryParams('itemreviews', options).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                res.data.products.forEach(function (obj) {
                    _this.reviews.push(obj);
                    _this.totalReview = res.data.total;
                });
            }
            else {
            }
        }, function (error) { });
    };
    ItemDetailComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._sharedService.get('categoryList').then(function (res) {
            if (res.success) {
                _this.categories = res.data.category;
            }
            else {
            }
        }, function (err) { });
    };
    ItemDetailComponent.prototype.ratingR = function (rating) {
        if (rating)
            return parseInt(rating);
        else
            return 0;
    };
    ItemDetailComponent.prototype.clickStar = function (givenStar) {
        this.rating = givenStar;
        this.review.rating = this.rating;
    };
    ItemDetailComponent.prototype.save = function () {
        var _this = this;
        if (this._sharedService.isLogin()) {
            this._sharedService.loader('show');
            this._sharedService.post(this.review, 'reviews').then(function (res) {
                _this._sharedService.loader('hide');
                if (res.success) {
                    _this.pageReview = 0;
                    _this.fetchReviews();
                    _this.review = {
                        item_id: _this.object['id'],
                        type: 'dispensary',
                        rating: null,
                        detail: ''
                    };
                    _this._sharedService.showAlert('Review Added Succefully.', 'alert-success');
                }
                else {
                    _this._sharedService.showAlert(res.error.message, 'alert-danger');
                }
            }, function (error) { });
        }
        else {
            this._sharedService.showAlert("Please Login to write a review.", 'alert-danger');
        }
    };
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item-detail',
            template: __webpack_require__("../../../../../src/app/pages/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/item-detail/item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/pages/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_items_view_items_component__ = __webpack_require__("../../../../../src/app/pages/view-items/view-items.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'item-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail_component__["a" /* ItemDetailComponent */]
    }, {
        path: 'view-items/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__view_items_view_items_component__["a" /* ViewItemsComponent */]
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/pages/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_items_view_items_component__ = __webpack_require__("../../../../../src/app/pages/view-items/view-items.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_routing_module__["a" /* PagesRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__item_detail_item_detail_component__["a" /* ItemDetailComponent */], __WEBPACK_IMPORTED_MODULE_7__view_items_view_items_component__["a" /* ViewItemsComponent */]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/view-items/view-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/view-items/view-items.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"clearfix\"></div>\n<div class=\"spc-top\"></div>\n<!-- This is a Dispensaries -->\n<section class=\"featured-disp\" *ngIf=\"type == 'dispensary'\">\n    <div class=\"container-flude\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12 text-center\">\n                <h2><img src=\"assets/img/title-icon.png\"> featured dispensaries</h2>\n                <!-- <div class=\"mor-btn-grp\" *ngIf=\"dispensaryTotal > 5\">\n                    <button class=\"btn btn-default\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n                </div> -->\n            </div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-12\">\n                <div class=\"col-sm-3\" *ngFor=\"let obj of arrayObj\">\n                    <a href=\"#/page/item-detail/{{obj.id}}\">\n                        <div class=\"wrap\">\n                            <div class=\"top-sec\">\n                                <div class=\"pro-thumbnail\">\n                                    <img *ngIf=\"obj.image\" style=\"height: 100px;\" src=\"{{_host}}images/dispensary/thumbnail/200/{{obj.image}}\">\n                                    <img *ngIf=\"!obj.image\" src=\"assets/img/no-image-text.png\">\n                                </div>\n                                <span class=\"loc-track\"><img src=\"assets/img/loc-map-icon.png\" class=\"img-responsive\"></span>\n                            </div>\n                            <div class=\"midd-sec\">\n                                <p>{{obj.address}}, {{obj.city}}</p>\n                                <h6>{{obj.name}}</h6>\n                                <p>Medical</p>\n                            </div>\n                            <div class=\"bottom-sec row\">\n                                <div class=\"col-sm-8\">\n                                    <span class=\"rating\">\n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 1, 'fa-star': obj.totalRating >= 1}\" title=\"Poor\"></i>\n\n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 2, 'fa-star': obj.totalRating >= 2}\"  title=\"Not bad\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 3, 'fa-star': obj.totalRating >= 3}\"  title=\"Average\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 4, 'fa-star': obj.totalRating >= 4}\"  title=\"Good\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 5, 'fa-star': obj.totalRating >= 5}\"  title=\"Excellent\"></i>\n                                    </span>\n                                </div>    \n                                <div class=\"col-sm-4 text-right\">\n                                    <span>1mi</span>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row  m-0\">\n        \t<div class=\"col-sm-12 text-center pull-center\">\n        \t\t<div class=\"\" *ngIf=\"totalItems > arrayObj.length\" >\n                    <button class=\"btn btn-default btn-link\" (click)=\"showMore()\" >View More</button>\n                </div>\n        \t</div>\n        </div>\n    </div>\n</section>\n<!-- End Dispensaries -->\n\n<!-- This is a Brands -->\n<section class=\"featured-brands\" *ngIf=\"type == 'brand'\">\n    <div class=\"container-flude\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12 text-center\">\n                <h2><img src=\"assets/img/title-icon.png\"> featured Brands</h2>\n                <!-- <div class=\"mor-btn-grp\" *ngIf=\"brandTotal > 5\">\n                    <button class=\"btn btn-default\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n                </div> -->\n            </div>\n            <div class=\"col-sm-1\"></div>\n             <div class=\"col-sm-12\">\n                <div class=\"col-sm-3\" *ngFor=\"let obj of arrayObj\" style=\"margin-top: 18px;\">\n                    <a href=\"#/page/item-detail/{{obj.id}}\">\n                        <div class=\"wrap\">\n                            <div class=\"top-sec\">\n                                <div class=\"pro-thumbnail\">\n                                    <img *ngIf=\"!obj.image\" src=\"assets/img/no-image.jpg\" class=\"img-responsive\">\n                                    <img *ngIf=\"obj.image\" style=\"height: 100px;\" src=\"{{_host}}images/dispensary/thumbnail/200/{{obj.image}}\" class=\"img-responsive\">\n                                </div>\n                            </div>\n                            <div class=\"midd-sec\">\n                                <h6>{{obj.name}}</h6>\n                            </div>\n                            <div class=\"bottom-sec row\">\n                                <div class=\"col-sm-12\">\n                                    <span class=\"rating\">\n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 1, 'fa-star': obj.totalRating >= 1}\" title=\"Poor\"></i>\n\n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 2, 'fa-star': obj.totalRating >= 2}\"  title=\"Not bad\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 3, 'fa-star': obj.totalRating >= 3}\"  title=\"Average\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 4, 'fa-star': obj.totalRating >= 4}\"  title=\"Good\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 5, 'fa-star': obj.totalRating >= 5}\"  title=\"Excellent\"></i>\n                                    </span>\n                                </div> \n                            </div>\n                        </div>\n                    </a>\n                </div>\n             </div>\n        </div>\n        <div class=\"row  m-0\">\n        \t<div class=\"col-sm-12 text-center pull-center\">\n        \t\t<div class=\"\" *ngIf=\"totalItems > arrayObj.length\" >\n                    <button class=\"btn btn-default btn-link\" (click)=\"showMore()\" >View More</button>\n                </div>\n        \t</div>\n        </div>\n    </div>\n</section>\n<!-- End Brands -->\n<!-- This is a Medical -->\n<section class=\"featured-medical\" *ngIf=\"type == 'doctor'\">\n    <div class=\"container-flude\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12 text-center\">\n                <h2><img src=\"assets/img/title-icon.png\"> Medical</h2>\n                <!-- <div class=\"mor-btn-grp\" *ngIf=\"doctorTotal > 5\">\n                    <button class=\"btn btn-default\">View More <img src=\"assets/img/arrow-right.png\" class=\"\" width=\"20\"></button>\n                </div> -->\n            </div>\n            <div class=\"col-sm-1\"></div>\n             <div class=\"col-sm-12\">\n                <div class=\"col-sm-3\" *ngFor=\"let obj of arrayObj\">\n                    <a href=\"#/page/item-detail/{{obj.id}}\">\n                        <div class=\"wrap\">\n                            <div class=\"top-sec\">\n                                <div class=\"pro-thumbnail\">\n                                    <img *ngIf=\"!obj.image\" src=\"assets/img/no-image.jpg\" class=\"img-responsive\">\n                                    <img *ngIf=\"obj.image\" style=\"height: 100px;\" src=\"{{_host}}images/dispensary/thumbnail/200/{{obj.image}}\" class=\"img-responsive\">\n                                </div>\n                            </div>\n                            <div class=\"midd-sec\">\n                                <h6>{{obj.name}}</h6>\n                            </div>\n                            <div class=\"bottom-sec row\">\n                                <div class=\"col-sm-12\">\n                                    <span class=\"rating\">\n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 1, 'fa-star': obj.totalRating >= 1}\" title=\"Poor\"></i>\n\n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 2, 'fa-star': obj.totalRating >= 2}\"  title=\"Not bad\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 3, 'fa-star': obj.totalRating >= 3}\"  title=\"Average\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 4, 'fa-star': obj.totalRating >= 4}\"  title=\"Good\"></i>\n                                        \n                                        <i class=\"fa fa-1x\" [ngClass]=\"{'fa-star-o': obj.totalRating < 5, 'fa-star': obj.totalRating >= 5}\"  title=\"Excellent\"></i>\n                                    </span>\n                                </div> \n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row  m-0\">\n        \t<div class=\"col-sm-12 text-center pull-center\">\n        \t\t<div class=\"\" *ngIf=\"totalItems > arrayObj.length\" >\n                    <button class=\"btn btn-default btn-link\" (click)=\"showMore()\" >View More</button>\n                </div>\n        \t</div>\n        </div>\n    </div>\n</section>\n<!-- End Medical -->"

/***/ }),

/***/ "../../../../../src/app/pages/view-items/view-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewItemsComponent; });
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




var ViewItemsComponent = /** @class */ (function () {
    function ViewItemsComponent(_route, _sharedService) {
        this._route = _route;
        this._sharedService = _sharedService;
        this._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
        this.arrayObj = [];
        this.totalItems = 0;
        this.page = 1;
        this.count = 10;
    }
    ViewItemsComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    ViewItemsComponent.prototype.fetch = function () {
        var _this = this;
        this.type = this._route.snapshot.params['id'];
        var options = {
            businessType: this.type,
            page: this.page,
            count: this.count
        };
        this._sharedService.queryParams('FeaturedData', options).then(function (res) {
            _this._sharedService.loader('hide');
            if (res.success) {
                res.data.items.forEach(function (obj) {
                    _this.arrayObj.push(obj);
                });
                _this.totalItems = res.data.total;
            }
            else {
            }
        }, function (error) { });
    };
    ViewItemsComponent.prototype.showMore = function () {
        this.page += 1;
        this._sharedService.loader('show');
        this.fetch();
    };
    ViewItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-items',
            template: __webpack_require__("../../../../../src/app/pages/view-items/view-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/view-items/view-items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], ViewItemsComponent);
    return ViewItemsComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map