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
 * Created by shubhangisheel on 2016-10-09.
 */
var core_1 = require('@angular/core');
var home_service_1 = require('../services/home.service');
require('../rxjs-operators');
var SimpleGetPostComponent = (function () {
    function SimpleGetPostComponent(homeService) {
        this.homeService = homeService;
        this.showPostResponse = false;
        this.showGetLatestResponse = this.homeService.showGetLatestResponse;
        this.showGetAllResponse = this.homeService.showGetAllResponse;
        this.getLatestResponse = this.homeService.getLatestResponse;
        this.getAllResponse = this.homeService.getAllResponse;
        // private url = 'localhost:8080/api/${this.thingName}/add/';
        //
        this.keyValues = this.homeService.keyValues;
    }
    SimpleGetPostComponent.prototype.addKey = function () {
        this.homeService.keyValues.push({ key: '', value: '' });
    };
    SimpleGetPostComponent.prototype.onPost = function () {
        var _this = this;
        this.homeService.onPost(this.thingName)
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Debug: actualData : ", _this.postResponse); });
        this.showPostResponse = true;
    };
    SimpleGetPostComponent.prototype.onGetLatest = function () {
        var _this = this;
        this.homeService.onGetLatest(this.thingName)
            .subscribe(function (data) {
            _this.getLatestResponse = data;
            console.log("Debug: data : ", data);
        }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Debug: actual data getLatest : ", _this.getLatestResponse); });
        this.showGetLatestResponse = true;
    };
    SimpleGetPostComponent.prototype.onGetAll = function () {
        var _this = this;
        this.homeService.onGetAll(this.thingName)
            .subscribe(function (data) {
            _this.getAllResponse = data;
            console.log("Debug: in getALL : data ", data);
        }, function (err) { return _this.errorMessage = err; }, function () { return console.log("Debug: getAll data is : ", _this.getAllResponse); });
        this.showGetAllResponse = true;
    };
    SimpleGetPostComponent = __decorate([
        core_1.Component({
            selector: 'simple-get-post',
            templateUrl: '../html/simple-get-post.component.html',
            styleUrls: ['../css/simple-get-post.component.css']
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], SimpleGetPostComponent);
    return SimpleGetPostComponent;
}());
exports.SimpleGetPostComponent = SimpleGetPostComponent;
//# sourceMappingURL=simple-get-post.component.js.map