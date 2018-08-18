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
var router_1 = require('@angular/router');
var user_home_component_1 = require("./components/user-home.component");
var add_sensor_component_1 = require("./components/add-sensor.component");
var delete_sensor_component_1 = require("./components/delete-sensor.component");
var edit_sensor_component_1 = require("./components/edit-sensor.component");
var user_detail_component_1 = require("./components/user-detail.component");
var sensors_component_1 = require("./components/sensors.component");
var userRoutes = [
    {
        path: 'user',
        component: user_home_component_1.UserHomeComponent,
        children: [
            { path: '', component: user_detail_component_1.UserDetailComponent },
            { path: 'home', component: user_detail_component_1.UserDetailComponent },
            { path: 'sensors', component: sensors_component_1.SensorsComponent },
            { path: 'addSensor', component: add_sensor_component_1.AddSensorComponent },
            { path: 'deleteSensor', component: delete_sensor_component_1.DeleteSensorComponent },
            { path: 'editsensor', component: edit_sensor_component_1.EditSensorComponent }
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(userRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map