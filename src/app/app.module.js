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
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require('./components/app.component');
var home_content_component_1 = require('./components/home-content.component');
var simple_get_post_component_1 = require('./components/simple-get-post.component');
var secure_data_component_1 = require('./components/secure-data.component');
var user_sign_up_component_1 = require('./components/user-sign-up.component');
var user_login_component_1 = require("./components/user-login.component");
var key_value_pipe_1 = require('./components/key-value.pipe');
var home_service_1 = require("./services/home.service");
var sensor_service_1 = require("./services/sensor.service");
var auth_service_1 = require("./services/auth.service");
var handle_error_service_1 = require("./services/handle-error.service");
var user_module_1 = require("./user/user.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_content_component_1.HomeContentComponent,
                simple_get_post_component_1.SimpleGetPostComponent,
                secure_data_component_1.SecureDataComponent,
                user_sign_up_component_1.UserSignUpComponent,
                user_login_component_1.UserLoginComponent,
                key_value_pipe_1.KeyValuePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.IotOrchardRoutingModule,
                user_module_1.UserModule
            ],
            providers: [home_service_1.HomeService,
                handle_error_service_1.HandleErrorService,
                sensor_service_1.SensorService,
                auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map