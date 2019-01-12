"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var __1 = require("../");
var login_modal_service_1 = require("../login/login-modal.service");
var state_storage_service_1 = require("./state-storage.service");
var UserRouteAccessService = /** @class */ (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        // We need to call the checkLogin / and so the principal.identity() function, to ensure,
        // that the client has a principal too, if they already logged in by the server.
        // This could happen on a page refresh.
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (!authorities || authorities.length === 0) {
                return true;
            }
            if (account) {
                return principal.hasAnyAuthority(authorities).then(function (response) {
                    if (response) {
                        return true;
                    }
                    if (core_1.isDevMode()) {
                        console.error('User has not any of required authorities: ', authorities);
                    }
                    return false;
                });
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['accessdenied']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    _this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    UserRouteAccessService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            login_modal_service_1.LoginModalService,
            __1.Principal,
            state_storage_service_1.StateStorageService])
    ], UserRouteAccessService);
    return UserRouteAccessService;
}());
exports.UserRouteAccessService = UserRouteAccessService;
//# sourceMappingURL=user-route-access-service.js.map