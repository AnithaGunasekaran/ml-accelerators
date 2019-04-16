(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extract_extract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extract/extract.component */ "./src/app/components/extract/extract.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_train_train_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/train/train.component */ "./src/app/components/train/train.component.ts");
/* harmony import */ var _components_extract_landing_extract_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/extract-landing/extract-landing.component */ "./src/app/components/extract-landing/extract-landing.component.ts");
/* harmony import */ var _components_train_landing_train_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/train-landing/train-landing.component */ "./src/app/components/train-landing/train-landing.component.ts");









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'extract', component: _components_extract_extract_component__WEBPACK_IMPORTED_MODULE_3__["ExtractComponent"] },
    { path: 'train', component: _components_train_train_component__WEBPACK_IMPORTED_MODULE_6__["TrainComponent"] },
    { path: 'extract-landing', component: _components_extract_landing_extract_landing_component__WEBPACK_IMPORTED_MODULE_7__["ExtractLandingComponent"] },
    { path: 'train-landing', component: _components_train_landing_train_landing_component__WEBPACK_IMPORTED_MODULE_8__["TrainLandingComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  top: 0px; }\n\n.content {\n  text-align: center;\n  height: 92%;\n  overflow: scroll; }\n\napp-footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFRLEVBQ1Q7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGlCQUFlLEVBRWhCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gIHRvcDogMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA5MiU7XG4gIG92ZXJmbG93OnNjcm9sbDtcblxufVxuXG5hcHAtZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ml-accelerators';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_extract_extract_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/extract/extract.component */ "./src/app/components/extract/extract.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_home_pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/pdf-viewer/pdf-viewer.component */ "./src/app/components/home/pdf-viewer/pdf-viewer.component.ts");
/* harmony import */ var _components_home_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/modal/modal.component */ "./src/app/components/home/modal/modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_lightbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/lightbox */ "./node_modules/primeng/lightbox.js");
/* harmony import */ var primeng_lightbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_lightbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_train_train_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/train/train.component */ "./src/app/components/train/train.component.ts");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_extract_landing_extract_landing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/extract-landing/extract-landing.component */ "./src/app/components/extract-landing/extract-landing.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _components_train_landing_train_landing_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/train-landing/train-landing.component */ "./src/app/components/train-landing/train-landing.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_extract_extract_component__WEBPACK_IMPORTED_MODULE_7__["ExtractComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _components_home_pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_9__["PdfViewerComponent"],
                _components_home_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _components_train_train_component__WEBPACK_IMPORTED_MODULE_23__["TrainComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
                _components_extract_landing_extract_landing_component__WEBPACK_IMPORTED_MODULE_29__["ExtractLandingComponent"],
                _components_train_landing_train_landing_component__WEBPACK_IMPORTED_MODULE_31__["TrainLandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase),
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__["FileDropModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                primeng_lightbox__WEBPACK_IMPORTED_MODULE_17__["LightboxModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__["CheckboxModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_21__["CardModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_24__["ProgressBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/extract-landing/extract-landing.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/extract-landing/extract-landing.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n <div class=\"row\" >\n        <p-progressBar *ngIf=\"isLoading === true\" mode=\"indeterminate\"></p-progressBar>\n        <div class=\"container\" [ngClass]=\"visibleForm ? 'seltile' : ''\">\n                <h1>Usecases</h1>\n    \n                <div class=\"p-grid\" *ngIf=\"selectedUsecase.length ===  0\">\n                    <ng-container *ngFor=\"let usecase of useCases\">\n                        <p-card (click)='showForm(usecase)' [style]=\"{width: '200px'}\" class=\"p-sm-6 p-md-4 p-lg-3 p-xl-2\" [ngClass]=\"{'selected': usecase.selected}\">\n                        <img src=\"Card\" src=\"{{publicURL}}{{usecase.image}}\" pTooltip=\"{{usecase.Desc}}\" tooltipPosition=\"top\">\n                        <h6>{{usecase.name}}</h6>\n                        </p-card>\n                    </ng-container>\n                </div>\n    \n                <div  class=\"p-grid selected\" *ngIf=\"selectedUsecase.length === 1\">\n                    <ng-container *ngFor=\"let usecase of selectedUsecase\">\n                            <p-card (click)='showForm(usecase)' [style]=\"{width: '200px'}\" class=\"p-sm-6 p-md-4 p-lg-3 p-xl-2\" [ngClass]=\"{'selected': usecase.selected}\">\n                                    <img src=\"Card\" src=\"{{publicURL}}{{usecase.image}}\" pTooltip=\"{{usecase.Desc}}\" tooltipPosition=\"top\">\n                                    <h6>{{usecase.name}}</h6>\n                            </p-card>\n                    </ng-container>\n                </div>\n        </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"container-fluid\">\n        \n        <div class=\"template-panel\" *ngIf=\"visibleForm === true\" [@enterAnimation]>\n                <button style=\"position: absolute; right: 20px;\" (click)=\"close()\" class=\"btn btn-secondary\">Close</button>\n                <div style=\"margin: 0 auto 50px auto; overflow-y: scroll; max-width: 1140px;\">\n                        <div class=\"form-container\">\n                          <h3 *ngIf=\"selectedUsecase.length === 1\" style=\"font-size: 22px;  margin-bottom: 10px;\">Selected usecase - {{selectedUsecase[0].name}}</h3>\n                          <div class=\"template-form\">\n                            <div style=\"margin: 0 auto\">\n                              <div style=\"text-align: right; font-size: 18px; font-weight: bold; line-height: 30px; padding-right: 20px; display:inline-block\">\n                                Select a template:\n                              </div>\n                              <div class=\"radiobtns\">\n                                <div class=\"ctl\" *ngFor=\"let template of templates\">\n                                  <label style=\"cursor: pointer; font-size: 16px\"><input (click)=\"selectTemplate(template)\" name=\"optradio\" type=\"radio\"> <span style=\"padding: 0 10px;\">{{ template.name }}</span></label>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                    \n                          <h3 *ngIf=\"selectedTemplate\" style=\"font-size: 22px; margin-top: 10px; margin-bottom: 15px;\">Upload for template - {{selectedTemplate.name}}</h3>\n                          <div [hidden]='disableCtl' style=\"margin-bottom: 30px;\" class=\"form\">\n                                <div class=\"form-group\" [formGroup]=\"uploadPDFsFormGroup\">\n                                <div formArrayName=\"file\">\n                                <div *ngFor=\"let name of uploadPDFsFormGroup.controls['file'].controls; let i = index\" style=\"margin: 10px;\">\n                                <input [formControlName]=\"i\" [attr.disabled]=\"disableCtl ? '' : null\" (change)=\"handleFileInput($event,i)\" type=\"file\"/>\n                                <!-- <button style=\"background: #102244; border:none;\" class=\"btn btn-primary\" (click)=\"uploadFile()\">Upload</button> -->\n                                <button [attr.disabled]=\"disableCtl ? '' : null\" style=\"margin-left: 10px;background: #102244; border: none; font-size: 16px;\" *ngIf=\"i === uploadPDFsFormGroup.controls['file'].controls.length -1\" class=\"btn btn-primary\" (click)=\"addItem('file')\">+</button>\n                                <button [attr.disabled]=\"disableCtl ? '' : null\" style=\"margin-left: 10px;background: #102244; border: none; font-size: 16px;\" *ngIf=\"i !== uploadPDFsFormGroup.controls['file'].controls.length -1\" class=\"btn btn-primary\" (click)=\"removeItem('file',i)\">-</button>\n                                <div *ngIf=\"uploadResponse.status === 'error'\">\n                                {{ uploadResponse.message }}\n                                </div>\n                                <div>\n                                <div *ngIf=\"uploadResponse.status === 'progress'\">\n                                <p-progressBar mode=\"indeterminate\"></p-progressBar>\n                                <div>{{successMsg}}</div>\n                                </div>\n                                </div>\n                                </div>\n                                </div>\n                                </div><!-- <div [hidden]='disableCtl' style=\"max-width: 800px;margin: 0 auto 20px 0;\">\n                    <file-drop [attr.disabled]=\"disableCtl ? '' : null\" dropZoneLabel=\"\" (onFileDrop)=\"dropped($event)\"\n                    (onFileOver)=\"fileOver($event)\" accept=\"pdf\" (onFileLeave)=\"fileLeave($event)\">\n                    <span>Drag and drop the templates for {{selectedUsecase[0].name}}</span>\n                    </file-drop>\n                    <div *ngIf=\"filesDrag.length > 0 && filesDrag.length <=5\" style=\"text-align: left; width: 100%\" class=\"upload-table\">\n                    <table style=\"margin-top:20px\" class=\"table\">\n                    <thead>\n                    <tr>\n                    <th>Files dropped</th>\n                    </tr>\n                    </thead>\n                    <tbody class=\"upload-name-style\">\n                    <tr *ngFor=\"let item of filesDrag; let i=index\">\n                    <td><strong>{{ item.relativePath }}</strong></td>\n                    </tr>\n                    </tbody>\n                    </table>\n                    </div>\n                    </div> -->\n                            <!-- <p><button (click)=\"extract()\" class=\"btn btn-primary\">Extract</button></p> -->\n                            <p><button class=\"btn btn-primary\">Extract</button></p>\n                          </div>\n                        </div>\n                      </div>\n        </div>\n  \n    </div>\n</div> \n"

/***/ }),

/***/ "./src/app/components/extract-landing/extract-landing.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/extract-landing/extract-landing.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-grid p-card .ui-card-body {\n  padding: 0; }\n\n.row:nth-child(1) {\n  width: 100%; }\n\n.row .form-container {\n  width: 100%;\n  height: 100%;\n  float: left; }\n\n.template-panel {\n  overflow-y: auto;\n  width: auto; }\n\n.p-grid p-card .ui-card {\n  background: #FFFFFF;\n  box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.55);\n  border: solid 1px #D4D4D4; }\n\n.ui-card-body {\n  padding: 0; }\n\n.ngx-file-drop__drop-zone[_ngcontent-c4] {\n  border-color: #102244 !important; }\n\n.ngx-file-drop__content {\n  color: #102244 !important; }\n\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px; }\n\n.row .container .p-grid {\n  max-width: 700px;\n  margin: 0 auto; }\n\n.row .container .p-grid.selected {\n  max-width: 210px; }\n\n.form-container.noborder {\n  border-top: none;\n  padding-top: 20px; }\n\n.p-grid:hover {\n  cursor: pointer; }\n\n.p-grid {\n  margin: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n\n.ui-card-body {\n  padding: 0; }\n\n.p-grid p-card img {\n  width: 100%;\n  height: 180px; }\n\n.template-form {\n  display: flex;\n  max-width: 100%;\n  margin: 20px auto;\n  border: solid 2px #eee;\n  padding: 20px;\n  border-radius: 20px; }\n\n.form {\n  border: solid 2px #eee;\n  padding: 5px 10px;\n  border-radius: 20px;\n  max-width: 80%;\n  margin: 0 auto; }\n\n.form h2 {\n  margin-top: 10px; }\n\n.ctl {\n  text-align: left; }\n\n.ctl label {\n  font-size: 18px; }\n\n.radiobtns {\n  display: inline-block;\n  font-size: 18px; }\n\n.radiobtns .ctl {\n  display: inline; }\n\n.p-xl-2 {\n  width: 33%; }\n\n.ui-card-body {\n  padding: 0; }\n\n.p-grid:hover {\n  cursor: pointer; }\n\n.p-grid {\n  margin: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n\n.ui-card-body {\n  padding: 0; }\n\n.p-grid p-card img {\n  width: 100%;\n  height: 180px; }\n\np-card {\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n  text-align: center;\n  margin-bottom: 60px; }\n\nh6 {\n  color: #0F2244;\n  padding-top: 20px;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.ui-card-content {\n  position: relative; }\n\n.p-grid p-card.selected .ui-card {\n  border: 3px solid #0F2244; }\n\n.form-container {\n  z-index: 100;\n  background: #FFFFFF; }\n\n.extractButton button, .trainButton button {\n  margin-left: 15px;\n  background-color: #0F2244; }\n\n.form-container button {\n  background: #102244;\n  color: #FFF;\n  border: none; }\n\np-checkbox .ui-chkbox-icon {\n  background-color: #0F2244; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2V4dHJhY3QtbGFuZGluZy9leHRyYWN0LWxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVLEVBQ1g7O0FBQ0M7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFVO0VBQ1YsYUFBVztFQUNYLFlBQVUsRUFDWDs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXLEVBRVo7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIscURBQW9EO0VBQ3BELDBCQUF5QixFQUM1Qjs7QUFDQztFQUNBLFdBQVUsRUFDVDs7QUFDRDtFQUNFLGlDQUFnQyxFQUNqQzs7QUFDRDtFQUVFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLDRCQUEyQjtFQUMzQixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNBLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixZQUFXLEVBQ1Y7O0FBQ0Q7RUFDQSxXQUFVLEVBQ1Q7O0FBQ0Q7RUFDQSxZQUFXO0VBQ1gsY0FBYSxFQUNaOztBQUNEO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYSxFQUNkOztBQUNEO0VBQ0UscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFHRDtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHRyYWN0LWxhbmRpbmcvZXh0cmFjdC1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtZ3JpZCBwLWNhcmQgLnVpLWNhcmQtYm9keXtcbiAgcGFkZGluZzogMDtcbn1cbiAgLnJvdzpudGgtY2hpbGQoMSl7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucm93IC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBmbG9hdDpsZWZ0O1xuICB9XG4gIC50ZW1wbGF0ZS1wYW5lbHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICBcbiAgfVxuICAucC1ncmlkIHAtY2FyZCAudWktY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTZweCAtMTFweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNENEQ0RDQ7XG59XG4gIC51aS1jYXJkLWJvZHl7IFxuICBwYWRkaW5nOiAwO1xuICB9XG4gIC5uZ3gtZmlsZS1kcm9wX19kcm9wLXpvbmVbX25nY29udGVudC1jNF17XG4gICAgYm9yZGVyLWNvbG9yOiAjMTAyMjQ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5neC1maWxlLWRyb3BfX2NvbnRlbnR7XG4gIFxuICAgIGNvbG9yOiAjMTAyMjQ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9wZW4tY2xvc2UtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5yb3cgLmNvbnRhaW5lciAucC1ncmlke1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnJvdyAuY29udGFpbmVyIC5wLWdyaWQuc2VsZWN0ZWR7XG4gICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgfVxuICAuZm9ybS1jb250YWluZXIubm9ib3JkZXJ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAucC1ncmlkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucC1ncmlke1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnVpLWNhcmQtYm9keXtcbiAgcGFkZGluZzogMDtcbiAgfVxuICAucC1ncmlkIHAtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDsgIFxuICB9XG4gIC50ZW1wbGF0ZS1mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNlZWU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIC5mb3Jte1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNlZWU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuZm9ybSBoMntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5jdGx7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuY3RsIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAucmFkaW9idG5ze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLnJhZGlvYnRucyAuY3Rse1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICBcbiAgLnAteGwtMntcbiAgICB3aWR0aDogMzMlO1xuICB9XG4gIC51aS1jYXJkLWJvZHl7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLnAtZ3JpZDpob3ZlcntcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucC1ncmlke1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudWktY2FyZC1ib2R5e1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnAtZ3JpZCBwLWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE4MHB4OyAgXG4gIH1cbiAgcC1jYXJkIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cbiAgXG4gIFxuICBoNiB7XG4gICAgY29sb3I6ICMwRjIyNDQ7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudWktY2FyZC1jb250ZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucC1ncmlkIHAtY2FyZC5zZWxlY3RlZCAudWktY2FyZHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMEYyMjQ0O1xuICB9XG4gIC5mb3JtLWNvbnRhaW5lcntcbiAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIH1cbiAgLmV4dHJhY3RCdXR0b24gYnV0dG9uLCAudHJhaW5CdXR0b24gYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYyMjQ0O1xuICB9XG4gIC5mb3JtLWNvbnRhaW5lciBidXR0b257XG4gICAgYmFja2dyb3VuZDogIzEwMjI0NDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgcC1jaGVja2JveCAudWktY2hrYm94LWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRjIyNDQ7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/extract-landing/extract-landing.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/extract-landing/extract-landing.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExtractLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractLandingComponent", function() { return ExtractLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/service.service */ "./src/app/components/extract-landing/services/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_services_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/services/header.service */ "./src/app/components/header/services/header.service.ts");








var ExtractLandingComponent = /** @class */ (function () {
    function ExtractLandingComponent(useCaseService, formBuilder, route, headerSerivce) {
        this.useCaseService = useCaseService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.headerSerivce = headerSerivce;
        this.useCases = [];
        this.fileToUpload = [];
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.progress = 100;
        this.visibleForm = false;
        this.disableCtl = true;
        this.templates = [];
        this.lastCtl = true;
        this.promiseArray = [];
        this.finalRes = [];
        this.selUsecaseName = "";
        this.isLoading = false;
        this.expand = false;
        this.state = '';
        this.selectedUsecase = [];
        this.isOpen = true;
        this.filesDrag = [];
        this.publicURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].public;
        this.show = false;
        this.readUploadedFileAsText = function (inputFile) {
            var temporaryFileReader = new FileReader();
            return new Promise(function (resolve, reject) {
                temporaryFileReader.onerror = function () {
                    temporaryFileReader.abort();
                    reject(new DOMException("Problem parsing input file."));
                };
                temporaryFileReader.onload = function () {
                    resolve(temporaryFileReader.result);
                };
                temporaryFileReader.readAsDataURL(inputFile);
            });
        };
    }
    ExtractLandingComponent.prototype.ngOnInit = function () {
        this.headerSerivce.storeCurrentNavigatedUrl(this.route.url);
        this.getUsecases();
        this.buildForm();
    };
    Object.defineProperty(ExtractLandingComponent.prototype, "stateName", {
        get: function () {
            return this.show ? 'open' : 'closed';
        },
        enumerable: true,
        configurable: true
    });
    ExtractLandingComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.selectedUsecase.length = 0;
        this.useCases.map(function (item) {
            item.selected = false;
        });
    };
    ExtractLandingComponent.prototype.dropped = function (event) {
        this.filesDrag = event.files;
        if (this.filesDrag.length >= 6) {
            alert("You cannot select select more than 5 file(s)");
        }
        console.log(this.filesDrag);
    };
    ExtractLandingComponent.prototype.showForm = function (usecase) {
        var _this = this;
        usecase.selected = !usecase.selected;
        this.selectedUsecase = Object.values(this.useCases).filter(function (value) { return value.selected === true; });
        this.visibleForm = true;
        this.templates = [];
        console.log("Selected usecase - ", this.selectedUsecase);
        this.useCaseService.fetchTemplates(usecase.use_case_id).then(function (data) {
            data.templates.map(function (items) {
                _this.templates.push(Object.assign(items, { selected: false }));
            });
        });
        if (!usecase.selected) {
            this.visibleForm = false;
        }
    };
    ExtractLandingComponent.prototype.selectTemplate = function (template) {
        this.selectedTemplate = template;
        this.disableCtl = false;
    };
    ExtractLandingComponent.prototype.fileOver = function (event) {
        console.log(this.filesDrag);
        if (this.filesDrag.length >= 6) {
            alert("Please select less than 5 file(s)");
        }
    };
    ExtractLandingComponent.prototype.extractMulti = function () {
        var _this = this;
        this.isLoading = true;
        var uploadArr = [];
        this.fileToUpload.map(function (item) {
            var formData = new FormData();
            // const fileEntry = item.fileEntry as FileSystemFileEntry;
            // fileEntry.file((file: File) => {
            //   formData.append('fileKey',file, item.relativePath);
            //   this.useCaseService.postFileMultiPart(formData).then((res)=>{
            //   });
            // });
            // console.log(item.fileEntry)
            // console.log("Item", item)
            formData.append('fileKey', item, item.name);
            formData.append('use_case_id', _this.selectedUsecase[0].use_case_id);
            formData.append('template', _this.selectedTemplate.name);
            uploadArr.push(_this.useCaseService.postFileMultiPart(formData).then(function (res) {
                var result = {};
                result.template_name = _this.selectedTemplate.name;
                result.file_name = item.name;
                result.status = "Completed";
                if (res !== "Error") {
                    result.json = res;
                }
                else {
                    result.status = "Unable to fetch data";
                    result.json = '';
                }
                return result;
            }));
        });
        Promise.all(uploadArr).then(function (res) {
            console.log("All", res);
            _this.useCaseService.storeExtractedData(res);
            _this.route.navigate(['extract']);
        });
    };
    ExtractLandingComponent.prototype.extract = function () {
        var _this = this;
        this.isLoading = true;
        var promArray = [];
        var readProm = [];
        this.fileToUpload.map(function (item) {
            readProm.push(_this.readUploadedFileAsText(item).then(function (res) {
                var file = {};
                file.data = res;
                file.name = item.name;
                return file;
            }));
        });
        Promise.all(readProm).then(function (res) {
            res.map(function (item) {
                promArray.push(_this.useCaseService.postFile(item.data, item.name).then(function (res) {
                    console.log(res);
                    var result = {};
                    result.template_name = _this.selectedTemplate.name;
                    result.file_name = item.name;
                    result.status = "Completed";
                    if (res !== "Error") {
                        result.json = res;
                    }
                    else {
                        result.status = "Unable to fetch data";
                        result.json = '';
                    }
                    return result;
                }).catch(function (err) {
                    var result = {};
                    result.template_name = _this.selectedTemplate.name;
                    result.file_name = item.name;
                    result.status = "Unable to fetch data";
                    result.json = '';
                    return result;
                }));
            });
            Promise.all(promArray).then(function (res) {
                console.log("Final", res);
                console.log(res.length, readProm.length);
                _this.useCaseService.storeExtractedData(res);
                _this.route.navigate(['extract']);
            });
        });
    };
    ExtractLandingComponent.prototype.handleFileInput = function (e, i) {
        console.log(e, i);
        var files = e.target.files;
        this.fileToUpload[i] = files.item(0);
        console.log(this.fileToUpload);
    };
    ExtractLandingComponent.prototype.buildForm = function () {
        var fields = {};
        fields['file'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        this.uploadPDFsFormGroup = this.formBuilder.group(fields);
        this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']));
    };
    ExtractLandingComponent.prototype.addItem = function (name) {
        var absCtl = this.uploadPDFsFormGroup.controls[name];
        if (absCtl.length < 5) {
            var control = this.uploadPDFsFormGroup.controls[name];
            control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
        }
        else {
            alert("You cannot add more than 5 files");
        }
    };
    ExtractLandingComponent.prototype.removeItem = function (name, i) {
        var control = this.uploadPDFsFormGroup.controls['file'];
        control.removeAt(i);
    };
    ExtractLandingComponent.prototype.resetForm = function () {
        var fields = {};
        fields['file'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        this.uploadPDFsFormGroup = this.formBuilder.group(fields);
        this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']));
    };
    ExtractLandingComponent.prototype.close = function () {
        this.visibleForm = false;
        this.useCases.map(function (item) {
            item.selected = false;
        });
        this.selectedUsecase = [];
    };
    ExtractLandingComponent.prototype.getUsecases = function () {
        var _this = this;
        this.isLoading = true;
        this.useCaseService.fetchUsecases().then(function (data) {
            if (data) {
                console.log(data);
                var usecases = data;
                for (var property in data) {
                    console.log(property, data[property]);
                    _this.useCases.push(Object.assign(data[property], { use_case_id: property }, { selected: false }));
                }
            }
        }, function (error) {
        });
        this.isLoading = false;
    };
    ExtractLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extract-landing',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(100%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(100%)', opacity: 1 }))
                    ])
                ])
            ],
            template: __webpack_require__(/*! ./extract-landing.component.html */ "./src/app/components/extract-landing/extract-landing.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./extract-landing.component.scss */ "./src/app/components/extract-landing/extract-landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service_service__WEBPACK_IMPORTED_MODULE_2__["UsecaseService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _header_services_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"]])
    ], ExtractLandingComponent);
    return ExtractLandingComponent;
}());

