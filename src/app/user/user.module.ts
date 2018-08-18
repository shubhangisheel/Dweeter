import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HomeService} from "../services/home.service";
import {SensorService} from "../services/sensor.service";
import {AuthService} from "../services/auth.service";
import {HandleErrorService} from "../services/handle-error.service";

import {UserHomeComponent} from "./components/user-home.component";
import {AddSensorComponent} from "./components/add-sensor.component";
import {EditSensorComponent} from "./components/edit-sensor.component";
import {DeleteSensorComponent} from "./components/delete-sensor.component";
import {UserDetailComponent} from "./components/user-detail.component";

import {UserRoutingModule} from "./user-routing.module";

import {SensorDetailModule} from "./sensor-details/sensor-detail.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserRoutingModule,
        SensorDetailModule
    ],
    declarations: [
        UserHomeComponent,
        AddSensorComponent,
        EditSensorComponent,
        DeleteSensorComponent,
        UserDetailComponent
    ],
    providers: [HomeService,
        HandleErrorService,
        SensorService,
        AuthService]
})
export class UserModule { }
