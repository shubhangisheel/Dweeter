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
 * Created by shubhangisheel on 2016-10-19.
 */
var core_1 = require('@angular/core');
var sensor_service_1 = require('../../services/sensor.service');
var UserHomeComponent = (function () {
    function UserHomeComponent(sensorService) {
        this.sensorService = sensorService;
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        this.getSensorList();
    };
    UserHomeComponent.prototype.getSensorList = function () {
    };
    UserHomeComponent.prototype.getFriendList = function () {
    };
    UserHomeComponent.prototype.goToDetail = function (sensor) {
    };
    UserHomeComponent.prototype.deleteSensor = function (sensor) {
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            selector: 'user-home',
            templateUrl: '../html/user-home.component.html',
            styleUrls: ['../css/user-home.component.css'],
            providers: [sensor_service_1.SensorService]
        }), 
        __metadata('design:paramtypes', [sensor_service_1.SensorService])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user-home.component.js.map