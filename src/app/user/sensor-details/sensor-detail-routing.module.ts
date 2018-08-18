import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SensorDetailComponent} from "./components/sensor-detail.component";
import {SensorDetailHome} from "./components/sensor-detail-home.component";
import {SensorDetailView} from "./components/sensor-detail-view.component";
import {SensorDetailAdd} from "./components/sensor-detail-add.component";
import {SensorDetailDelete} from "./components/sensor-detail-delete.component";


const sensorDetailRoutes: Routes = [

    {
        path: 'sensor-detail',
        component: SensorDetailComponent,

        children: [
            {path: '', component: SensorDetailHome},
            {path: 'sensor-home', component:SensorDetailHome},
            {path: 'view', component: SensorDetailView},
            {path: 'add', component: SensorDetailAdd},
            {path: 'delete', component: SensorDetailDelete}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(sensorDetailRoutes)],
    exports: [RouterModule]
})
export class sensorDetailRoutingModule { }
