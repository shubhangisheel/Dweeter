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
var rxjs_1 = require("rxjs");
var handle_error_service_1 = require("./handle-error.service");
/* This service validates user login using http get request and returns an observale to
 * user-login.component */
var AuthService = (function () {
    function AuthService(http, handleErrorService) {
        this.http = http;
        this.handleErrorService = handleErrorService;
        this.isLoggedIn = false;
        /* TODO: append user id in url */
        this.redirectUrl = "/user";
    }
    /* TODO: update loginUrl */
    /*Login function for user authentication*/
    AuthService.prototype.login = function (userName, password) {
        var loginUrl = "";
        var params = new http_1.URLSearchParams();
        params.set(userName, password);
        return this.http.get(loginUrl, { search: params })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorService.handleError);
    };
    AuthService.prototype.loginTest = function (userName, password) {
        var _this = this;
        console.log("Debug: Authservice : loginTest");
        return rxjs_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, handle_error_service_1.HandleErrorService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map