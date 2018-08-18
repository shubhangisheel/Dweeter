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
 * Created by shubhangisheel on 2016-10-10.
 */
var core_1 = require('@angular/core');
var SecureDataComponent = (function () {
    function SecureDataComponent() {
        this.showPostResponse = false;
        this.showGetResponse = false;
    }
    SecureDataComponent.prototype.onPost = function () {
        this.showPostResponse = true;
    };
    SecureDataComponent.prototype.onGet = function () {
        this.showGetResponse = true;
    };
    SecureDataComponent = __decorate([
        core_1.Component({
            selector: 'secure-data',
            templateUrl: '../html/secure-data.component.html',
            styleUrls: ['../css/secure-data.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SecureDataComponent);
    return SecureDataComponent;
}());
exports.SecureDataComponent = SecureDataComponent;
//# sourceMappingURL=secure-data.component.js.map