// private useCases: any =[];
// private uploadPDFs:any;
// private uploadPDFsFormGroup:FormGroup;
// private fileToUpload: File[] = [];
// private uploadResponse = { status: '', message: '', filePath: '' };
// private error:any;
// private successMsg:string;
// private progress = 100;
// private visibleForm:boolean =true;
// private disableCtl: boolean = true;
// private templates:Object[]=[];
// private selectedTemplate:any
// private lastCtl:boolean = true;
// private promiseArray = [];
// private finalRes =  [];
// private selUsecaseName:string = "";
// private isLoading:boolean = false;
// private expand: boolean = false;
// private state:string = '';
// private selectedUsecase: any  =[];
// private isOpen = true;
// publicURL = environment.public;
// constructor(private useCaseService:UsecaseService, private formBuilder:FormBuilder, private route:Router) { }
// ngOnInit() {
//   this.getUsecases();
//   this.buildForm();
// }
// close(){
//   this.expand = !this.expand;
//   //this.visibleForm = false;
// }
// showForm(usecase){
//   usecase.selected = !usecase.selected;
//   this.isOpen = !this.isOpen;
//   this.selectedUsecase = Object.values(this.useCases).filter((value:any) => value.selected === true);
//   this.visibleForm = true; 
//   this.templates = [];
//   this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
//     data.templates.map((items) => {
//       this.templates.push(Object.assign(items, {selected: false}));
//     });
//   });
//   console.log("isOPne", this.isOpen)
//   if(!usecase.selected){
//    // this.visibleForm = false;
//   }
//   // this.state = 'done';
//   // this.useCases.map((item)=>{
//   //     item.selected = false;
//   // })
//   // this.resetForm();
//   // usecase.selected = true;
//   // this.selUsecaseName = usecase.name;
//   // this.disableCtl = true;
//   // this.templates = [];
//   // this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
//   //   data.templates.map((items) => {
//   //     this.templates.push(Object.assign(items, {selected: false}));
//   //   });
//   // });
//   // console.log(usecase)
//   // this.useCases = [];
//   //this.useCases[0] = usecase;
// }
// public selectTemplate(template) {
//   this.selectedTemplate = template;
//   this.disableCtl = false;
// }
// readUploadedFileAsText = (inputFile) => {
//   const temporaryFileReader = new FileReader();
//   return new Promise((resolve, reject) => {
//     temporaryFileReader.onerror = () => {
//       temporaryFileReader.abort();
//       reject(new DOMException("Problem parsing input file."));
//     };
//     temporaryFileReader.onload = () => {
//       resolve(temporaryFileReader.result);
//     };
//     temporaryFileReader.readAsDataURL(inputFile);
//   });
// };
// extractMulti(){
//   this.isLoading =  true;
//   let uploadArr = [];
//   this.fileToUpload.map((item:any)=>{
//     let formData = new FormData();
//     console.log("Item", item)
//     formData.append('fileKey', item, item.name);
//     formData.append('usecase', this.selectedUsecase[0].name);
//     formData.append('template',this.selectedTemplate.name)
//     uploadArr.push(this.useCaseService.postFileMultiPart(formData).then((res)=>{
//       let result:any = {};
//       result.template_name= this.selectedTemplate.name;
//       result.file_name = item.name;
//       result.status = `Completed`; 
//       if(res !== `Error`){
//         result.json = res;
//       }
//       else{
//         result.status = `Unable to fetch data`;
//         result.json = '';
//       }
//       return result;
//     }))
//   });
//   Promise.all(uploadArr).then((res)=>{
//     console.log("All",res)
//     this.useCaseService.storeExtractedData(res);
//     this.route.navigate(['extract'])
//   });
// }
// extract(){
//   this.isLoading =  true;
//   let promArray = [];
//   let readProm =[]
//   this.fileToUpload.map((item:any)=>{
//        readProm.push(this.readUploadedFileAsText(item).then((res:any)=>{
//           let file:any= {};
//           file.data = res;
//           file.name = item.name;
//           return file;
//        }));
//   });
//   Promise.all(readProm).then((res)=>{
//       res.map((item:any)=>{
//           promArray.push(this.useCaseService.postFile(item.data, item.name).then((res)=>{
//               console.log(res)
//               let result:any = {};
//               result.template_name= this.selectedTemplate.name;
//               result.file_name = item.name;
//               result.status = `Completed`; 
//               if(res !== `Error`){
//                 result.json = res;
//               }
//               else{
//                 result.status = `Unable to fetch data`;
//                 result.json = '';
//               }
//               return result;
//           }).catch((err)=>{
//               let result:any = {};
//               result.template_name= this.selectedTemplate.name;
//               result.file_name = item.name;
//               result.status = `Unable to fetch data`; 
//               result.json = '';
//               return result;
//           }))
//       });
//       Promise.all(promArray).then((res)=>{
//         console.log("Final", res)
//         console.log(res.length, readProm.length)
//         this.useCaseService.storeExtractedData(res);
//         this.route.navigate(['extract'])
//       })
//   });
// }
// handleFileInput(e, i) {
//   console.log(e, i)
//   let files = e.target.files;
//   this.fileToUpload[i] = files.item(0);
//   console.log(this.fileToUpload)
// }
// buildForm(){
//   const fields = {};
//   fields['file'] = new FormArray([]);
//   this.uploadPDFsFormGroup = this.formBuilder.group(fields);
//   this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
// }
// addItem(name:string): void {
//   let absCtl = <FormArray>this.uploadPDFsFormGroup.controls[name];
//   if(absCtl.length< 5){
//     const control = <FormArray>this.uploadPDFsFormGroup.controls[name];
//     control.push(new FormControl())
//   }
//   else{
//     alert("You cannot add more than 5 files")
//   }
// }
// removeItem(name:string,i:number){
//   const control = <FormArray>this.uploadPDFsFormGroup.controls['file'];
//   control.removeAt(i)
// }
// resetForm():void{
//   const fields = {};
//   fields['file'] = new FormArray([]);
//   this.uploadPDFsFormGroup = this.formBuilder.group(fields);
//   this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
// }
// private getUsecases() {
//   this.useCaseService.fetchUsecases().then((data) => {
//     if (data) {
//       let usecases = data[0]['usecases'];
//       usecases.map((item)=>{
//         this.useCases.push(Object.assign(item, {selected: false}));
//       })
//       console.log(this.useCases)
//     }
//   },
//   error => {
//   });
// }


/***/ }),

/***/ "./src/app/components/extract-landing/services/service.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/extract-landing/services/service.service.ts ***!
  \************************************************************************/
