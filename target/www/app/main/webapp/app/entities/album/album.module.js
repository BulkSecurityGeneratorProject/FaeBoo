"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var admin_module_1 = require("app/admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.albumRoute.concat(_1.albumPopupRoute);
var FaeBooAlbumModule = /** @class */ (function () {
    function FaeBooAlbumModule() {
    }
    FaeBooAlbumModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, admin_module_1.FaeBooAdminModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [_1.AlbumComponent, _1.AlbumDetailComponent, _1.AlbumUpdateComponent, _1.AlbumDeleteDialogComponent, _1.AlbumDeletePopupComponent],
            entryComponents: [_1.AlbumComponent, _1.AlbumUpdateComponent, _1.AlbumDeleteDialogComponent, _1.AlbumDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooAlbumModule);
    return FaeBooAlbumModule;
}());
exports.FaeBooAlbumModule = FaeBooAlbumModule;
//# sourceMappingURL=album.module.js.map