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
var home_service_1 = require("../services/home.service");
var sensor_service_1 = require("../services/sensor.service");
var auth_service_1 = require("../services/auth.service");
var handle_error_service_1 = require("../services/handle-error.service");
var user_home_component_1 = require("./components/user-home.component");
var add_sensor_component_1 = require("./components/add-sensor.component");
var edit_sensor_component_1 = require("./components/edit-sensor.component");
var delete_sensor_component_1 = require("./components/delete-sensor.component");
var user_detail_component_1 = require("./components/user-detail.component");
var user_routing_module_1 = require("./user-routing.module");
var sensor_detail_module_1 = require("./sensor-details/sensor-detail.module");
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                user_routing_module_1.UserRoutingModule,
                sensor_detail_module_1.SensorDetailModule
            ],
            declarations: [
                user_home_component_1.UserHomeComponent,
                add_sensor_component_1.AddSensorComponent,
                edit_sensor_component_1.EditSensorComponent,
                delete_sensor_component_1.DeleteSensorComponent,
                user_detail_component_1.UserDetailComponent
            ],
            providers: [home_service_1.HomeService,
                handle_error_service_1.HandleErrorService,
                sensor_service_1.SensorService,
                auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map