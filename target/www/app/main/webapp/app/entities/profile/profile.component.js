"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var profile_service_1 = require("./profile.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, jhiAlertService, eventManager, principal) {
        this.profileService = profileService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    ProfileComponent.prototype.loadAll = function () {
        var _this = this;
        this.profileService.query().subscribe(function (res) {
            _this.profiles = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInProfiles();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    ProfileComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    ProfileComponent.prototype.registerChangeInProfiles = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('profileListModification', function (response) { return _this.loadAll(); });
    };
    ProfileComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    ProfileComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-profile',
            templateUrl: './profile.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map