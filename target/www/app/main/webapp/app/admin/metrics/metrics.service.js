"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var JhiMetricsService = /** @class */ (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'management/metrics');
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'management/threaddump');
    };
    JhiMetricsService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], JhiMetricsService);
    return JhiMetricsService;
}());
exports.JhiMetricsService = JhiMetricsService;
//# sourceMappingURL=metrics.service.js.map