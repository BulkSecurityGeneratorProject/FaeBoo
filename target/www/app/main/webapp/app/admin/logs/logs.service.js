"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var LogsService = /** @class */ (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put(app_constants_1.SERVER_API_URL + 'management/logs', log, { observe: 'response' });
    };
    LogsService.prototype.findAll = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'management/logs', { observe: 'response' });
    };
    LogsService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], LogsService);
    return LogsService;
}());
exports.LogsService = LogsService;
//# sourceMappingURL=logs.service.js.map