/*! exports provided: UsecaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsecaseService", function() { return UsecaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UsecaseService = /** @class */ (function () {
    function UsecaseService(httpClient) {
        this.httpClient = httpClient;
        this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndPoint;
        this.extractedData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.currentExtractedData = this.extractedData.asObservable();
    }
    UsecaseService.prototype.fetchUsecases = function () {
        return this.httpClient.get(this.endPoint + "/getUsecases").toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    UsecaseService.prototype.fetchTemplates = function (id) {
        return this.httpClient.get(this.endPoint + "/getTemplatesForExtract?use_case_id=" + id).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    UsecaseService.prototype.storeExtractedData = function (templates) {
        this.extractedData.next(templates);
    };
    UsecaseService.prototype.postFile = function (data, name) {
        return this.httpClient.post(this.endPoint + "/postPDF", { 'fileBase64': data, "fileName": name }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    UsecaseService.prototype.postFileMultiPart = function (formData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/x-www-form-urlencoded');
        return this.httpClient.post("http://localhost:5005/profile", formData, { headers: headers }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    UsecaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsecaseService);
    return UsecaseService;
}());



/***/ }),

/***/ "./src/app/components/extract/extract.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/extract/extract.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-progressBar *ngIf=\"isLoading === true\" mode=\"indeterminate\"></p-progressBar>\n<div class=\"container\">\n  <!-- <a routerLink=\"/home\">\n        <button class=\"btn btn-primary pull-left\" >Home</button>\n    </a> -->\n\n  <!-- <h2 class=\"text-primary\">Fetch Documents</h2> -->\n  <div *ngIf=\"errorMessage !== ''\" [@enterAnimation] class=\"alert alert-danger\" role=\"alert\">\n    {{errorMessage}}\n  </div>\n  <div class=\"sticky\">\n    <span *ngIf=\"isFetching\">Fetching documents. Please wait...</span>\n    <span *ngIf=\"!isFetching && processedFiles <= 0\">Fetched {{total}} file(s)</span>\n    <!-- <span *ngIf=\"processedFiles > 0\">Processed {{processedFiles}} of {{total}} file(s) in {{processingTime}} second(s)</span>\n    <span *ngIf=\"showExtract && !disableExtract\" style=\"color: #0F2244;margin-left: 20px;cursor: pointer;font-weight: bold;\"\n      (click)='extractJSON()'>{{extractText}}</span> -->\n  </div>\n\n  <!-- <div *ngIf=\"showExtract\">\n        <button [disabled]=\"disableExtract\" class=\"btn btn-primary\" style=\"background-color: white;color: blue;border: none;\" (click)='extractJSON()'>{{extractText}}</button>\n    </div> -->\n  <p-dialog [(visible)]=\"display\" [modal]=\"true\" [positionTop]=\"50\" [maximizable]=\"true\" [style]=\"{width: '100%', height: '88%'}\">\n    \n    <div class=\"content\" [style.min-height.px]=\"imageH+50\">\n      <div style=\"flex: 1\">\n        <div [style.height.px]=\"imageH\" class=\"left\">\n          <!-- <img src={{pdfSrc}} width=\"auto\" height=\"{{imageH}}\"/> -->\n          <pdf-viewer [style.height.px]=\"imageH\" style=\"display: block; overflow: scroll; width: 670px\" [original-size]=\"false\"\n            [src]=\"pdfSrc\" [render-text]=\"true\"></pdf-viewer>\n        </div>\n      </div>\n      <div style=\"flex: 1; overflow: auto;\">\n        <div [style.min-height.px]=\"imageH+4\" class=\"right\">\n          <div innerHTML={{jsonHTML}} style=\"overflow: scroll\" [style.max-height.px]=\"imageH\">\n          </div>\n        </div>\n      </div>\n    </div>\n   \n  </p-dialog>\n  <p-table cellpadding=\"0\" cellspacing=\"0\" [ngClass]=\"'borderless'\" [value]=\"docsArray\">\n    <ng-template cellpadding=\"0\" cellspacing=\"0\" pTemplate=\"header\">\n      <tr [ngClass]=\"'rowHeader'\">\n        <th [ngClass]=\"'client'\">Template Name</th>\n        <th [ngClass]=\"'name'\">Document Name</th>\n        <th [ngClass]=\"'status'\">Status</th>\n        <th [ngClass]=\"'rowsExtrated'\">Rows extracted</th>\n        <th [ngClass]=\"'resultcell'\">Result</th>\n      </tr>\n    </ng-template>\n    <ng-template cellpadding=\"0\" cellspacing=\"0\" pTemplate=\"body\" let-file>\n      <tr [ngClass]=\"'row'\">\n     \n        <td valign=\"center\" class=\"client\">{{file.template_name}}</td>\n        <td valign=\"center\" class=\"name\">\n          <a href=\"#\" (click)=\"openPDF($event, file.template_name,file.file_name)\">{{file.file_name}}</a>\n        </td>\n        <td valign=\"center\" class=\"status\" [class.loading]=\"file.status === 'In progress'\" [class.error]=\"file.status === 'Unable to fetch data'\">{{file.status}}</td>\n        <td valign=\"center\" class=\"status\"><div innerHTML='{{getRowCount(file.json)}}'></div></td>\n        <td valign=\"top\" class=\"resultcell\" [ngClass]=\"file.json === '' ? 'hide': 'show' \" (click)=\"open(file)\">\n          <div innerHTML='{{formatJSON(file.json, \"resultTable\")}}'></div>\n          <p-button class=\"plusButton\" icon=\"pi pi-plus\" (onClick)=\"open(file)\"></p-button>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n\n</div>"

/***/ }),

/***/ "./src/app/components/extract/extract.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/extract/extract.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  padding: 0; }\n  body .ui-dialog {\n    border: solid 1px #111;\n    width: 100%;\n    left: 0;\n    overflow: scroll;\n    max-height: 100%; }\n  body .ui-dialog .ui-dialog-content {\n      border: none;\n      padding: 0 25px;\n      overflow: scroll; }\n  body .ui-dialog .ui-dialog-content .content {\n        display: flex; }\n  body .ui-dialog .ui-dialog-content .content div.left {\n          background: white;\n          box-shadow: 10px 10px 22px -10px rgba(0, 0, 0, 0.75);\n          border-radius: 5px;\n          border: solid  1px #DADADA;\n          width: 98%;\n          box-sizing: border-box;\n          margin-right: 1.5%; }\n  body .ui-dialog .ui-dialog-content .content div.right {\n          background: white;\n          box-shadow: 10px 10px 22px -10px rgba(0, 0, 0, 0.75);\n          border-radius: 5px;\n          box-sizing: border-box;\n          width: 98%;\n          border: solid  1px #DADADA; }\n  body .ui-dialog .ui-dialog-titlebar {\n      background: #fff;\n      border: none; }\n  body .ui-widget-overlay {\n    background-color: #424242;\n    opacity: 0.7;\n    filter: alpha(opacity=70); }\n  [_nghost-c3] .pdfViewer.removePageBorders .page {\n  margin-bottom: 200px !important; }\n  .ui-dialog .ui-dialog-titlebar-icon span.pi-window-maximize {\n  display: none; }\n  .container {\n  max-width: 95%;\n  margin: 0 auto; }\n  .container div.sticky {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    padding: 5px;\n    z-index: 1;\n    background-color: #FFFFFF; }\n  .container h1 {\n    color: #FFF; }\n  .container .borderless {\n    border-style: none;\n    padding: 0; }\n  .container .hide {\n    opacity: 0; }\n  .container button {\n    margin-top: 20px; }\n  .container .show {\n    opacity: 1;\n    transition: opacity 0.8s;\n    -webkit-transition: opacity 0.8s; }\n  .container .ui-table {\n    margin-top: 0px;\n    border: solid 1px #d7d7d7;\n    color: #6a6a6a; }\n  .container .ui-table .ui-table-thead th {\n      background: #031326;\n      font-size: 14px;\n      color: #f79131;\n      padding: 5px;\n      border: none;\n      text-align: left; }\n  .container .ui-table .ui-table-thead th.client {\n        width: 15%; }\n  .container .ui-table .ui-table-thead th.name {\n        width: 15%; }\n  .container .ui-table .ui-table-thead th.status {\n        width: 15%; }\n  .container .ui-table .ui-table-thead th.resultcell {\n        width: 45%; }\n  .container .ui-table .ui-table-tbody > tr:nth-child(even) {\n      background: #FFFFFF; }\n  .container .ui-table .ui-table-tbody tr {\n      display: table-row;\n      color: #555555; }\n  .container .ui-table .ui-table-tbody tr a {\n        color: #ff932a;\n        text-decoration: underline; }\n  .container .ui-table .ui-table-tbody tr:not(:first-child):hover {\n        background: #fafafa; }\n  .container .ui-table .ui-table-tbody > tr > td {\n      word-break: break-word;\n      padding: 10px;\n      border: none;\n      border-bottom: solid 1px #d7d7d7;\n      text-align: left;\n      font-size: 12px; }\n  .container .ui-table .ui-table-tbody > tr > td.client {\n        width: 15%; }\n  .container .ui-table .ui-table-tbody > tr > td.name {\n        width: 15%; }\n  .container .ui-table .ui-table-tbody > tr > td.loading:after {\n        content: '.';\n        -webkit-animation: dots 2s steps(2, end) infinite;\n                animation: dots 2s steps(2, end) infinite; }\n  .container .ui-table .ui-table-tbody > tr > td.resultcell {\n        width: 55%;\n        position: relative; }\n  .container .ui-table .ui-table-tbody > tr > td.resultcell:hover {\n          cursor: pointer; }\n  .container .ui-table .ui-table-tbody > tr > td.resultcell .plusButton {\n          position: absolute;\n          top: 3px;\n          left: -5px; }\n  .container .ui-table .ui-table-tbody > tr > td.resultcell .plusButton button {\n            margin-top: 0; }\n  .container .ui-table .ui-table-tbody > tr > td.resultcell .plusButton .ui-button {\n            font-size: 8px;\n            background-color: rgba(0, 0, 0, 0.6);\n            border: none; }\n  .container .ui-table .ui-table-tbody > tr > td.resultcell .plusButton .ui-button.ui-corner-all {\n              border-radius: 50%;\n              border: 50%; }\n  .container .ui-table .ui-table-tbody > tr > td.hide {\n        opacity: 0; }\n  .container .ui-table .ui-table-tbody > tr > td.show {\n        opacity: 1;\n        transition: opacity 0.8s;\n        -webkit-transition: opacity 0.8s; }\n  .container .ui-table .ui-table-tbody > tr > td.status {\n        width: 15%; }\n  .container .ui-table .ui-table-tbody > tr > td.status.error {\n          color: red; }\n  @-webkit-keyframes dots {\n  0%, 20% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  40% {\n    color: #111;\n    text-shadow: 0.25em 0 0 rgba(1, 1, 1, 0), 0.5em 0 0 rgba(1, 1, 1, 0); }\n  60% {\n    text-shadow: 0.25em 0 0 #111, 0.5em 0 0 rgba(1, 1, 1, 0); }\n  80%, 100% {\n    text-shadow: .25em 0 0 #111, .5em 0 0 #111; } }\n  @keyframes dots {\n  0%, 20% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  40% {\n    color: #111;\n    text-shadow: 0.25em 0 0 rgba(1, 1, 1, 0), 0.5em 0 0 rgba(1, 1, 1, 0); }\n  60% {\n    text-shadow: 0.25em 0 0 #111, 0.5em 0 0 rgba(1, 1, 1, 0); }\n  80%, 100% {\n    text-shadow: .25em 0 0 #111, .5em 0 0 #111; } }\n  .container .rowcount {\n    position: absolute;\n    top: 10px;\n    left: 35%;\n    font-size: 14px; }\n  .container .resultTable {\n    width: 100%;\n    font-size: 10px; }\n  .container .resultTable th {\n      padding: 5px;\n      border: solid 1px #d7d7d7; }\n  .container .resultTable td {\n      padding: 5px;\n      border: solid 1px #d7d7d7;\n      height: auto;\n      max-width: 10%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .container .jsonTable {\n    max-width: 98%;\n    overflow: scroll;\n    word-wrap: break-word;\n    box-sizing: border-box;\n    border: solid 1px #d7d7d7;\n    margin: 10px auto 0 auto;\n    border-collapse: collapse; }\n  .container .jsonTable th {\n      font-size: 11px;\n      text-align: left;\n      padding: 10px 5px;\n      border: solid 1px #d7d7d7; }\n  .container .jsonTable td {\n      border: solid 1px #d7d7d7;\n      padding: 5px;\n      font-size: 10px;\n      color: #031326;\n      text-align: left;\n      word-wrap: break-word; }\n  .container .jsonTable td .subTable {\n        margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2V4dHJhY3QvZXh0cmFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHRyYWN0L2V4dHJhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTO0VBQ1QsV0FBVSxFQXlDYjtFQTNDRDtJQUlRLHVCQUFzQjtJQUN0QixZQUFXO0lBQ1gsUUFBTztJQUNQLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUE2Qm5CO0VBckNMO01BVVksYUFBWTtNQUNaLGdCQUFlO01BQ2YsaUJBQWdCLEVBb0JuQjtFQWhDVDtRQWNnQixjQUFhLEVBZWhCO0VBN0JiO1VBaUJ3QixrQkFBaUI7VUFFakIscURBQWlEO1VBQUcsbUJBQWtCO1VBQ3RFLDJCQUEwQjtVQUFHLFdBQVU7VUFBRSx1QkFBc0I7VUFBRSxtQkFDckUsRUFBQztFQXJCckI7VUF1QndCLGtCQUFpQjtVQUVqQixxREFBaUQ7VUFBRyxtQkFBa0I7VUFDdEUsdUJBQXNCO1VBQUUsV0FBVTtVQUFFLDJCQUEwQixFQUNqRTtFQTNCckI7TUFrQ1ksaUJBQWdCO01BQ2hCLGFBQVksRUFDZjtFQXBDVDtJQXVDUSwwQkFBeUI7SUFDekIsYUFBWTtJQUNaLDBCQUF5QixFQUM1QjtFQ0FMO0VER0ksZ0NBQStCLEVBQ2xDO0VBQ0Q7RUFDSSxjQUFhLEVBQ2hCO0VBRUE7RUFDRyxlQUFjO0VBQ2QsZUFBYyxFQTZNakI7RUEvTUE7SUFJSyx5QkFBd0I7SUFDeEIsaUJBQWdCO0lBQ2hCLFNBQVE7SUFDUixhQUFZO0lBQ1osV0FBVTtJQUNWLDBCQUF3QixFQUN6QjtFQVZKO0lBWU8sWUFBVyxFQUNkO0VBYko7SUFlTyxtQkFBa0I7SUFDbEIsV0FBVSxFQUNiO0VBakJKO0lBbUJPLFdBQVUsRUFDYjtFQXBCSjtJQXNCTyxpQkFBZ0IsRUFDbkI7RUF2Qko7SUF5Qk8sV0FBVTtJQUNWLHlCQUF3QjtJQUN4QixpQ0FBZ0MsRUFDbkM7RUE1Qko7SUE4Qk8sZ0JBQWU7SUFDZiwwQkFBeUI7SUFDekIsZUFBYyxFQTRIakI7RUE1Sko7TUFtQ1csb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsZUFBYztNQUNkLGFBQVk7TUFDWixhQUFZO01BQ1osaUJBQWdCLEVBY25CO0VBdERSO1FBMENlLFdBQ0osRUFBQztFQTNDWjtRQTZDZSxXQUNKLEVBQUM7RUE5Q1o7UUFnRGUsV0FDSixFQUFDO0VBakRaO1FBbURlLFdBQVUsRUFFYjtFQXJEWjtNQXdEVyxvQkFBbUIsRUFDdEI7RUF6RFI7TUE0RGUsbUJBQWtCO01BQ2xCLGVBQWMsRUFRZjtFQXJFZDtRQStEbUIsZUFBYztRQUNkLDJCQUEwQixFQUM3QjtFQWpFaEI7UUFtRW1CLG9CQUFtQixFQUN0QjtFQXBFaEI7TUF5RVcsdUJBQXNCO01BRXRCLGNBQWE7TUFDYixhQUFZO01BQ1osaUNBQWdDO01BQ2hDLGlCQUFnQjtNQUNoQixnQkFBZSxFQXFEbEI7RUFwSVI7UUFpRmUsV0FDSixFQUFDO0VBbEZaO1FBb0ZlLFdBQVUsRUFDYjtFQXJGWjtRQXdGZSxhQUFZO1FBQ1osa0RBQXlDO2dCQUF6QywwQ0FBeUMsRUFDNUM7RUExRlo7UUE2RmUsV0FBVTtRQUNWLG1CQUFrQixFQXFCckI7RUFuSFo7VUFnR21CLGdCQUFlLEVBQ2xCO0VBakdoQjtVQW1HbUIsbUJBQWtCO1VBQ2xCLFNBQVE7VUFDUixXQUFVLEVBYWI7RUFsSGhCO1lBdUd1QixjQUFhLEVBQ2hCO0VBeEdwQjtZQTBHdUIsZUFBYztZQUNkLHFDQUFpQztZQUNqQyxhQUFZLEVBS2Y7RUFqSHBCO2NBOEcyQixtQkFBa0I7Y0FDbEIsWUFBVyxFQUNkO0VBaEh4QjtRQXFIZSxXQUFVLEVBQ2I7RUF0SFo7UUF5SGUsV0FBVTtRQUNWLHlCQUF3QjtRQUN4QixpQ0FBZ0MsRUFDbkM7RUE1SFo7UUE4SGUsV0FBVSxFQUliO0VBbElaO1VBZ0ltQixXQUFVLEVBQ2I7RUFNVDtFQUNJO0lBQ0Usd0JBQW9CO0lBQ3BCLHFFQUV3QixFQUFBO0VBQzFCO0lBQ0UsWUFBVztJQUNYLHFFQUV3QixFQUFBO0VBQzFCO0lBQ0UseURBRXdCLEVBQUE7RUFDMUI7SUFDRSwyQ0FFZSxFQUFBLEVBQUE7RUFsQnJCO0VBQ0k7SUFDRSx3QkFBb0I7SUFDcEIscUVBRXdCLEVBQUE7RUFDMUI7SUFDRSxZQUFXO0lBQ1gscUVBRXdCLEVBQUE7RUFDMUI7SUFDRSx5REFFd0IsRUFBQTtFQUMxQjtJQUNFLDJDQUVlLEVBQUEsRUFBQTtFQXpKNUI7SUE4Sk8sbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxVQUFTO0lBQ1QsZ0JBQWUsRUFDbEI7RUFsS0o7SUFvS08sWUFBVztJQUNYLGdCQUFlLEVBY2xCO0VBbkxKO01BdUtXLGFBQVk7TUFDWiwwQkFBeUIsRUFDNUI7RUF6S1I7TUEyS1csYUFBWTtNQUNaLDBCQUF5QjtNQUN6QixhQUFZO01BQ1osZUFBYztNQUNkLGlCQUFnQjtNQUNoQix3QkFBdUI7TUFDdkIsb0JBQW1CLEVBQ3RCO0VBbExSO0lBcUxPLGVBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLHVCQUFzQjtJQUN0QiwwQkFBeUI7SUFDekIseUJBQXdCO0lBQ3hCLDBCQUF5QixFQW1CNUI7RUE5TUo7TUE2TFcsZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsa0JBQWlCO01BQ2pCLDBCQUF5QixFQUM1QjtFQWpNUjtNQW1NVywwQkFBeUI7TUFDekIsYUFBWTtNQUNaLGdCQUFlO01BQ2YsZUFBYztNQUNkLGlCQUFnQjtNQUNoQixzQkFBcUIsRUFJeEI7RUE1TVI7UUEwTWUsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHRyYWN0L2V4dHJhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC51aS1kaWFsb2d7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMxMTE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAudWktZGlhbG9nLWNvbnRlbnR7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICYubGVmdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjJweCAtMTBweCByZ2JhKDAsMCwwLDAuNzUpOyAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIDFweCAjREFEQURBOyAgd2lkdGg6IDk4JTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luLXJpZ2h0OiAxLjUlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjJweCAtMTBweCByZ2JhKDAsMCwwLDAuNzUpOyAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHdpZHRoOiA5OCU7IGJvcmRlcjogc29saWQgIDFweCAjREFEQURBO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudWktZGlhbG9nLXRpdGxlYmFye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudWktd2lkZ2V0LW92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gICAgfSBcbn1cbltfbmdob3N0LWMzXSAucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdle1xuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXItaWNvbiBzcGFuLnBpLXdpbmRvdy1tYXhpbWl6ZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4gLmNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXYuc3RpY2t5IHtcbiAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgLmJvcmRlcmxlc3N7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmhpZGV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLnNob3d7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG4gICAgfVxuICAgIC51aS10YWJsZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZDdkN2Q3O1xuICAgICAgICBjb2xvcjogIzZhNmE2YTtcbiAgIFxuICAgICAgICAudWktdGFibGUtdGhlYWQgdGh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDMxMzI2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmNzkxMzE7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgJi5jbGllbnR7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICAxNSVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubmFtZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnN0YXR1c3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnJlc3VsdGNlbGx7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudWktdGFibGUtdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbil7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICB9XG4gICAgICAgIC51aS10YWJsZS10Ym9keXtcbiAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTU1NTtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmOTMyYTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRke1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDdkN2Q3O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICYuY2xpZW50e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubmFtZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmxvYWRpbmc6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcuJztcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGRvdHMgMnMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5yZXN1bHRjZWxse1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBsdXNCdXR0b257XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnVpLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICYudWktY29ybmVyLWFsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmhpZGV7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5zdGF0dXN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICAgICAgICAmLmVycm9ye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGRvdHMge1xuICAgICAgICAgICAgMCUsIDIwJSB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzpcbiAgICAgICAgICAgICAgICAuMjVlbSAwIDAgcmdiYSgwLDAsMCwwKSxcbiAgICAgICAgICAgICAgICAuNWVtIDAgMCByZ2JhKDAsMCwwLDApO31cbiAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzpcbiAgICAgICAgICAgICAgICAuMjVlbSAwIDAgcmdiYSgxLDEsMSwwKSxcbiAgICAgICAgICAgICAgICAuNWVtIDAgMCByZ2JhKDEsMSwxLDApO31cbiAgICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OlxuICAgICAgICAgICAgICAgIC4yNWVtIDAgMCAjMTExLFxuICAgICAgICAgICAgICAgIC41ZW0gMCAwIHJnYmEoMSwxLDEsMCk7fVxuICAgICAgICAgICAgODAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6XG4gICAgICAgICAgICAgICAgLjI1ZW0gMCAwICMxMTEsXG4gICAgICAgICAgICAgICAgLjVlbSAwIDAgIzExMTt9fVxuICAgICAgICAgIFxuICAgICAgIFxuICAgIH1cbiAgICAucm93Y291bnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBsZWZ0OiAzNSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnJlc3VsdFRhYmxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB0aHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZDdkN2Q3O1xuICAgICAgICB9XG4gICAgICAgIHRke1xuICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q3ZDc7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmpzb25UYWJsZXtcbiAgICAgICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q3ZDdkNztcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICB0aHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q3ZDc7XG4gICAgICAgIH1cbiAgICAgICAgdGR7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZDdkN2Q3O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMzEzMjY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgLnN1YlRhYmxle1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuICBib2R5IC51aS1kaWFsb2cge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMxMTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7IH1cbiAgICBib2R5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cbiAgICAgIGJvZHkgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgICAgIGJvZHkgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgLmNvbnRlbnQgZGl2LmxlZnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIycHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIycHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAgMXB4ICNEQURBREE7XG4gICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41JTsgfVxuICAgICAgICBib2R5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IC5jb250ZW50IGRpdi5yaWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjJweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIycHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjJweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAgMXB4ICNEQURBREE7IH1cbiAgICBib2R5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gIGJvZHkgLnVpLXdpZGdldC1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApOyB9XG5cbltfbmdob3N0LWMzXSAucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHggIWltcG9ydGFudDsgfVxuXG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXItaWNvbiBzcGFuLnBpLXdpbmRvdy1tYXhpbWl6ZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAuY29udGFpbmVyIGRpdi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cbiAgLmNvbnRhaW5lciBoMSB7XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgLmNvbnRhaW5lciAuYm9yZGVybGVzcyB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgLmNvbnRhaW5lciAuaGlkZSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAuY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxuICAuY29udGFpbmVyIC5zaG93IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC44czsgfVxuICAuY29udGFpbmVyIC51aS10YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q3ZDc7XG4gICAgY29sb3I6ICM2YTZhNmE7IH1cbiAgICAuY29udGFpbmVyIC51aS10YWJsZSAudWktdGFibGUtdGhlYWQgdGgge1xuICAgICAgYmFja2dyb3VuZDogIzAzMTMyNjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjZjc5MTMxO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRoZWFkIHRoLmNsaWVudCB7XG4gICAgICAgIHdpZHRoOiAxNSU7IH1cbiAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10aGVhZCB0aC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDE1JTsgfVxuICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRoZWFkIHRoLnN0YXR1cyB7XG4gICAgICAgIHdpZHRoOiAxNSU7IH1cbiAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10aGVhZCB0aC5yZXN1bHRjZWxsIHtcbiAgICAgICAgd2lkdGg6IDQ1JTsgfVxuICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGOyB9XG4gICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5IHRyIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgIGNvbG9yOiAjNTU1NTU1OyB9XG4gICAgICAuY29udGFpbmVyIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgdHIgYSB7XG4gICAgICAgIGNvbG9yOiAjZmY5MzJhO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5IHRyOm5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTsgfVxuICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q3ZDdkNztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDEycHg7IH1cbiAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQuY2xpZW50IHtcbiAgICAgICAgd2lkdGg6IDE1JTsgfVxuICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDE1JTsgfVxuICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZC5sb2FkaW5nOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJy4nO1xuICAgICAgICBhbmltYXRpb246IGRvdHMgMnMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTsgfVxuICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZC5yZXN1bHRjZWxsIHtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQucmVzdWx0Y2VsbDpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQucmVzdWx0Y2VsbCAucGx1c0J1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGxlZnQ6IC01cHg7IH1cbiAgICAgICAgICAuY29udGFpbmVyIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkLnJlc3VsdGNlbGwgLnBsdXNCdXR0b24gYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAgICAgICAuY29udGFpbmVyIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkLnJlc3VsdGNlbGwgLnBsdXNCdXR0b24gLnVpLWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZC5yZXN1bHRjZWxsIC5wbHVzQnV0dG9uIC51aS1idXR0b24udWktY29ybmVyLWFsbCB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiA1MCU7IH1cbiAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQuaGlkZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQuc2hvdyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7IH1cbiAgICAgIC5jb250YWluZXIgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQuc3RhdHVzIHtcbiAgICAgICAgd2lkdGg6IDE1JTsgfVxuICAgICAgICAuY29udGFpbmVyIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkLnN0YXR1cy5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDsgfVxuXG5Aa2V5ZnJhbWVzIGRvdHMge1xuICAwJSwgMjAlIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB0ZXh0LXNoYWRvdzogMC4yNWVtIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwLjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKTsgfVxuICA0MCUge1xuICAgIGNvbG9yOiAjMTExO1xuICAgIHRleHQtc2hhZG93OiAwLjI1ZW0gMCAwIHJnYmEoMSwgMSwgMSwgMCksIDAuNWVtIDAgMCByZ2JhKDEsIDEsIDEsIDApOyB9XG4gIDYwJSB7XG4gICAgdGV4dC1zaGFkb3c6IDAuMjVlbSAwIDAgIzExMSwgMC41ZW0gMCAwIHJnYmEoMSwgMSwgMSwgMCk7IH1cbiAgODAlLCAxMDAlIHtcbiAgICB0ZXh0LXNoYWRvdzogLjI1ZW0gMCAwICMxMTEsIC41ZW0gMCAwICMxMTE7IH0gfVxuICAuY29udGFpbmVyIC5yb3djb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAzNSU7XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5jb250YWluZXIgLnJlc3VsdFRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwcHg7IH1cbiAgICAuY29udGFpbmVyIC5yZXN1bHRUYWJsZSB0aCB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjZDdkN2Q3OyB9XG4gICAgLmNvbnRhaW5lciAucmVzdWx0VGFibGUgdGQge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q3ZDdkNztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC13aWR0aDogMTAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuY29udGFpbmVyIC5qc29uVGFibGUge1xuICAgIG1heC13aWR0aDogOTglO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q3ZDdkNztcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuICAgIC5jb250YWluZXIgLmpzb25UYWJsZSB0aCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjZDdkN2Q3OyB9XG4gICAgLmNvbnRhaW5lciAuanNvblRhYmxlIHRkIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q3ZDc7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogIzAzMTMyNjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cbiAgICAgIC5jb250YWluZXIgLmpzb25UYWJsZSB0ZCAuc3ViVGFibGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/extract/extract.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/extract/extract.component.ts ***!
  \*********************************************************/
/*! exports provided: ExtractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractComponent", function() { return ExtractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _extract_services_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extract/services/templates.service */ "./src/app/components/extract/services/templates.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/services/home.service */ "./src/app/components/home/services/home.service.ts");
/* harmony import */ var _extract_landing_services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extract-landing/services/service.service */ "./src/app/components/extract-landing/services/service.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");








