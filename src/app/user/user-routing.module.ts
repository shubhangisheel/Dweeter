import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserHomeComponent} from "./components/user-home.component";
import {SensorDetailComponent} from "./sensor-details/components/sensor-detail.component";
import {AddSensorComponent} from "./components/add-sensor.component";
import {DeleteSensorComponent} from "./components/delete-sensor.component";
import {EditSensorComponent} from "./components/edit-sensor.component";
import {UserDetailComponent} from "./components/user-detail.component";
import {SensorsComponent} from "./components/sensors.component";

const userRoutes: Routes = [

    {
        path: 'user',
        component: UserHomeComponent,

        children: [
            {path: '', component: UserDetailComponent},
            {path: 'home', component:UserDetailComponent},
            {path: 'sensors', component: SensorsComponent},
            {path: 'addSensor', component: AddSensorComponent},
            {path: 'deleteSensor', component: DeleteSensorComponent},
            {path: 'editsensor', component: EditSensorComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
