import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {sensorDetailRoutingModule} from "./sensor-detail-routing.module";

import {HomeService} from "../../services/home.service";
import {HandleErrorService} from "../../services/handle-error.service";
import {SensorService} from "../../services/sensor.service";
import {AuthService} from "../../services/auth.service";

import {SensorsComponent} from "../components/sensors.component";
import {SensorDetailComponent} from "./components/sensor-detail.component";
import {SensorDetailHome} from "./components/sensor-detail-home.component";
import {SensorDetailView} from "./components/sensor-detail-view.component";
import {SensorDetailAdd} from "./components/sensor-detail-add.component";
import {SensorDetailDelete} from "./components/sensor-detail-delete.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        sensorDetailRoutingModule

    ],
    declarations: [
        SensorsComponent,
        SensorDetailComponent,
        SensorDetailHome,
        SensorDetailView,
        SensorDetailAdd,
        SensorDetailDelete
    ],
    providers: [HomeService,
        HandleErrorService,
        SensorService,
        AuthService]
})
export class SensorDetailModule { }