var ExtractComponent = /** @class */ (function () {
    function ExtractComponent(apiService, router, homeSer, useCaseSer) {
        this.apiService = apiService;
        this.router = router;
        this.homeSer = homeSer;
        this.useCaseSer = useCaseSer;
        this.docsArray = [];
        this.isLoading = false;
        this.display = false;
        this.showExtract = false;
        this.isFetching = true;
        this.processedFiles = 0;
        this.total = 0;
        this.selectedTemplates = [];
        this.processingTime = 0;
        this.stopClock = false;
        this.jsonHTML = '';
        this.show = 'hide';
        this.extractText = "Extract";
        this.disableExtract = false;
        this.imageH = 0;
        this.errorMessage = '';
    }
    ExtractComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Extract");
        this.useCaseSer.currentExtractedData.subscribe(function (res) {
            console.log(res);
            _this.docsArray = res;
        });
        var pArr = [];
        var failedPromises = [];
        this.isLoading = true;
        this.selectedTemplates.map(function (item) {
            console.log(item.name);
            pArr.push(_this.apiService.fetchFiles(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].usecaseId, item.name).then(function (res) {
                res.map(function (items) {
                    _this.docsArray.push(Object.assign(items, { status: "Not started" }, { rows: 0 }, { json: '' }, { pdfLink: items.name }));
                });
            }).catch(function (err) {
                failedPromises.push(err);
            }));
        });
        Promise.all(pArr).then(function () {
            var serverErr = failedPromises.filter(function (item) {
                return item.status >= 400 || item.status <= 500;
            });
            if (serverErr.length > 0) {
                _this.errorMessage = "Unable to fetch documents. Please try again later...";
            }
            else {
                if (failedPromises.length !== 0) {
                    var templateNames_1 = '';
                    failedPromises.map(function (err) {
                        templateNames_1 += "" + err.message;
                    });
                    _this.errorMessage = "Documents matching templates - " + templateNames_1 + " cannot be retrieved";
                }
            }
        }).catch(function () {
            _this.errorMessage = "Unable to fetch documents matching certain templates(s). Please try again later";
        }).finally(function () {
            _this.total = _this.docsArray.length;
            _this.showExtract = true;
            _this.isFetching = false;
            _this.isLoading = false;
        });
    };
    ExtractComponent.prototype.openPDF = function ($event, templateName, itemName) {
        var _this = this;
        $event.preventDefault();
        this.isLoading = true;
        this.apiService.fetchPDF(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].usecaseId, templateName, itemName).then(function (res) {
            var fileURL = URL.createObjectURL(res);
            window.open(fileURL, '_blank');
            // var a = document.createElement("a");
            // document.body.appendChild(a);
            // a.href = fileURL;
            // a.target = '_blank';
            // a.click();
        }).catch(function () {
            _this.errorMessage = "Cannot fetch the PDF - " + itemName;
        }).finally(function () {
            _this.isLoading = false;
        });
    };
    ExtractComponent.prototype.extractJSON = function () {
        var _this = this;
        this.isLoading = true;
        var timerId = setInterval(function () {
            if (!_this.stopClock) {
                _this.processingTime += 1;
            }
            else {
                clearInterval(timerId);
            }
        }, 1000);
        this.total = this.docsArray.length;
        this.extractText = "Extracting...";
        this.disableExtract = true;
        var extractArr = [];
        this.docsArray.map(function (item, index) {
            item.status = "In progress";
            extractArr.push(_this.apiService.extractJSON(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].usecaseId, item.template_name, item.file_name).then(function (res) {
                item.status = "Completed";
                item.json = res;
                _this.show = 'show';
                _this.processedFiles++;
            }).catch(function (err) {
                item.status = "Unable to fetch data";
                _this.extractText = "Extract";
                _this.disableExtract = true;
            }));
        });
        Promise.all(extractArr).then(function () {
            _this.stopClock = true;
            _this.extractText = "Extract";
            _this.disableExtract = true;
        }).catch(function (err) {
            console.log(err);
        }).finally(function () {
            _this.isLoading = false;
        });
        ;
    };
    ExtractComponent.prototype.getRowCount = function (json) {
        var rowLength = 0;
        var isScalar = true;
        var len = Object.keys(json).length;
        var index = 0;
        for (var key in json) {
            if (typeof json[key] !== "string") {
                isScalar = false;
                if (json[key].length > 0) {
                    rowLength = json[key].length;
                }
                else {
                    rowLength = 1;
                }
            }
            index++;
            if (index === len) {
                if (isScalar) {
                    rowLength = 1;
                }
            }
        }
        return rowLength;
    };
    ExtractComponent.prototype.formatJSON = function (json, className) {
        var htmlTable = "<table class='" + className + "' cellpadding='0' cellspacing='0'>";
        var rowLength = 1; //(className === 'resultTable'? 1 : 1);
        var colcount = 1;
        htmlTable += "<tr bgcolor='#D3D3D3'>";
        for (var key in json) {
            if (colcount > 5 && className == 'resultTable') {
                break;
            }
            htmlTable += "<th>" + key + "</th>";
            if (typeof json[key] !== "string") {
                if (json[key].length > 0) {
                    rowLength = json[key].length;
                }
            }
            colcount++;
        }
        htmlTable += "</tr>";
        colcount = 1;
        for (var i = 0; i < rowLength; i++) {
            htmlTable += "<tr>";
            for (var key in json) {
                if ((colcount > 5 && className === 'resultTable') || (Object.keys(json).length + 1 === colcount && className === 'resultTable')) {
                    break;
                }
                else {
                    if (typeof json[key] == "string") {
                        htmlTable += "<td width=\"10%\">" + json[key] + "</td>";
                    }
                    else {
                        if (json[key][i] === undefined) {
                            htmlTable += "<td width=\"10%\">NAN</td>";
                        }
                        else {
                            htmlTable += "<td width=\"10%\">" + json[key][i] + "</td>";
                        }
                    }
                }
                colcount++;
            }
            htmlTable += "</tr>";
        }
        htmlTable += '</table>';
        return htmlTable;
    };
    ExtractComponent.prototype.open = function (doc) {
        var _this = this;
        this.imageH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100;
        this.isLoading = true;
        if (doc.json !== "") {
            this.pdfSrc = "";
            this.jsonHTML = this.formatJSON(doc.json, "jsonTable");
            this.apiService.fetchPDF(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].usecaseId, doc.template_name, doc.file_name).then(function (res) {
                var fileURL = URL.createObjectURL(res);
                _this.pdfSrc = fileURL;
            }).finally(function () {
                _this.display = true;
                _this.isLoading = false;
            });
        }
    };
    ExtractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extract',
            template: __webpack_require__(/*! ./extract.component.html */ "./src/app/components/extract/extract.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./extract.component.scss */ "./src/app/components/extract/extract.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_extract_services_templates_service__WEBPACK_IMPORTED_MODULE_2__["TemplatesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _home_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"], _extract_landing_services_service_service__WEBPACK_IMPORTED_MODULE_5__["UsecaseService"]])
    ], ExtractComponent);
    return ExtractComponent;
}());



