"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var admin_module_1 = require("app/admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.profileRoute.concat(_1.profilePopupRoute);
var FaeBooProfileModule = /** @class */ (function () {
    function FaeBooProfileModule() {
    }
    FaeBooProfileModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, admin_module_1.FaeBooAdminModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [
                _1.ProfileComponent,
                _1.ProfileDetailComponent,
                _1.ProfileUpdateComponent,
                _1.ProfileDeleteDialogComponent,
                _1.ProfileDeletePopupComponent
            ],
            entryComponents: [_1.ProfileComponent, _1.ProfileUpdateComponent, _1.ProfileDeleteDialogComponent, _1.ProfileDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooProfileModule);
    return FaeBooProfileModule;
}());
exports.FaeBooProfileModule = FaeBooProfileModule;
//# sourceMappingURL=profile.module.js.map