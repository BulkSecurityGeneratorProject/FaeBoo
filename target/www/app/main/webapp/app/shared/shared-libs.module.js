"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var ngx_cookie_1 = require("ngx-cookie");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var FaeBooSharedLibsModule = /** @class */ (function () {
    function FaeBooSharedLibsModule() {
    }
    FaeBooSharedLibsModule_1 = FaeBooSharedLibsModule;
    FaeBooSharedLibsModule.forRoot = function () {
        return {
            ngModule: FaeBooSharedLibsModule_1
        };
    };
    var FaeBooSharedLibsModule_1;
    FaeBooSharedLibsModule = FaeBooSharedLibsModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [ng_bootstrap_1.NgbModule.forRoot(), ngx_infinite_scroll_1.InfiniteScrollModule, ngx_cookie_1.CookieModule.forRoot(), angular_fontawesome_1.FontAwesomeModule],
            exports: [forms_1.FormsModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, ng_jhipster_1.NgJhipsterModule, ngx_infinite_scroll_1.InfiniteScrollModule, angular_fontawesome_1.FontAwesomeModule]
        })
    ], FaeBooSharedLibsModule);
    return FaeBooSharedLibsModule;
}());
exports.FaeBooSharedLibsModule = FaeBooSharedLibsModule;
//# sourceMappingURL=shared-libs.module.js.map