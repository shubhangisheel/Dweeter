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
var sensor_detail_component_1 = require("./components/sensor-detail.component");
var sensor_detail_home_component_1 = require("./components/sensor-detail-home.component");
var sensor_detail_view_component_1 = require("./components/sensor-detail-view.component");
var sensor_detail_add_component_1 = require("./components/sensor-detail-add.component");
var sensor_detail_delete_component_1 = require("./components/sensor-detail-delete.component");
var sensorDetailRoutes = [
    {
        path: 'sensor-detail',
        component: sensor_detail_component_1.SensorDetailComponent,
        children: [
            { path: '', component: sensor_detail_home_component_1.SensorDetailHome },
            { path: 'sensor-home', component: sensor_detail_home_component_1.SensorDetailHome },
            { path: 'view', component: sensor_detail_view_component_1.SensorDetailView },
            { path: 'add', component: sensor_detail_add_component_1.SensorDetailAdd },
            { path: 'delete', component: sensor_detail_delete_component_1.SensorDetailDelete }
        ]
    }
];
var sensorDetailRoutingModule = (function () {
    function sensorDetailRoutingModule() {
    }
    sensorDetailRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(sensorDetailRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], sensorDetailRoutingModule);
    return sensorDetailRoutingModule;
}());
exports.sensorDetailRoutingModule = sensorDetailRoutingModule;
//# sourceMappingURL=sensor-detail-routing.module.js.map