/***/ }),

/***/ "./src/app/components/extract/services/templates.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/extract/services/templates.service.ts ***!
  \******************************************************************/
/*! exports provided: TemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesService", function() { return TemplatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var TemplatesService = /** @class */ (function () {
    function TemplatesService(httpClient) {
        this.httpClient = httpClient;
        this.apiEndPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndPoint;
    }
    TemplatesService.prototype.fetchTemplates = function () {
        return this.httpClient.get(this.apiEndPoint + "/templates");
    };
    TemplatesService.prototype.fetchFiles = function (usecaseId, templateName) {
        var params = { 'use_case_id': usecaseId, 'template_name': templateName };
        return this.httpClient.get(this.apiEndPoint + "/getTemplates", { params: params }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { console.log(data); return data; });
    };
    TemplatesService.prototype.extractJSON = function (usecaseId, templateName, pdfName) {
        var params = { 'use_case_id': usecaseId, 'template_name': templateName, 'pdf_name': pdfName };
        return this.httpClient.get(this.apiEndPoint + "/extractData", { params: params }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    TemplatesService.prototype.fetchPDF = function (usecaseId, templateName, pdfName) {
        var params = { "use_case_id": usecaseId, 'template_name': templateName, 'pdf_name': pdfName };
        return this.httpClient.get(this.apiEndPoint + "/getPdf", { params: params, responseType: "blob" }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    TemplatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TemplatesService);
    return TemplatesService;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark\">\n  <div class=\"navbar-nav mx-auto\">\n    <span>©Copyright Wissen.All rights Reserved</span>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  color: #FFFFFF;\n  background-color: #707070;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark\">\n  <div class=\"navbar-nav mx-right\" style=\"padding-left: 40px;\">\n    <img src=\"../../../assets/images/logo.jpg\">\n  </div>\n  <div class=\"navbar-nav mx-auto\">\n    <!-- <h4>{{title}}</h4> -->\n  </div>\n  <div class=\"navbar-nav mx-left\" style=\"padding-right: 40px;\">\n    <a *ngIf=\"displayUsecasePageLink\" class=\"nav-link\" (click)=\"navigate('train-landing')\">Train</a>\n    <a *ngIf=\"displayUsecasePageLink\" class=\"nav-link\" (click)=\"navigate('extract-landing')\">Extract</a>\n    <a class=\"nav-link\" (click)=\"navigateToHome()\"><i class=\"fas fa-home\"></i></a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  color: #FFFFFF;\n  background-color: #0F2244;\n  height: 50px;\n  margin-bottom: 10px; }\n  .navbar img {\n    height: 40px;\n    width: 160px; }\n  .navbar a:not(:last-child) {\n    color: #FFFFFF; }\n  .navbar a:not(:last-child):hover {\n      color: #707070; }\n  .navbar a {\n    cursor: pointer; }\n  .navbar a i {\n      font-size: 24px;\n      color: #FFFFFF; }\n  .navbar a i:hover {\n        color: #707070; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixvQkFBbUIsRUFxQnBCO0VBekJEO0lBTUksYUFBWTtJQUNaLGFBQVksRUFDYjtFQVJIO0lBVUksZUFBYyxFQUlmO0VBZEg7TUFZTSxlQUFjLEVBQ2Y7RUFiTDtJQWdCSSxnQkFBZSxFQVFoQjtFQXhCSDtNQWtCTSxnQkFBYztNQUNkLGVBQWMsRUFJZjtFQXZCTDtRQXFCUSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjIyNDQ7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICB9XG4gIGE6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB9XG4gIH1cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGkge1xuICAgICAgZm9udC1zaXplOjI0cHg7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/header.service */ "./src/app/components/header/services/header.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, headerService) {
        this.router = router;
        this.headerService = headerService;
        this.displayUsecasePageLink = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.navigatedUrl.subscribe(function (res) {
            console.log(res);
            if (res !== '/home') {
                _this.displayUsecasePageLink = true;
            }
            else {
                _this.displayUsecasePageLink = false;
            }
        });
    };
    HeaderComponent.prototype.navigateToHome = function () {
        this.router.navigate(['home']);
    };
    HeaderComponent.prototype.navigate = function (path) {
        this.router.navigate([path]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/services/header.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header/services/header.service.ts ***!
  \**************************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.navigatedUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    HeaderService.prototype.storeCurrentNavigatedUrl = function (url) {
        this.navigatedUrl.next(url);
    };
    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-progressBar *ngIf=\"isLoading === true\" mode=\"indeterminate\"></p-progressBar> -->\n<h3 style=\"font-size: 48px;\">\n  Document Data Extractor\n</h3>\n<!-- <div *ngIf=\"errorMessage != ''\" class=\"alert alert-danger\" role=\"alert\">\n    {{errorMessage}}\n</div> -->\n<div class=\"navigation\">\n  \n  <div>\n    <p-button  class=\"trainButton\" label=\"Train\" (click)=\"navigate('train-landing')\"></p-button>\n  </div>\n  <div>\n      <p-button class=\"extractButton\" label=\"Extract\" (click)=\"navigate('extract-landing')\"></p-button>\n  </div>\n</div>\n<!-- <div class=\"p-grid\">\n  <ng-container *ngFor=\"let template of templates\">\n    <p-card [style]=\"{width: '200px'}\" class=\"p-sm-6 p-md-4 p-lg-3 p-xl-2\" [ngClass]=\"{'selected': template.selected}\" (click)=\"selectTemplate(template)\">\n      <p-button class=\"plusButton\" icon=\"pi pi-plus\" (onClick)=\"showTemplatePreview(template)\"></p-button>\n      <img src=\"Card\" src=\"{{publicURL}}{{template.image}}\" pTooltip=\"{{template.Desc}}\" tooltipPosition=\"top\">\n      <h6>{{template.name}}</h6>\n    </p-card>\n  </ng-container>\n</div>\n<ng-container *ngIf=\"templates.length\">\n  <p-checkbox [(ngModel)]=\"isAllTemplateSelected\" label=\"Select All\" binary=\"true\" (onChange)=\"checkAllTemplateSelectedOrNot()\"></p-checkbox>\n  <p-button class=\"extractButton\" label=\"Extract\" (click)=\"navigate('extract')\"></p-button>\n  <p-button class=\"trainButton\" label=\"Train\" pTooltip=\"{{(selectedTemplates.length === 1) ? '' : 'Please select only one template'}}\" [disabled]=\"!(selectedTemplates.length === 1)\" (click)=\"navigate('train')\"></p-button>\n</ng-container>\n<app-modal></app-modal> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body h3 {\n  color: #0F2244;\n  padding: 20px;\n  margin-bottom: 50px; }\n\nbody .ui-dialog {\n  width: 80%; }\n\nbody .ui-dialog .ui-dialog-titlebar {\n    border: none;\n    background: #FFFFFF; }\n\nbody .ui-dialog .ui-dialog-content {\n    border: none; }\n\n.p-grid {\n  margin: 20px; }\n\n.p-grid p-card {\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: relative;\n    text-align: center;\n    margin-bottom: 60px; }\n\n.p-grid p-card .ui-card {\n      background: #FFFFFF;\n      box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.55);\n      border: solid 1px #D4D4D4; }\n\n.p-grid p-card.selected .ui-card {\n      border: 3px solid #0F2244; }\n\n.p-grid p-card.selected .ui-card img {\n        -webkit-filter: blur(1px);\n        /* Safari 6.0 - 9.0 */\n        filter: blur(1px); }\n\n.p-grid p-card .ui-card-body {\n      padding: 0px; }\n\n.p-grid p-card .ui-card-content {\n      position: relative; }\n\n.p-grid p-card .ui-card {\n      background-color: #FFFFFF; }\n\n.p-grid p-card .ui-card a {\n        position: absolute;\n        top: 99%;\n        right: 10%; }\n\n.p-grid p-card .plusButton {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n\n.p-grid p-card .plusButton button {\n        background: transparent;\n        color: #0F2244;\n        border: none;\n        font-size: 15px; }\n\n.p-grid p-card img {\n      width: 100%;\n      height: 180px; }\n\n.p-grid p-card .btn-primary {\n      position: absolute;\n      right: 10%;\n      top: 100%; }\n\nh6 {\n  color: #0F2244;\n  padding-top: 20px;\n  position: absolute;\n  text-align: center;\n  top: 95%;\n  width: 100%; }\n\n.extractButton button, .trainButton button {\n  margin-bottom: 30px;\n  background-color: #0F2244;\n  border-radius: 25px;\n  width: 400px;\n  height: 100px;\n  font-size: 28px; }\n\np-checkbox .ui-chkbox-icon {\n  background-color: #0F2244; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWM7RUFDZCxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUxIO0VBT0ksV0FBVSxFQVFYOztBQWZIO0lBU1EsYUFBWTtJQUNaLG9CQUFtQixFQUN0Qjs7QUFYTDtJQWFNLGFBQ0YsRUFBQzs7QUFHTDtFQUNFLGFBQVksRUEwRGI7O0FBM0REO0lBR0kscUJBQWlCO09BQWpCLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLG9CQUFtQixFQW9EcEI7O0FBMURIO01BUU0sb0JBQW1CO01BR25CLHFEQUFvRDtNQUNwRCwwQkFBeUIsRUFDMUI7O0FBYkw7TUFnQlEsMEJBQXlCLEVBSzFCOztBQXJCUDtRQWtCVSwwQkFBeUI7UUFBRSxzQkFBc0I7UUFDakQsa0JBQWlCLEVBQ2xCOztBQXBCVDtNQXdCTSxhQUFZLEVBQ2I7O0FBekJMO01BMkJNLG1CQUFrQixFQUNuQjs7QUE1Qkw7TUE4Qk0sMEJBQXdCLEVBTXpCOztBQXBDTDtRQWdDUSxtQkFBa0I7UUFDbEIsU0FBUTtRQUNSLFdBQVUsRUFDWDs7QUFuQ1A7TUFzQ00sbUJBQWtCO01BQ2xCLFNBQVE7TUFDUixVQUFTO01BQ1QseUNBQWdDO2NBQWhDLGlDQUFnQyxFQU9qQzs7QUFoREw7UUEyQ1Esd0JBQXVCO1FBQ3ZCLGVBQWM7UUFDZCxhQUFZO1FBQ1osZ0JBQWUsRUFDaEI7O0FBL0NQO01Ba0RNLFlBQVc7TUFDWCxjQUFhLEVBQ2Q7O0FBcERMO01Bc0RNLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsVUFBUyxFQUNWOztBQUlMO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgaDMge1xuICAgIGNvbG9yOiAjMEYyMjQ0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAudWktZGlhbG9ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLnVpLWRpYWxvZy10aXRsZWJhcntcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIH1cbiAgICAudWktZGlhbG9nLWNvbnRlbnR7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG4gIH1cbn1cbi5wLWdyaWQge1xuICBtYXJnaW46IDIwcHg7XG4gIHAtY2FyZCB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIC51aS1jYXJke1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxNnB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxNnB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTZweCAtMTFweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0Q0RDRENDtcbiAgICB9XG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAudWktY2FyZCB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwRjIyNDQ7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxcHgpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgZmlsdGVyOiBibHVyKDFweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuICAgIC51aS1jYXJkLWJvZHkge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAudWktY2FyZC1jb250ZW50e1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAudWktY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgICBhe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOTklO1xuICAgICAgICByaWdodDogMTAlO1xuICAgICAgfVxuICAgIH1cbiAgICAucGx1c0J1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgYnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICMwRjIyNDQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIH1cbiAgICAuYnRuLXByaW1hcnl7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTAlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5oNiB7XG4gIGNvbG9yOiAjMEYyMjQ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogOTUlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4dHJhY3RCdXR0b24gYnV0dG9uLCAudHJhaW5CdXR0b24gYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGMjI0NDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbnAtY2hlY2tib3ggLnVpLWNoa2JveC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGMjI0NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/home.service */ "./src/app/components/home/services/home.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/home/modal/modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _header_services_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/services/header.service */ "./src/app/components/header/services/header.service.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService, router, sanitizer, headerSerivce) {
        this.homeService = homeService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.headerSerivce = headerSerivce;
        this.templates = [];
        this.isAllTemplateSelected = false;
        this.checkboxLabel = 'Unselect all';
        this.errorMessage = '';
        this.publicURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].public;
        this.isLoading = false;
        this.selectedTemplates = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.headerSerivce.storeCurrentNavigatedUrl(this.router.url);
        // this.getTemplateData();
    };
    // private getTemplateData() {
    //   this.isLoading = true;
    //   this.homeService.getTemplateData(environment.usecaseId).then((data) => {
    //     if (data) {
    //       this.templates = data['templates'];
    //       this.checkAllTemplateSelectedOrNot();
    //       this.selectedTemplates = this.templates;
    //       console.log(this.templates);
    //       this.isLoading = false;
    //     }
    //   },
    //   error => {
    //    this.errorMessage = 'Unable to retrieve the templates. Please try again later...';
    //    this.isLoading = false;
    //   });
    // }
    // public showTemplatePreview(template) {
    //   if (template !== null) {
    //     this.modal.previewedTemplate.name = template.name;
    //     this.modal.previewedTemplate.image = this.publicURL + template.image;
    //     this.modal.display = true;
    //   }
    // }
    // public selectTemplate(template) {
    //   template.selected = !template.selected;
    //   this.isAllTemplateSelected = this.templates.every(data => data.selected === true) ? true : false;
    //   this.selectedTemplates = Object.values(this.templates).filter((value) => value.selected === true);
    // }
    HomeComponent.prototype.navigate = function (page) {
        // this.selectedTemplates = this.templates.filter((data => data.selected === true));
        // if (page === "train") {
        //     this.homeService.storeSelectedTemplate(this.selectedTemplates);
        //     this.router.navigate([page]);
        // }
        // this.homeService.storeSelectedTemplates(this.selectedTemplates);
        this.router.navigate([page]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeComponent.prototype, "modal", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _header_services_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/modal/modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/modal/modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"{{previewedTemplate.name}}\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\"  [style.min-height.px]=\"imageH\"  [maximizable]=\"true\" [baseZIndex]=\"10000\" [blockScroll]=\"true\" [positionTop]=\"0\">\n  <!-- <app-pdf-viewer pdfSrc=\"https://ml-endpointv1.firebaseapp.com/{{previewedTemplate.file}}\"></app-pdf-viewer> -->\n  <img [style.height.px]=\"imageH-100\" clas=\"preview\" width=\"auto\" src=\"{{previewedTemplate.image}}\">\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/components/home/modal/modal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/home/modal/modal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p-dialog img.preview {\n  width: auto;\n  margin-bottom: 20px;\n  box-shadow: 10px 10px 22px -10px rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  border: solid 1px #DADADA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLHFEQUFvRDtFQUNwRCxtQkFBa0I7RUFDbEIsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC1kaWFsb2cge1xuXG4gIGltZy5wcmV2aWV3IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNEQURBREE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.display = false;
        this.previewedTemplate = {};
        this.imageH = 0;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.imageH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/home/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/home/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/home/pdf-viewer/pdf-viewer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/pdf-viewer/pdf-viewer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pdf-viewer style=\"display: block; overflow: auto; margin-bottom: 100%;\" [src]=\"pdfSrc\" [render-text]=\"true\"></pdf-viewer>"

/***/ }),

/***/ "./src/app/components/home/pdf-viewer/pdf-viewer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/pdf-viewer/pdf-viewer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pdf-viewer {\n  border: 5px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvcGRmLXZpZXdlci9wZGYtdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3BkZi12aWV3ZXIvcGRmLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBkZi12aWV3ZXIge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/pdf-viewer/pdf-viewer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/home/pdf-viewer/pdf-viewer.component.ts ***!
  \********************************************************************/
/*! exports provided: PdfViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerComponent", function() { return PdfViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PdfViewerComponent = /** @class */ (function () {
    function PdfViewerComponent() {
        this.pdfSrc = '';
    }
    PdfViewerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PdfViewerComponent.prototype, "pdfSrc", void 0);
    PdfViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdf-viewer',
            template: __webpack_require__(/*! ./pdf-viewer.component.html */ "./src/app/components/home/pdf-viewer/pdf-viewer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pdf-viewer.component.scss */ "./src/app/components/home/pdf-viewer/pdf-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PdfViewerComponent);
    return PdfViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/services/home.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/services/home.service.ts ***!
  \**********************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var HomeService = /** @class */ (function () {
    function HomeService(httpClient) {
        this.httpClient = httpClient;
        this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndPoint;
        this.selectedTemplates = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.selectedTemplate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentSelectedTemplates = this.selectedTemplates.asObservable();
        this.currentSelectedTemplate = this.selectedTemplate.asObservable();
    }
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/train-landing/services/train-landing.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/train-landing/services/train-landing.service.ts ***!
  \****************************************************************************/
/*! exports provided: TrainLandingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainLandingService", function() { return TrainLandingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var TrainLandingService = /** @class */ (function () {
    function TrainLandingService(httpClient) {
        this.httpClient = httpClient;
        this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndPoint;
        this.selectedTemplate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.currentSelectedTemplate = this.selectedTemplate.asObservable();
    }
    TrainLandingService.prototype.getUsecases = function () {
        //return this.httpClient.get('');
        return this.httpClient.get(this.endPoint + "/getUsecases");
    };
    TrainLandingService.prototype.getTemplates = function (usecaseId) {
        var params = { 'use_case_id': usecaseId };
        return this.httpClient.get(this.endPoint + "/getTemplatesForTrain", { params: params });
    };
    TrainLandingService.prototype.storeSelectedTemplate = function (template, usecaseId) {
        this.selectedTemplate.next({ template: template, usecaseId: usecaseId });
    };
    TrainLandingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainLandingService);
    return TrainLandingService;
}());



/***/ }),

/***/ "./src/app/components/train-landing/train-landing.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/train-landing/train-landing.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"trainlanding\">\n  \n  <div class=\"row\">\n    <h1>Usecases</h1>\n    <div class=\"p-grid\">\n      <ng-container *ngFor=\"let usecase of usecases\">\n        <p-card [style]=\"{width: '200px'}\" [ngStyle]=\"{'display':(!usecase.selected && isAnyUsecaseSelected) ? 'none' : '' }\"\n          class=\"p-sm-6 p-md-4 p-lg-3 p-xl-2\" [ngClass]=\"{'selected': usecase.selected}\" (click)=\"selectUsecase(usecase)\">\n          <img src=\"Card\" src=\"{{publicURL}}{{usecase.image}}\" pTooltip=\"{{usecase.Desc}}\" tooltipPosition=\"top\">\n          <h6>{{usecase.name}}</h6>\n        </p-card>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"template-panel\" *ngIf=\"isAnyUsecaseSelected\" [@enterAnimation]>\n      <div class=\"heading\">\n        <h4>Select a Template</h4>\n        <button class=\"btn btn-secondary\" (click)='close()'\n          id=\"close\">Close</button>\n      </div>\n      <div *ngIf=\"errorMessage != ''\" class=\"alert alert-danger\" role=\"alert\">\n        {{errorMessage}}\n      </div>\n      <div class=\"untrained-templates\" *ngIf=\"untrainedTemplates.length\">\n        <h5>Untrained Template(s)</h5>\n        <div class=\"p-grid\">\n          <ng-container *ngFor=\"let template of untrainedTemplates\">\n            <p-card [style]=\"{width: '200px'}\" class=\"p-sm-6 p-md-4 p-lg-3 p-xl-2\" [ngClass]=\"{'selected': template.selected}\"\n              (click)=\"selectTemplate(template)\">\n              <p-button class=\"plusButton\" icon=\"pi pi-plus\" (onClick)=\"showTemplatePreview(template)\"></p-button>\n              <img src=\"Card\" src=\"{{publicURL}}{{template.image}}\" pTooltip=\"{{template.Desc}}\" tooltipPosition=\"top\">\n              <h6>{{template.name}}</h6>\n            </p-card>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"trained-templates\" *ngIf=\"trainedTemplates.length\">\n        <h5>Trained Template(s)</h5>\n        <div class=\"p-grid\">\n          <ng-container *ngFor=\"let template of trainedTemplates\">\n            <p-card [style]=\"{width: '200px'}\" class=\"p-sm-6 p-md-4 p-lg-3 p-xl-2\" [ngClass]=\"{'selected': template.selected}\"\n              (click)=\"selectTemplate(template)\">\n              <p-button class=\"plusButton\" icon=\"pi pi-plus\" (onClick)=\"showTemplatePreview(template)\"></p-button>\n              <img src=\"Card\" src=\"{{publicURL}}{{template.image}}\" pTooltip=\"{{template.Desc}}\" tooltipPosition=\"top\">\n              <h6>{{template.name}}</h6>\n            </p-card>\n          </ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"templates.length\">\n        <p-button class=\"train-button\" label=\"Train\" pTooltip=\"{{(selectedTemplates.length === 1) ? '' : 'Please select only one template'}}\"\n          [disabled]=\"!isAnyTemplateSelected\" (click)=\"navigate('train')\"></p-button>\n      </ng-container>\n      <app-modal></app-modal>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/train-landing/train-landing.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/train-landing/train-landing.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trainlanding .row:nth-child(1) {\n  justify-content: center;\n  width: 95%;\n  height: 40%; }\n  .trainlanding .row:nth-child(1) h1 {\n    color: #0F2244; }\n  .trainlanding .row:nth-child(1) h6 {\n    color: #0F2244;\n    padding-top: 20px;\n    position: absolute;\n    text-align: center;\n    width: 100%; }\n  .trainlanding .row:nth-child(1) .p-grid {\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%; }\n  .trainlanding .row:nth-child(1) .p-grid p-card {\n      -o-object-fit: cover;\n         object-fit: cover;\n      position: relative;\n      text-align: center;\n      margin-bottom: 50px; }\n  .trainlanding .row:nth-child(1) .p-grid p-card .ui-card {\n        background: #FFFFFF;\n        box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.55);\n        border: solid 1px #D4D4D4; }\n  .trainlanding .row:nth-child(1) .p-grid p-card.p-xl-2 {\n        width: unset; }\n  .trainlanding .row:nth-child(1) .p-grid p-card.selected .ui-card {\n        border: 3px solid #0F2244; }\n  .trainlanding .row:nth-child(1) .p-grid p-card.selected .ui-card img {\n          -webkit-filter: blur(1px);\n          /* Safari 6.0 - 9.0 */\n          filter: blur(1px); }\n  .trainlanding .row:nth-child(1) .p-grid p-card .ui-card-body {\n        padding: 0px; }\n  .trainlanding .row:nth-child(1) .p-grid p-card .ui-card-content {\n        position: relative; }\n  .trainlanding .row:nth-child(1) .p-grid p-card .ui-card {\n        background-color: #FFFFFF; }\n  .trainlanding .row:nth-child(1) .p-grid p-card .ui-card a {\n          position: absolute;\n          top: 99%;\n          right: 10%; }\n  .trainlanding .row:nth-child(1) .p-grid p-card img {\n        width: 100%;\n        height: 180px; }\n  .trainlanding .row:nth-child(2) .template-panel {\n  margin-left: 150px;\n  overflow-y: auto;\n  position: absolute;\n  width: 80%;\n  height: 45%; }\n  .trainlanding .row:nth-child(2) .template-panel .heading {\n    padding-top: 20px;\n    margin-bottom: 20px; }\n  .trainlanding .row:nth-child(2) .template-panel .heading button {\n      position: relative;\n      float: right;\n      top: -45px;\n      right: 10px; }\n  .trainlanding .row:nth-child(2) .template-panel .heading h4 {\n      color: #0F2244;\n      font-size: 28px; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid {\n    margin-left: 0;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card {\n      -o-object-fit: cover;\n         object-fit: cover;\n      position: relative;\n      text-align: center;\n      margin-bottom: 50px; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .ui-card {\n        background: #FFFFFF;\n        box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.55);\n        border: solid 1px #D4D4D4; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card.p-xl-2 {\n        width: unset; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card.selected .ui-card {\n        border: 3px solid #0F2244; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card.selected .ui-card img {\n          -webkit-filter: blur(1px);\n          /* Safari 6.0 - 9.0 */\n          filter: blur(1px); }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .ui-card-body {\n        padding: 0px; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .ui-card-content {\n        position: relative; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .ui-card {\n        background-color: #FFFFFF; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .ui-card a {\n          position: absolute;\n          top: 99%;\n          right: 10%; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .plusButton {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .plusButton button {\n          background: transparent;\n          color: #0F2244;\n          border: none;\n          font-size: 15px; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card img {\n        width: 100%;\n        height: 180px; }\n  .trainlanding .row:nth-child(2) .template-panel .p-grid p-card .btn-primary {\n        position: absolute;\n        right: 10%;\n        top: 100%; }\n  .trainlanding .row:nth-child(2) .template-panel .train-button button {\n    margin-left: 15px;\n    margin-bottom: 10px;\n    background-color: #0F2244; }\n  .trainlanding .row:nth-child(2) .template-panel .untrained-templates h5, .trainlanding .row:nth-child(2) .template-panel .trained-templates h5 {\n    color: #0F2244;\n    font-size: 24px;\n    text-align: left;\n    padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL3RyYWluLWxhbmRpbmcvdHJhaW4tbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdCQUF1QjtFQUN2QixXQUFTO0VBQ1QsWUFBVSxFQTZEWDtFQWpFSDtJQU1NLGVBQWMsRUFDZjtFQVBMO0lBU00sZUFBYztJQUNkLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLFlBQVcsRUFDWjtFQWRMO0lBZ0JNLHdCQUF1QjtJQUN2QixjQUFhO0lBQ2IsZ0JBQWU7SUFDZixZQUFXLEVBNkNaO0VBaEVMO01BcUJRLHFCQUFpQjtTQUFqQixrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLG1CQUFrQjtNQUNsQixvQkFBbUIsRUF1Q3BCO0VBL0RQO1FBMEJVLG9CQUFtQjtRQUduQixxREFBb0Q7UUFDcEQsMEJBQXlCLEVBQzFCO0VBL0JUO1FBaUNVLGFBQVksRUFDYjtFQWxDVDtRQXFDWSwwQkFBeUIsRUFLMUI7RUExQ1g7VUF1Q2MsMEJBQXlCO1VBQUUsc0JBQXNCO1VBQ2pELGtCQUFpQixFQUNsQjtFQXpDYjtRQTZDVSxhQUFZLEVBQ2I7RUE5Q1Q7UUFnRFUsbUJBQWtCLEVBRW5CO0VBbERUO1FBb0RVLDBCQUF3QixFQU16QjtFQTFEVDtVQXNEWSxtQkFBa0I7VUFDbEIsU0FBUTtVQUNSLFdBQVUsRUFDWDtFQXpEWDtRQTREVSxZQUFXO1FBQ1gsY0FBYSxFQUNkO0VBOURUO0VBb0VNLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFVLEVBNEZYO0VBcEtMO0lBMEVRLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFXcEI7RUF0RlA7TUE2RVUsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixXQUFVO01BQ1YsWUFBVyxFQUNaO0VBakZUO01BbUZVLGVBQWM7TUFDZCxnQkFBZSxFQUNoQjtFQXJGVDtJQXdGUSxlQUFjO0lBQ2QsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsWUFBVyxFQTZEWjtFQXhKUDtNQTZGVSxxQkFBaUI7U0FBakIsa0JBQWlCO01BQ2pCLG1CQUFrQjtNQUNsQixtQkFBa0I7TUFDbEIsb0JBQW1CLEVBdURwQjtFQXZKVDtRQWtHWSxvQkFBbUI7UUFHbkIscURBQW9EO1FBQ3BELDBCQUF5QixFQUMxQjtFQXZHWDtRQXlHWSxhQUFZLEVBQ2I7RUExR1g7UUE2R2MsMEJBQXlCLEVBSzFCO0VBbEhiO1VBK0dnQiwwQkFBeUI7VUFBRSxzQkFBc0I7VUFDakQsa0JBQWlCLEVBQ2xCO0VBakhmO1FBcUhZLGFBQVksRUFDYjtFQXRIWDtRQXdIWSxtQkFBa0IsRUFDbkI7RUF6SFg7UUEySFksMEJBQXdCLEVBTXpCO0VBaklYO1VBNkhjLG1CQUFrQjtVQUNsQixTQUFRO1VBQ1IsV0FBVSxFQUNYO0VBaEliO1FBbUlZLG1CQUFrQjtRQUNsQixTQUFRO1FBQ1IsVUFBUztRQUNULHlDQUFnQztnQkFBaEMsaUNBQWdDLEVBT2pDO0VBN0lYO1VBd0ljLHdCQUF1QjtVQUN2QixlQUFjO1VBQ2QsYUFBWTtVQUNaLGdCQUFlLEVBQ2hCO0VBNUliO1FBK0lZLFlBQVc7UUFDWCxjQUFhLEVBQ2Q7RUFqSlg7UUFtSlksbUJBQWtCO1FBQ2xCLFdBQVU7UUFDVixVQUFTLEVBQ1Y7RUF0Slg7SUEwSlEsa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQiwwQkFBeUIsRUFDMUI7RUE3SlA7SUErSlEsZUFBYztJQUNkLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaW4tbGFuZGluZy90cmFpbi1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYWlubGFuZGluZ3tcbiAgLnJvdzpudGgtY2hpbGQoMSkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOjk1JTtcbiAgICBoZWlnaHQ6NDAlO1xuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjMEYyMjQ0O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICBjb2xvcjogIzBGMjI0NDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5wLWdyaWQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwLWNhcmQge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIC51aS1jYXJke1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE2cHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxNnB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE2cHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRDRENEQ0O1xuICAgICAgICB9XG4gICAgICAgICYucC14bC0yIHtcbiAgICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgLnVpLWNhcmQge1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzBGMjI0NDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMXB4KTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVpLWNhcmQtYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC51aS1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudWktY2FyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICAgICAgICAgIGF7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDk5JTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAucm93Om50aC1jaGlsZCgyKSB7XG4gICAgLnRlbXBsYXRlLXBhbmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OjQ1JTtcbiAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB0b3A6IC00NXB4O1xuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBjb2xvcjogIzBGMjI0NDtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wLWdyaWQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcC1jYXJkIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgLnVpLWNhcmR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE2cHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDE2cHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNnB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRDRENEQ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLnAteGwtMiB7XG4gICAgICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgLnVpLWNhcmQge1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMEYyMjQ0O1xuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMXB4KTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxcHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC51aS1jYXJkLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudWktY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudWktY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogOTklO1xuICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucGx1c0J1dHRvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwRjIyNDQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLXByaW1hcnl7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50cmFpbi1idXR0b24gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRjIyNDQ7XG4gICAgICB9XG4gICAgICAudW50cmFpbmVkLXRlbXBsYXRlcyBoNSwgLnRyYWluZWQtdGVtcGxhdGVzIGg1ICB7XG4gICAgICAgIGNvbG9yOiAjMEYyMjQ0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/train-landing/train-landing.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/train-landing/train-landing.component.ts ***!
  \*********************************************************************/
/*! exports provided: TrainLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainLandingComponent", function() { return TrainLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_train_landing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/train-landing.service */ "./src/app/components/train-landing/services/train-landing.service.ts");
/* harmony import */ var _home_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/modal/modal.component */ "./src/app/components/home/modal/modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _header_services_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/services/header.service */ "./src/app/components/header/services/header.service.ts");








var TrainLandingComponent = /** @class */ (function () {
    function TrainLandingComponent(router, trainLandingservice, headerSerivce) {
        this.router = router;
        this.trainLandingservice = trainLandingservice;
        this.headerSerivce = headerSerivce;
        this.usecases = [];
        this.isAnyUsecaseSelected = false;
        this.errorMessage = '';
        this.publicURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].public;
        this.templates = [];
        this.untrainedTemplates = [];
        this.trainedTemplates = [];
        this.isAllTemplateSelected = false;
        this.selectedTemplates = [];
        this.isAnyTemplateSelected = false;
        this.selectedUsecaseName = '';
        this.usecaseid = '';
    }
    TrainLandingComponent.prototype.ngOnInit = function () {
        this.headerSerivce.storeCurrentNavigatedUrl(this.router.url);
        this.getUsecasesData();
    };
    TrainLandingComponent.prototype.getUsecasesData = function () {
        var _this = this;
        this.trainLandingservice.getUsecases().subscribe(function (data) {
            if (data) {
                for (var property in data) {
                    _this.usecases.push(Object.assign(data[property], { use_case_id: property }, { selected: false }));
                }
            }
            console.log(_this.usecases);
        }, function (error) {
            _this.errorMessage = 'Unable to retrieve the usecases. Please try again later...';
        });
    };
    TrainLandingComponent.prototype.getTemplatesData = function (usecaseId) {
        var _this = this;
        this.trainLandingservice.getTemplates(usecaseId).subscribe(function (data) {
            if (data) {
                _this.templates = data['templates'];
                _this.trainedTemplates = _this.templates.filter(function (value) { return value.is_trained === 1; });
                _this.untrainedTemplates = _this.templates.filter(function (value) { return value.is_trained === 0; });
                console.log(_this.untrainedTemplates);
                console.log(_this.trainedTemplates);
            }
        }, function (error) {
            _this.errorMessage = 'Unable to retrieve the templates. Please try again later...';
        });
    };
    TrainLandingComponent.prototype.selectUsecase = function (usecase) {
        this.errorMessage = '';
        if (usecase.selected) {
            this.selectedUsecaseName = '';
            this.usecases.forEach(function (data) { return data.selected = false; });
            this.isAnyUsecaseSelected = false;
            this.templates = [];
        }
        else {
            this.usecases.forEach(function (data) { return data.selected = false; });
            usecase.selected = true;
            this.isAnyUsecaseSelected = true;
            this.selectedUsecaseName = usecase.name;
            this.usecaseid = usecase.use_case_id;
            this.getTemplatesData(usecase.use_case_id);
        }
    };
    TrainLandingComponent.prototype.selectTemplate = function (template) {
        if (template.selected) {
            this.templates.forEach(function (data) { return data.selected = false; });
            this.isAnyTemplateSelected = false;
        }
        else {
            this.templates.forEach(function (data) { return data.selected = false; });
            template.selected = true;
            this.isAnyTemplateSelected = true;
        }
    };
    TrainLandingComponent.prototype.showTemplatePreview = function (template) {
        if (template !== null) {
            this.modal.previewedTemplate.name = template.name;
            this.modal.previewedTemplate.image = this.publicURL + template.image;
            this.modal.display = true;
        }
    };
    TrainLandingComponent.prototype.navigate = function (page) {
        this.selectedTemplates = this.templates.filter((function (data) { return data.selected === true; }));
        this.trainLandingservice.storeSelectedTemplate(this.selectedTemplates, this.usecaseid);
        this.router.navigate([page]);
    };
    TrainLandingComponent.prototype.close = function () {
        this.isAnyUsecaseSelected = false;
        this.usecases.forEach(function (data) { return data.selected = false; });
        this.templates = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_home_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrainLandingComponent.prototype, "modal", void 0);
    TrainLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-train-landing',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(100%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(100%)', opacity: 1 }))
                    ])
                ])
            ],
            template: __webpack_require__(/*! ./train-landing.component.html */ "./src/app/components/train-landing/train-landing.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./train-landing.component.scss */ "./src/app/components/train-landing/train-landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_train_landing_service__WEBPACK_IMPORTED_MODULE_3__["TrainLandingService"], _header_services_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"]])
    ], TrainLandingComponent);
    return TrainLandingComponent;
}());



