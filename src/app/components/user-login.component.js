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
/**
 * Created by shubhangisheel on 2016-10-17.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require("../services/auth.service");
var UserLoginComponent = (function () {
    function UserLoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authResponse = true;
        this.setMessage();
    }
    UserLoginComponent.prototype.setMessage = function () {
        this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.userName, this.password)
            .subscribe(function (data) {
            _this.authResponse = data,
                console.log("Debug: In login() loginResponse is : ", _this.authResponse);
        }, function (err) { return _this.errorMessage = err; });
    };
    UserLoginComponent.prototype.loginTest = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.loginTest(this.userName, this.password)
            .subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                console.log("Debug: user-login.component : loginTest: inside if ");
                var redirect = _this.authService.redirectUrl;
                _this.router.navigate([redirect]);
            }
            else {
                console.log("Debug: user-login.component : loginTest: inside else ");
                _this.authResponse = false;
                _this.message = "User name and password do not match";
            }
        });
    };
    UserLoginComponent.prototype.goToSignUp = function () {
        var link = ['./Sign-up'];
        this.router.navigate(link);
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'user-login',
            templateUrl: '../html/user-login.component.html',
            styleUrls: [('../css/user-login.component.css')]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map