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
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var sensor_detail_routing_module_1 = require("./sensor-detail-routing.module");
var home_service_1 = require("../../services/home.service");
var handle_error_service_1 = require("../../services/handle-error.service");
var sensor_service_1 = require("../../services/sensor.service");
var auth_service_1 = require("../../services/auth.service");
var sensors_component_1 = require("../components/sensors.component");
var sensor_detail_component_1 = require("./components/sensor-detail.component");
var sensor_detail_home_component_1 = require("./components/sensor-detail-home.component");
var sensor_detail_view_component_1 = require("./components/sensor-detail-view.component");
var sensor_detail_add_component_1 = require("./components/sensor-detail-add.component");
var sensor_detail_delete_component_1 = require("./components/sensor-detail-delete.component");
var SensorDetailModule = (function () {
    function SensorDetailModule() {
    }
    SensorDetailModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                sensor_detail_routing_module_1.sensorDetailRoutingModule
            ],
            declarations: [
                sensors_component_1.SensorsComponent,
                sensor_detail_component_1.SensorDetailComponent,
                sensor_detail_home_component_1.SensorDetailHome,
                sensor_detail_view_component_1.SensorDetailView,
                sensor_detail_add_component_1.SensorDetailAdd,
                sensor_detail_delete_component_1.SensorDetailDelete
            ],
            providers: [home_service_1.HomeService,
                handle_error_service_1.HandleErrorService,
                sensor_service_1.SensorService,
                auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [])
    ], SensorDetailModule);
    return SensorDetailModule;
}());
exports.SensorDetailModule = SensorDetailModule;
//# sourceMappingURL=sensor-detail.module.js.map