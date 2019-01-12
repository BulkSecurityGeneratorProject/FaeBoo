"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var friend_service_1 = require("./friend.service");
var FriendComponent = /** @class */ (function () {
    function FriendComponent(friendService, jhiAlertService, eventManager, principal) {
        this.friendService = friendService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    FriendComponent.prototype.loadAll = function () {
        var _this = this;
        this.friendService.query().subscribe(function (res) {
            _this.friends = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    FriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInFriends();
    };
    FriendComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    FriendComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    FriendComponent.prototype.registerChangeInFriends = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('friendListModification', function (response) { return _this.loadAll(); });
    };
    FriendComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    FriendComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-friend',
            templateUrl: './friend.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [friend_service_1.FriendService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], FriendComponent);
    return FriendComponent;
}());
exports.FriendComponent = FriendComponent;
//# sourceMappingURL=friend.component.js.map