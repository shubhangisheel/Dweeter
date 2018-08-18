"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('../rxjs-operators');
var handle_error_service_1 = require("./handle-error.service");
var HomeService = (function () {
    function HomeService(http, handleErrorService) {
        this.http = http;
        this.handleErrorService = handleErrorService;
        this.headers = new http_1.Headers({ 'content-type': 'application/json' });
        this.showGetLatestResponse = false;
        this.showGetAllResponse = false;
        this.url = 'localhost:8080/api/${this.thingName}/add/';
        this.keyValues = [{ key: '', value: '' }];
    }
    HomeService.prototype.addKey = function () {
        this.keyValues.push({ key: '', value: '' });
    };
    HomeService.prototype.onPost = function (thingNameDuplicate) {
        var postUrl = "http://localhost:8080/api/" + thingNameDuplicate + "/add";
        var params = new http_1.URLSearchParams();
        this.keyValues.forEach(function (item) {
            params.set(item.key, item.value);
        });
        return this.http.get(postUrl, { search: params })
            .map(this.extractData)
            .catch(this.handleErrorService.handleError);
    };
    HomeService.prototype.extractData = function (res) {
        console.log("Deubg: in extractData : res.json : ", res.json());
        var body = res.json();
        return body.data || {};
    };
    HomeService.prototype.onGetLatest = function (thingNameDuplicate) {
        var getLatestUrl = "http://localhost:8080/api/" + thingNameDuplicate + "/latest";
        return this.http.get(getLatestUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorService.handleError);
    };
    HomeService.prototype.onGetAll = function (thingNameDuplicate) {
        var getAllUrl = "http://localhost:8080/api/" + thingNameDuplicate;
        return this.http.get(getAllUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorService.handleError);
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, handle_error_service_1.HandleErrorService])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map