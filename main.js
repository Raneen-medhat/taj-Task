(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _query_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./query-service.service */ "./src/app/query-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// App Modules







// App Components


//App services

// App Routing
var appRoutes = [
    { path: '', component: _items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"]
            ],
            providers: [_query_service_service__WEBPACK_IMPORTED_MODULE_9__["QueryServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <!-- search input -->\n      <input type=\"text\" class=\"w-100 p-2 m-1 d-block\" [(ngModel)]=\"term\" placeholder=\"بحث\">\n    </div>\n    <div class=\"col-sm-6\">\n        <button class=\"btn btn-outline-primary mb-2 mr-2 p-2 m-1 d-block f-left\" (click)=\"openLg(content)\">اضافة صنف</button>\n      </div>\n    <!-- Add new Item Modal-->    \n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">اضافة صنف</h4>\n        </div>\n        <div class=\"modal-body\">\n            <!-- Add new Item Form -->\n            <form  name=\"newItem\" #newItem=\"ngForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"addNewItem(newItem)\" novalidate>\n              <label >م</label>\n              <input class=\"d-block w-100 m-2 p-2\" type=\"number\" name=\"ItemId\"  #ItemId=\"ngModel\" [(ngModel)]=\"newItem.ItemId\" readonly>\n              <label >الاسم</label>\n              <input class=\"d-block w-100 m-2 p-2\" type=\"text\" name=\"ItemName\"  #ItemName=\"ngModel\" [(ngModel)]=\"newItem.ItemName\" required>\n              <label >السعر</label>\n              <input class=\"d-block w-100 m-2 p-2\" type=\"number\" name=\"Price\"  #Price=\"ngModel\" [(ngModel)]=\"newItem.Price\" required>\n              <label >صورة</label>\n              <input class=\"d-block w-100 m-2 p-2\" type=\"file\" required (change)=\"readURL($event.target.files)\">\n              <div>\n                  <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n              </div>\n              <input type=\"hidden\">\n              <label >تاريخ الانتهاء</label>\n              <input class=\"d-block w-100 m-2 p-2\" type=\"date\" name=\"ExpireDate\" #ExpireDate=\"ngModel\" [(ngModel)]=\"newItem.ExpireDate\" required>\n              <button class=\"d-block w-100 m-2 p-2\" type=\"submit\" class=\"btn big-btn mt-2 ml-3\"> اضافة</button>\n            </form> \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">الغاء</button>\n        </div>\n    </ng-template>\n\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">م</th>\n          <th scope=\"col\">الاسم</th>\n          <th scope=\"col\">السعر</th>\n          <th scope=\"col\">صورة المنتج</th>\n          <th scope=\"col\">انتهاء الصلاحية</th>\n          <th scope=\"col\">خيارات</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of allItems |filter:term\">\n          <td>{{item.ItemId}}</td>\n          <td>{{item.ItemName}}</td>\n          <td>{{item.Price}}</td>\n          <td> <img src=\"{{item.Photo}}\" alt=\"\" alt=\"{{item.ItemName}}\">\n            </td>\n          <td>{{item.ExpireDate | date: 'dd/MM/yyyy'}}</td>\n          <td>  <button class=\"btn btn-outline-danger m-1\" (click)=\"openVerticallyCentered(content3)\">مسح</button> \n            <!-- To delete item with confirmation msg-->\n            <ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">تاكيد الحذف</h4>\n                </div>\n                <div class=\"modal-body text-right\">\n                  <p>هل انت متاكد من حذف هذا الصنف&hellip;</p>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-outline-danger m-1\" (click)=\"deleteItem(item.ItemId)\">تاكيد</button>\n                  <button type=\"button\" class=\"btn btn-outline-success m-1\" (click)=\"c('Close click')\">الغاء</button>\n                </div>\n            </ng-template>\n            <!-- To Update item with confirmation msg-->\n              <button class=\"btn btn-outline-primary m-1\" (click)=\"updateItem(content2,item.ItemId,item.ExpireDate)\">تعديل</button>\n               <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">تعديل الصنف</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                  <!-- Add new Item Form -->\n                  <form  name=\"updateItem\" #updateItem=\"ngForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"toUpdateItem(updateItem)\" novalidate>\n                    <label >م</label>\n                    <input class=\"d-block w-100 m-2 p-2\" type=\"number\" name=\"ItemId\"  #ItemId=\"ngModel\" [(ngModel)]=\"targetItem.ItemId\" value=\"{{targetItem.ItemId}}\" readonly>\n                    <label >الاسم</label>\n                    <input class=\"d-block w-100 m-2 p-2\" type=\"text\" name=\"ItemName\"  #ItemName=\"ngModel\" [(ngModel)]=\"targetItem.ItemName\" value=\"{{targetItem.ItemName}}\" required>\n                    <label >السعر</label>\n                    <input class=\"d-block w-100 m-2 p-2\" type=\"number\" name=\"Price\"  #Price=\"ngModel\" [(ngModel)]=\"targetItem.Price\" value=\"{{targetItem.Price}}\"required>\n                    <label >صورة</label>\n                    <input class=\"d-block w-100 m-2 p-2\" type=\"file\" required (change)=\"readURL($event.target.files)\">\n                    <div>\n                        <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n                    </div>\n                    <input type=\"hidden\">\n                    <label >تاريخ الانتهاء</label>\n                    <input class=\"d-block w-100 m-2 p-2\" type=\"date\" name=\"ExpireDate\" #ExpireDate=\"ngModel\" id=\"date\"[(ngModel)]=\"targetItem.ExpireDate\" value=\"{{targetItem.ExpireDate | date: 'dd/MM/yyyy' }}\" required>\n                    <div class=\"modal-footer text-right\">\n                        <button class=\"d-block w-100 m-2 p-2\" type=\"submit\" class=\"btn big-btn mt-2 ml-3 btn btn-outline-success\"> حفظ</button>\n                        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"c('Close click')\">الغاء</button>\n                      </div>\n                  </form> \n                </div>\n                \n              </ng-template>\n          </td>\n  \n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/items/items.component.scss":
/*!********************************************!*\
  !*** ./src/app/items/items.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 180px; }\n"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _query_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../query-service.service */ "./src/app/query-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(Query, modalService) {
        this.Query = Query;
        this.modalService = modalService;
        this.urls = new Array();
        this.getItmes();
    }
    // Modal functions
    ItemsComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    ItemsComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    // Add new Item Form Function
    ItemsComponent.prototype.addNewItem = function (data) {
        if (!data.valid) {
            console.log("error");
        }
        else {
            console.log(data.value);
            var path = "http://task.taj-it.com/api/Items";
            this.Query.postReq(path, data.value).subscribe(function (res) {
                console.log(res);
                location.reload();
            }, function (err) {
                console.log(err);
            });
        }
    };
    // function to read image URL and send it
    ItemsComponent.prototype.readURL = function (path) {
        var _this = this;
        this.urls = [];
        if (path) {
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var file = path_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        var Imgpath = "http://task.taj-it.com/api/UploadImage";
        this.Query.postReq(Imgpath, this.urls[0]).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    // function to get all items
    ItemsComponent.prototype.getItmes = function () {
        var _this = this;
        var itemPath = "http://task.taj-it.com/api/Items";
        this.Query.getReq(itemPath).subscribe(function (res) {
            _this.allItems = res;
            console.log(_this.allItems);
        }, function (err) {
            console.log(err);
        });
    };
    // function to delete item
    ItemsComponent.prototype.deleteItem = function (id) {
        console.log(id);
        var itemPath = "http://task.taj-it.com/api/Items/" + id;
        this.Query.deleteReq(itemPath).subscribe(function (res) {
            console.log(res);
            location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    // function to open update item modal and get hit own data
    ItemsComponent.prototype.updateItem = function (content2, item) {
        var _this = this;
        this.modalService.open(content2, { size: 'lg' });
        var itemPath = "http://task.taj-it.com/api/Items/" + item;
        this.Query.getReq(itemPath).subscribe(function (res) {
            console.log(res);
            _this.targetItem = res;
            console.log(_this.targetItem);
            //  document.getElementById("Date").defaultValue = this.targetItem['ExpireDate'] ;
        }, function (err) {
            console.log(err);
        });
    };
    ItemsComponent.prototype.toUpdateItem = function (updateData) {
        console.log(updateData.value);
        var itemPath = "http://task.taj-it.com/api/Items/" + this.targetItem['ItemId'];
        this.Query.putReq(itemPath, updateData.value).subscribe(function (res) {
            console.log(res);
            location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.scss */ "./src/app/items/items.component.scss")]
        }),
        __metadata("design:paramtypes", [_query_service_service__WEBPACK_IMPORTED_MODULE_1__["QueryServiceService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/query-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/query-service.service.ts ***!
  \******************************************/
/*! exports provided: QueryServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryServiceService", function() { return QueryServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryServiceService = /** @class */ (function () {
    function QueryServiceService(http // Inject httpClient
    ) {
        this.http = http; // Inject httpClient
    }
    // Post Request path , header <option>, data <option>
    QueryServiceService.prototype.postReq = function (path, header, data) {
        return this.http.post(path, header, data);
    };
    // Get Request path , header <option>
    QueryServiceService.prototype.getReq = function (path, header) {
        return this.http.get(path, header);
    };
    // Put Request path , header <option>, data <option>
    QueryServiceService.prototype.putReq = function (path, header, data) {
        return this.http.put(path, header, data);
    };
    // Delete Request path , header <option>, data <option>
    QueryServiceService.prototype.deleteReq = function (path, data) {
        return this.http.delete(path, data);
    };
    QueryServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] // Inject httpClient
        ])
    ], QueryServiceService);
    return QueryServiceService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ITI\job tasks\taj\taj-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map