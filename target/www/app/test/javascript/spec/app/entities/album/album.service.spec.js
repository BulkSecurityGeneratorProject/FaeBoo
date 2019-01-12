"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var operators_1 = require("rxjs/operators");
var album_service_1 = require("app/entities/album/album.service");
var album_model_1 = require("app/shared/model/album.model");
describe('Service Tests', function () {
    describe('Album Service', function () {
        var injector;
        var service;
        var httpMock;
        var elemDefault;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            injector = testing_1.getTestBed();
            service = injector.get(album_service_1.AlbumService);
            httpMock = injector.get(testing_2.HttpTestingController);
            elemDefault = new album_model_1.Album(0, 'AAAAAAA', 'AAAAAAA');
        });
        describe('Service methods', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                it('should find an element', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var returnedFromService, req;
                    return tslib_1.__generator(this, function (_a) {
                        returnedFromService = Object.assign({}, elemDefault);
                        service
                            .find(123)
                            .pipe(operators_1.take(1))
                            .subscribe(function (resp) { return expect(resp).toMatchObject({ body: elemDefault }); });
                        req = httpMock.expectOne({ method: 'GET' });
                        req.flush(JSON.stringify(returnedFromService));
                        return [2 /*return*/];
                    });
                }); });
                it('should create a Album', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var returnedFromService, expected, req;
                    return tslib_1.__generator(this, function (_a) {
                        returnedFromService = Object.assign({
                            id: 0
                        }, elemDefault);
                        expected = Object.assign({}, returnedFromService);
                        service
                            .create(new album_model_1.Album(null))
                            .pipe(operators_1.take(1))
                            .subscribe(function (resp) { return expect(resp).toMatchObject({ body: expected }); });
                        req = httpMock.expectOne({ method: 'POST' });
                        req.flush(JSON.stringify(returnedFromService));
                        return [2 /*return*/];
                    });
                }); });
                it('should update a Album', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var returnedFromService, expected, req;
                    return tslib_1.__generator(this, function (_a) {
                        returnedFromService = Object.assign({
                            name: 'BBBBBB',
                            description: 'BBBBBB'
                        }, elemDefault);
                        expected = Object.assign({}, returnedFromService);
                        service
                            .update(expected)
                            .pipe(operators_1.take(1))
                            .subscribe(function (resp) { return expect(resp).toMatchObject({ body: expected }); });
                        req = httpMock.expectOne({ method: 'PUT' });
                        req.flush(JSON.stringify(returnedFromService));
                        return [2 /*return*/];
                    });
                }); });
                it('should return a list of Album', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var returnedFromService, expected, req;
                    return tslib_1.__generator(this, function (_a) {
                        returnedFromService = Object.assign({
                            name: 'BBBBBB',
                            description: 'BBBBBB'
                        }, elemDefault);
                        expected = Object.assign({}, returnedFromService);
                        service
                            .query(expected)
                            .pipe(operators_1.take(1), operators_1.map(function (resp) { return resp.body; }))
                            .subscribe(function (body) { return expect(body).toContainEqual(expected); });
                        req = httpMock.expectOne({ method: 'GET' });
                        req.flush(JSON.stringify([returnedFromService]));
                        httpMock.verify();
                        return [2 /*return*/];
                    });
                }); });
                it('should delete a Album', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var rxPromise, req;
                    return tslib_1.__generator(this, function (_a) {
                        rxPromise = service.delete(123).subscribe(function (resp) { return expect(resp.ok); });
                        req = httpMock.expectOne({ method: 'DELETE' });
                        req.flush({ status: 200 });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        afterEach(function () {
            httpMock.verify();
        });
    });
});
//# sourceMappingURL=album.service.spec.js.map