/***/ }),

/***/ "./src/app/components/train/services/train.service.ts":
/*!************************************************************!*\
  !*** ./src/app/components/train/services/train.service.ts ***!
  \************************************************************/
/*! exports provided: TrainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainService", function() { return TrainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var TrainService = /** @class */ (function () {
    function TrainService(httpClient) {
        this.httpClient = httpClient;
        this.apiEndPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndPoint;
    }
    TrainService.prototype.getMetaData = function (usecaseId, templateName) {
        var params = { 'use_case_id': usecaseId, 'template_name': templateName };
        return this.httpClient.get(this.apiEndPoint + "/getMetaData", { params: params }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    TrainService.prototype.getTrainingPdfs = function (usecaseId, templateName) {
        var params = { 'use_case_id': usecaseId, 'template_name': templateName };
        return this.httpClient.get(this.apiEndPoint + "/getTrainPdfs", { params: params }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    TrainService.prototype.postTrainModel = function (usecaseId, templateName, json) {
        var params = { 'use_case_id': usecaseId, 'template_name': templateName };
        return this.httpClient.post(this.apiEndPoint + "/train", json, { params: params, responseType: 'text', observe: 'response' }).toPromise()
            .then(function (res) {
            console.log(res);
            return res;
        });
    };
    TrainService.prototype.getAutoPopulate = function (usecaseId, templateName) {
        var params = { 'use_case_id': usecaseId, 'template_name': templateName };
        console.log(params);
        return this.httpClient.get(this.apiEndPoint + "/getDefaultData", { params: params }).toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    TrainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainService);
    return TrainService;
}());



/***/ }),

/***/ "./src/app/components/train/train.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/train/train.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a routerLink=\"/home\">\n    <button class=\"btn btn-primary pull-left\" >Home</button>\n</a> -->\n<div *ngIf=\"isPdfLoading === true\"  style=\"position: absolute; height: 100%; width: 100%; background: rgb(255, 255, 255, 0.8); z-index:10;\">\n        <div class=\"loader\">Loading...</div>\n</div>\n<div>\n    <h5>Train {{selectedTemplateName}}</h5>\n</div>\n<p-progressBar *ngIf=\"isLoading === true\" mode=\"indeterminate\"></p-progressBar>\n<div class=\"alert alert-danger\" *ngIf=\"errorMessage !== ''\">{{errorMessage}}</div>\n<div class=\"alert alert-success\" *ngIf=\"message !== ''\">{{message}}</div>\n\n<div class=\"parent\">\n    <div class=\"preview\">\n       \n        <!-- <img src=\"{{imagePath}}\" [@enterAnimation]/> -->\n        <div style=\"width: 100%; position: relative; min-height: 700px\">\n            <p style=\"margin-top: 10px;\">\n                <a *ngIf=\"showPrev\" style=\"cursor: pointer; padding: 10px; color: #0e2244; text-decoration: underline\" (click)=\"prevPDF(e)\">Prev</a>\n                <a *ngIf=\"showNext\" style=\"cursor: pointer; padding: 10px; color: #0e2244; text-decoration: underline\"  (click)=\"nextPDF(e)\">Next</a>\n            </p>\n            <div>\n                <pdf-viewer style=\"display: block; overflow: auto; position: relative;\" [render-text-mode]=\"2\" [original-size]=\"false\" [page]=\"currPage\" [show-all]=\"false\"  [src]=\"pdfSrc\" [render-text]=\"true\" (on-progress)=\"onProgress($event)\" (page-rendered)=\"pageRendered($event)\"  (after-load-complete)=\"callBackFn($event)\"></pdf-viewer>\n            </div>\n        </div>\n        \n    </div>\n    <div class=\"form-container\">\n      \n        <div class=\"form\">\n                \n            <div class=\"form-group\" [formGroup]=\"trainFormGroup\" *ngFor=\"let field of fieldKeys;let i = index;\">\n                <div class=\"label\">\n                    <label>{{field.name}}</label>\n                </div>\n                <div class=\"control\">\n                    <div *ngIf=\"field.type === 'scalar'\">\n                        <textarea rows=\"4\" formControlName=\"{{field.name}}\" class=\"form-control\"></textarea>\n                    </div>\n                    <div *ngIf=\"field.type === 'table'\">\n                        <div formArrayName=\"{{field.name}}\">\n                            <div *ngFor=\"let name of trainFormGroup.controls[field.name].controls; let i = index\">\n                                <input [formControlName]=\"i\" type=\"text\"/>\n                                <button class=\"btn-secondary\" *ngIf=\"i+1 !== trainFormGroup.controls[field.name].controls.length\"  (click)=\"removeItem(field.name,i)\">-</button>\n                                <button style=\"background: #0E2244; color: #FFF; font-size: 12px; width: 30px; font-size: 13px;padding: 6px 10px; border:none; margin-left: 20px;\" (click)=\"addItem(field.name)\"  *ngIf=\"i+1 === trainFormGroup.controls[field.name].controls.length\" >+</button>\n                            </div>\n                        </div>\n                        \n                        <!-- <button class=\"btn-primary\" (click)=\"addItem(field.name)\">+</button> -->\n                    </div>\n                </div>\n            </div>\n        <button type=\"submit\"  *ngIf=\"currID === pdfArr.length - 1\" class=\"btn-primary\" (click)=\"onSubmit()\">Submit</button>\n        <button type=\"reset\" class=\"btn-secondary\" (click)=\"resetForm()\">Clear</button>\n        <button class=\"btn-secondary\" (click)=\"autopopulate()\">Auto Populate</button>\n     </div>\n    <div class=\"btns\">\n        <button *ngIf=\"currID > 0\" (click)=\"prev()\"><i class=\"fa fa-caret-left\" style=\"font-size: 17px;\"></i></button> \n        <ul>\n            <li *ngFor=\"let x of pdfArr; let i = index;\">\n               <a  class=\"navlink\" [ngClass]=\"currID === i ? 'active' : ''\" (click)=\"navigateFrom(i)\"><span style=\"font-family: none;font-size: 20px;\">{{i+1}}</span></a>\n            </li>\n        </ul>\n        <button *ngIf=\"currID < pdfArr.length - 1\" (click)=\"next()\"><i class=\"fa fa-caret-right\" style=\"font-size: 17px;\"></i></button>\n    </div>\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/train/train.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/train/train.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary, .btn-secondary {\n  margin-left: 10px;\n  padding: 5px 10px;\n  font-size: 13px; }\n\n.loader {\n  color: #007bff;\n  font-size: 7px;\n  margin: 25% auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\ndiv.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  margin-left: 20px;\n  padding: 5px;\n  margin-right: 20px;\n  z-index: 1;\n  background-color: #FFFFFF;\n  color: #0F2244; }\n\n@-webkit-keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0; }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em; }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em; }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em; }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0; }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em; } }\n\n@keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0; }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em; }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em; }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em; }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0; }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em; } }\n\n:host ::ng-deep .pdfViewer {\n  max-width: 500px !important; }\n\n.rectangle {\n  border: 1px solid #FF0000;\n  position: absolute; }\n\n:host ::ng-deep .pdfViewer .textLayer > div {\n  cursor: default; }\n\n:host ::ng-deep .pdfViewer .canvasWrapper {\n  z-index: 9999; }\n\n.parent {\n  display: flex;\n  margin: 0px 20px 20px 20px;\n  box-sizing: border-box; }\n\n.parent .preview {\n    flex: 1;\n    margin-right: 10px;\n    background: white;\n    box-shadow: 10px 10px 22px -10px rgba(0, 0, 0, 0.75);\n    border-radius: 5px;\n    border: solid  1px #DADADA;\n    box-sizing: border-box; }\n\n.parent .preview img {\n      max-width: 100%; }\n\n.parent .form-container {\n    flex: 1;\n    min-height: 200px;\n    background: white;\n    box-shadow: 10px 10px 22px -10px rgba(0, 0, 0, 0.75);\n    border-radius: 5px;\n    border: solid  1px #DADADA;\n    box-sizing: border-box; }\n\n.parent .form-container .btns {\n      margin-bottom: 20px; }\n\n.parent .form-container .btns ul {\n        list-style: none;\n        display: inline-block;\n        margin: 0;\n        padding: 0; }\n\n.parent .form-container .btns ul li {\n          display: inline;\n          padding: 5px; }\n\n.parent .form-container .btns ul li .navlink {\n            color: #0F2244;\n            cursor: pointer; }\n\n.parent .form-container .btns ul li .navlink.active {\n              color: #707070;\n              text-decoration: none;\n              pointer-events: none;\n              cursor: default; }\n\n.parent .form-container .btns ul li .navlink:hover {\n              text-decoration: underline; }\n\n.parent .form-container .btns ul li button {\n            margin-top: 0; }\n\n.parent .form-container .btns button {\n        background: none;\n        border: none;\n        color: #0F2244;\n        margin-top: 5px; }\n\n.parent .form-container .form {\n      border: solid 1px #DADADA;\n      margin: 10px;\n      padding: 20px;\n      font-size: 13px;\n      font-family: Arial, sans-serif, helvetica; }\n\n.parent .form-container .form-group {\n      display: flex;\n      margin: 20px auto; }\n\n.parent .form-container .form-group .label {\n        flex: 1;\n        text-align: left; }\n\n.parent .form-container .form-group .control {\n        flex: 4;\n        position: relative;\n        text-align: left; }\n\n.parent .form-container .form-group .control .btn-primary {\n          position: absolute;\n          top: 0;\n          left: 310px;\n          width: 30px;\n          background-color: #0F2244;\n          border: none; }\n\n.parent .form-container .form-group .control .add {\n          background: #102244;\n          left: 380px;\n          position: absolute;\n          padding: 5px 10px;\n          border: none;\n          color: #FFF; }\n\n.parent .form-container .form-group .control .btn-secondary {\n          position: absolute;\n          left: 310px;\n          width: 30px; }\n\n.parent .form-container .form-group input[type=\"text\"] {\n        width: 300px;\n        height: 35px;\n        margin-bottom: 10px; }\n\n.parent .form-container .form-group textarea, .parent .form-container .form-group input {\n        font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbml0aGFndW5hc2VrYXJhbi9tbC1hY2NlbGVyYXRvcnMvc3JjL2FwcC9jb21wb25lbnRzL3RyYWluL3RyYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsOENBQTZDO0VBQzdDLHNDQUFxQztFQUNyQyxpQ0FBZ0M7RUFFaEMseUJBQXdCLEVBQ3pCOztBQUVEO0VBQ0UseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixTQUFRO0VBQ1Isa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLDBCQUF5QjtFQUN6QixlQUFjLEVBQ2Y7O0FBSUQ7RUFDRTs7SUFFRSxzSUFBcUksRUFBQTtFQUV2STtJQUNFLG9JQUFtSSxFQUFBO0VBRXJJO0lBQ0Usc0lBQXFJLEVBQUE7RUFFdkk7SUFDRSwwSUFBeUksRUFBQTtFQUUzSTtJQUNFLHdJQUF1SSxFQUFBO0VBRXpJO0lBQ0Usb0lBQW1JLEVBQUE7RUFFckk7SUFDRSwwSUFBeUksRUFBQTtFQUUzSTtJQUNFLHFJQUFvSSxFQUFBLEVBQUE7O0FBR3hJO0VBQ0U7O0lBRUUsc0lBQXFJLEVBQUE7RUFFdkk7SUFDRSxvSUFBbUksRUFBQTtFQUVySTtJQUNFLHNJQUFxSSxFQUFBO0VBRXZJO0lBQ0UsMElBQXlJLEVBQUE7RUFFM0k7SUFDRSx3SUFBdUksRUFBQTtFQUV6STtJQUNFLG9JQUFtSSxFQUFBO0VBRXJJO0lBQ0UsMElBQXlJLEVBQUE7RUFFM0k7SUFDRSxxSUFBb0ksRUFBQSxFQUFBOztBQUt4STtFQUNJLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRyxnQkFBZSxFQUNqQjs7QUFFRDtFQUNHLGNBQWEsRUFDZjs7QUFNRDtFQUdJLGNBQWE7RUFDYiwyQkFBMEI7RUFDMUIsdUJBQXNCLEVBZ0h6Qjs7QUFySEQ7SUFPUSxRQUFPO0lBQ1AsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUVqQixxREFBaUQ7SUFDakQsbUJBQWtCO0lBQ2xCLDJCQUEwQjtJQUMxQix1QkFBc0IsRUFLekI7O0FBbkJMO01BZ0JZLGdCQUFlLEVBQ2xCOztBQWpCVDtJQXFCUSxRQUFPO0lBQ1Asa0JBQWlCO0lBQ2pCLGtCQUFpQjtJQUVqQixxREFBaUQ7SUFDakQsbUJBQWtCO0lBQ2xCLDJCQUEwQjtJQUMxQix1QkFBc0IsRUF1RnpCOztBQW5ITDtNQThCWSxvQkFBbUIsRUFrQ3RCOztBQWhFVDtRQWdDYyxpQkFBZ0I7UUFDaEIsc0JBQXFCO1FBQ3JCLFVBQVM7UUFDVCxXQUFVLEVBc0JYOztBQXpEYjtVQXFDaUIsZ0JBQWU7VUFDZixhQUFZLEVBa0JkOztBQXhEZjtZQXdDb0IsZUFBYztZQUNkLGdCQUFlLEVBVWpCOztBQW5EbEI7Y0EyQ3NCLGVBQWM7Y0FDZCxzQkFBcUI7Y0FDckIscUJBQW9CO2NBQ3BCLGdCQUFlLEVBQ2hCOztBQS9DckI7Y0FpRHNCLDJCQUEwQixFQUMzQjs7QUFsRHJCO1lBcURtQixjQUFhLEVBRWQ7O0FBdkRsQjtRQTJEYyxpQkFBZ0I7UUFDaEIsYUFBWTtRQUNaLGVBQWM7UUFDZCxnQkFBZSxFQUNoQjs7QUEvRGI7TUFrRVksMEJBQXlCO01BQ3pCLGFBQVk7TUFDWixjQUFhO01BQ2IsZ0JBQWU7TUFDZiwwQ0FBeUMsRUFDNUM7O0FBdkVUO01BeUVZLGNBQWE7TUFDYixrQkFBaUIsRUF3Q3BCOztBQWxIVDtRQTRFZ0IsUUFBTztRQUNQLGlCQUFnQixFQUNuQjs7QUE5RWI7UUFnRmdCLFFBQU87UUFDUCxtQkFBa0I7UUFDbEIsaUJBQWdCLEVBdUJuQjs7QUF6R2I7VUFvRm9CLG1CQUFrQjtVQUNsQixPQUFNO1VBQ04sWUFBVTtVQUNWLFlBQVc7VUFDWCwwQkFBeUI7VUFDekIsYUFBWSxFQUVmOztBQTNGakI7VUE2RmtCLG9CQUFtQjtVQUNuQixZQUFXO1VBQ1gsbUJBQWtCO1VBQ2xCLGtCQUFpQjtVQUNqQixhQUFZO1VBQ1osWUFBVyxFQUNaOztBQW5HakI7VUFxR29CLG1CQUFrQjtVQUNsQixZQUFVO1VBQ1YsWUFBVyxFQUNkOztBQXhHakI7UUEyR2dCLGFBQVk7UUFDWixhQUFZO1FBQ1osb0JBQW1CLEVBQ3RCOztBQTlHYjtRQWdIZ0IsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYWluL3RyYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYnRuLXByaW1hcnksIC5idG4tc2Vjb25kYXJ5e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5sb2FkZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiA3cHg7XG4gIG1hcmdpbjogMjUlIGF1dG87XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuZGl2LnN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICMwRjIyNDQ7XG59XG5cblxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNjIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcbiAgfVxufVxuXG5cbjpob3N0IDo6bmctZGVlcCAucGRmVmlld2VyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWN0YW5nbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkYwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucGRmVmlld2VyIC50ZXh0TGF5ZXIgPiBkaXZ7XG4gICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucGRmVmlld2VyIC5jYW52YXNXcmFwcGVyIHtcbiAgIHotaW5kZXg6IDk5OTk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucGRmVmlld2VyIC50ZXh0TGF5ZXIgPiBkaXY6OnNlbGVjdGlvbntcbiAgXG4gIFxufVxuLnBhcmVudHtcbiAgIFxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDBweCAyMHB4IDIwcHggMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC5wcmV2aWV3e1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIycHggLTEwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIycHggLTEwcHggcmdiYSgwLDAsMCwwLjc1KTsgIFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgICAgICBib3JkZXI6IHNvbGlkICAxcHggI0RBREFEQTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAuZm9ybS1jb250YWluZXJ7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjJweCAtMTBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMnB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7ICBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAgMXB4ICNEQURBREE7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC5idG5ze1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAubmF2bGlua3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwRjIyNDQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogIzBGMjI0NDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mb3Jte1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0RBREFEQTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWYsIGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybS1ncm91cHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgIC5sYWJlbHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udHJvbHtcbiAgICAgICAgICAgICAgICBmbGV4OiA0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MzEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYyMjQ0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWRke1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzEwMjI0NDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDM4MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ0bi1zZWNvbmRhcnl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDozMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dGFyZWEsIGlucHV0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/train/train.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/train/train.component.ts ***!
  \*****************************************************/
/*! exports provided: TrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainComponent", function() { return TrainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_train_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/train.service */ "./src/app/components/train/services/train.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _home_services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/services/home.service */ "./src/app/components/home/services/home.service.ts");
/* harmony import */ var _extract_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../extract/services/templates.service */ "./src/app/components/extract/services/templates.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _train_landing_services_train_landing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../train-landing/services/train-landing.service */ "./src/app/components/train-landing/services/train-landing.service.ts");











var TrainComponent = /** @class */ (function () {
    function TrainComponent(route, middleware, formBuilder, homeSer, router, templateService, modalService, trainLService) {
        this.route = route;
        this.middleware = middleware;
        this.formBuilder = formBuilder;
        this.homeSer = homeSer;
        this.router = router;
        this.templateService = templateService;
        this.modalService = modalService;
        this.trainLService = trainLService;
        this.temp = "";
        this.currID = 0;
        this.pdfArr = [];
        this.isLoading = false;
        this.isPdfLoading = true;
        this.pdfSrc = '';
        this.errorMessage = '';
        this.fields = {};
        this.message = '';
        this.fieldKeys = [];
        this.totalPages = 0;
        this.currPage = 1;
        this.showPrev = false;
        this.showNext = true;
        this.showAutopopulate = false;
        this.useCaseId = '';
    }
    TrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Grab the selected template from Home Page
        this.trainLService.currentSelectedTemplate.subscribe(function (res) {
            console.log("Resss", res);
            if (res.length === 0 || res === undefined) {
                _this.router.navigate(['home']);
            }
            _this.selectedTemplateName = res.template[0].name;
            _this.useCaseId = res.usecaseId;
        });
        console.log(this.selectedTemplateName);
        this.isLoading = true;
        this.isPdfLoading = true;
        this.middleware.getMetaData(this.useCaseId, this.selectedTemplateName).then(function (data) {
            _this.buildForm(data);
        }).catch(function (err) {
            _this.errorMessage = "Unable to fetch matadata matching the template - " + _this.selectedTemplateName;
        }).finally(function () {
        });
        this.middleware.getTrainingPdfs(this.useCaseId, this.selectedTemplateName).then(function (res) {
            _this.pdfArr = res.docs;
            _this.pdfSrc = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].public + _this.pdfArr[0].link;
            // this.trainingJSON = res;
            var docsArray = [];
            for (var i = 0; i < res.docs.length; i++) {
                var doc = res.docs[i];
                docsArray[i] = { "doc": doc.doc, "link": doc.link };
            }
            _this.trainingJSON = { "docs": docsArray, "template_id": res.template_id };
            console.log(_this.trainingJSON);
            //this.fetchPDF(this.selectedTemplateName,this.pdfArr[0].link);
        }).catch(function (err) {
            _this.errorMessage = "Unable to fetch the PDFs matching the template - " + _this.selectedTemplateName;
        }).finally(function () {
            _this.isLoading = false;
        });
    };
    TrainComponent.prototype.fetchPDF = function (templateName, fileName) {
        var _this = this;
        this.templateService.fetchPDF(this.useCaseId, templateName, fileName).then(function (res) {
            var fileURL = URL.createObjectURL(res);
            _this.pdfSrc = fileURL;
        });
    };
    TrainComponent.prototype.buildForm = function (formData) {
        //Get form fields from JSON response
        this.fields = formData.fields;
        //Build Form fields. If scalar, user FormCtl else FormArray
        var fields = {};
        for (var key in this.fields) {
            var type = this.fields[key]["type"];
            this.fieldKeys.push({ name: key, type: type }); // For front end looping
            if (type === "scalar") {
                fields[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: false });
            }
            else if (type === "table") {
                fields[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([]);
            }
        }
        //Bind the controls created in the above step to the form
        this.trainFormGroup = this.formBuilder.group(fields);
        //Patch form to set default values
        for (var key in this.fields) {
            var type = this.fields[key]["type"];
            if (type === "table") {
                this.trainFormGroup.setControl(key, this.formBuilder.array(['']));
            }
        }
        //Prepping JSON response to be posted to API
        //this.trainingJSON = {"template_id":this.selectedTemplateName,"docs": []};
    };
    //Method to remove FormArray controls.
    TrainComponent.prototype.removeItem = function (name, i) {
        var control = this.trainFormGroup.controls[name];
        control.removeAt(i);
    };
    //Method to add FormArray controls
    TrainComponent.prototype.addItem = function (name) {
        var control = this.trainFormGroup.controls[name];
        control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
    };
    TrainComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.insertEntry(this.currID);
        this.middleware.postTrainModel(this.useCaseId, this.selectedTemplateName, this.trainingJSON).then(function (res) {
            if (res.status === 200) {
                if (res.body === "Success") {
                    window.alert("Training Successful");
                    _this.router.navigate(['home']);
                }
                else {
                    window.alert(res.body);
                }
            }
            else {
                window.alert('Error trying to post data to the server');
            }
        }).catch(function (err) {
            window.alert('Error trying to post data to the server');
        }).finally(function () {
            _this.isLoading = false;
        });
    };
    TrainComponent.prototype.pageRendered = function (e) {
        console.log('(page-rendered)', e);
        if (this.totalPages === 1) {
            this.showNext = false;
            this.showPrev = false;
        }
        this.isLoading = false;
    };
    TrainComponent.prototype.prevPDF = function (e) {
        this.currPage--;
        if (this.currPage === this.totalPages) {
            this.showNext = false;
        }
        else {
            this.showNext = true;
        }
        if (this.currPage !== 1) {
            this.showPrev = true;
        }
        else {
            this.showPrev = false;
        }
    };
    TrainComponent.prototype.nextPDF = function (e) {
        if (this.currPage <= this.totalPages) {
            this.currPage++;
        }
        if (this.currPage === this.totalPages) {
            this.showNext = false;
        }
        else {
            this.showNext = true;
        }
        if (this.currPage !== 1) {
            this.showPrev = true;
        }
    };
    TrainComponent.prototype.onProgress = function (progressData) {
        this.isPdfLoading = true;
        if (progressData.total !== undefined) {
            this.isPdfLoading = false;
        }
    };
    TrainComponent.prototype.callBackFn = function (pdf) {
        this.totalPages = Number(pdf._pdfInfo.numPages);
        // do anything with "pdf"
    };
    TrainComponent.prototype.initiliaseFormArray = function () {
        for (var key in this.trainFormGroup.controls) {
            if (this.trainFormGroup.controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]) {
                var formArray = this.trainFormGroup.controls[key];
                formArray.controls = [];
                formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
            }
        }
    };
    TrainComponent.prototype.autopopulate = function () {
        this.isLoading = true;
        //Clear existing Form data
        this.trainFormGroup.reset();
        //Reset FormArray from its prev state
        this.initiliaseFormArray();
        //let json = this.pdfArr[this.currID];
        this.populateform(this.pdfArr[this.currID]["learn"]);
        // if(json.hasOwnProperty('learn')){
        //   this.populateform(this.pdfArr[this.currID]["learn"])
        //   this.showAutopopulate = true;
        // }
        this.isLoading = false;
    };
    TrainComponent.prototype.saveAndClearForm = function () {
        //Add current form details to train JSON
        this.insertEntry(this.currID);
        //Reset form
        this.trainFormGroup.reset();
        //Remove unused Form Array controls from the form
        this.initiliaseFormArray();
    };
    TrainComponent.prototype.next = function () {
        this.resetPDFNav();
        this.isLoading = true;
        //Save the form content to JSON file and clear unused controls
        this.saveAndClearForm();
        //Increment the current id and bind the pdf to PDF viewer
        this.currID += 1;
        this.isPdfLoading = true;
        this.pdfSrc = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].public + this.pdfArr[this.currID].link;
        //this.fetchPDF(this.selectedTemplateName,this.pdfArr[this.currID].file_name)
        //Move on to next form and pre-populate the fields if they exist in final JSON
        if (this.trainingJSON["docs"][this.currID] !== undefined) {
            this.populateform(this.trainingJSON["docs"][this.currID]["learn"]);
        }
        this.isLoading = false;
    };
    TrainComponent.prototype.resetPDFNav = function () {
        this.showPrev = false;
        this.showNext = true;
        console.log(this.currPage, this.totalPages);
        this.currPage = 1;
        this.totalPages = 0;
    };
    TrainComponent.prototype.navigateFrom = function (formId) {
        this.resetPDFNav();
        this.isLoading = true;
        //Save the form content to JSON file and clear unused controls
        this.saveAndClearForm();
        //Increment the current id and bind the pdf to PDF viewer
        this.currID = formId;
        this.isPdfLoading = true;
        this.pdfSrc = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].public + this.pdfArr[this.currID].link;
        //this.fetchPDF(this.selectedTemplateName,this.pdfArr[this.currID].file_name)
        //Move on to next form and pre-populate the fields if they exist in final JSON
        console.log("Form no", this.currID);
        console.log("Form content", this.trainingJSON["docs"][this.currID]);
        if (this.trainingJSON["docs"][this.currID] !== undefined) {
            this.populateform(this.trainingJSON["docs"][this.currID]["learn"]);
        }
        this.isLoading = false;
    };
    TrainComponent.prototype.insertEntry = function (id) {
        // //Add keys to the final version of JSON
        // this.trainingJSON["docs"][id] = { "doc": "" , "learn": {}};
        // //Add the PDF template to the final version of JSON
        // this.trainingJSON["docs"][id]["doc"] = this.pdfArr[id].doc;
        var scalarValues = {};
        var tabularValues = {};
        //Group scalar and tabular values seperately. Insert the key value pair only if the value is not empty
        for (var key in this.trainFormGroup.value) {
            if (typeof this.trainFormGroup.value[key] === 'string' && this.trainFormGroup.value[key] !== '') {
                scalarValues[key] = { "type": "field", "value": this.trainFormGroup.value[key] };
            }
            else if (typeof this.trainFormGroup.value[key] === 'object' && this.trainFormGroup.value[key] !== null) {
                var valueArr = this.trainFormGroup.value[key];
                //Check if the entire array is empty. If not insert the key and array into JSON
                if (!(valueArr.length === valueArr.filter(function (item) { return (item === null || item === ''); }).length)) {
                    tabularValues[key] = { "type": "table", "values": this.trainFormGroup.value[key] };
                }
            }
        }
        //Insert the grouped fields into final JSON
        this.trainingJSON["docs"][id]["learn"] = { "fields": scalarValues, "table": {
                "fields": tabularValues
            } };
    };
    TrainComponent.prototype.resetForm = function () {
        this.trainFormGroup.reset();
    };
    TrainComponent.prototype.populateform = function (json) {
        this.trainFormGroup.reset();
        var scalarValues = json["fields"]; //Grab scalar values
        var tabularValues = json["table"]["fields"]; //Grab table values
        //Set values of scalar fields
        for (var key in scalarValues) {
            this.trainFormGroup.controls[key].setValue(scalarValues[key]["value"]);
        }
        // //Set values for tabular fields via looping through FormArray
        for (key in tabularValues) {
            var itemArray = tabularValues[key].values; //Grab array values 
            var formArray = this.trainFormGroup.controls[key]; //Grab FormArray for the field
            formArray.controls = [];
            //Loop and bind values
            if (itemArray !== undefined) {
                for (var i = 0; i < itemArray.length; i++) {
                    var control = this.trainFormGroup.controls[key];
                    control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](itemArray[i]));
                }
            }
        }
        this.isLoading = false;
    };
    TrainComponent.prototype.prev = function () {
        this.saveAndClearForm();
        this.currID--;
        this.resetPDFNav();
        this.isPdfLoading = true;
        this.pdfSrc = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].public + this.pdfArr[this.currID].link;
        this.populateform(this.trainingJSON["docs"][this.currID]["learn"]);
    };
    TrainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-train',
            template: __webpack_require__(/*! ./train.component.html */ "./src/app/components/train/train.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./train.component.scss */ "./src/app/components/train/train.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_train_service__WEBPACK_IMPORTED_MODULE_3__["TrainService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _home_services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _extract_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _train_landing_services_train_landing_service__WEBPACK_IMPORTED_MODULE_10__["TrainLandingService"]])
    ], TrainComponent);
    return TrainComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    usecaseId: '1',
    apiEndPoint: 'https://54.85.63.69/api/v1',
    public: 'https://54.85.63.69/',
    firebase: {
        apiKey: 'AIzaSyDP7ulefaLJ8fz5MXZZkoD9FzN5h6MI7sQ',
        authDomain: 'ml-acc.firebaseapp.com',
        databaseURL: 'https://ml-acc.firebaseio.com',
        projectId: 'ml-acc',
        storageBucket: 'ml-acc.appspot.com',
        messagingSenderId: '529743086184'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/anithagunasekaran/ml-accelerators/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/anithagunasekaran/ml-accelerators/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map