import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserSignUpComponent} from './components/user-sign-up.component';
import {HomeContentComponent} from './components/home-content.component';
import {UserLoginComponent} from "./components/user-login.component";
import {UserHomeComponent} from "./user/components/user-home.component";
import {AddSensorComponent} from "./user/components/add-sensor.component";
import {EditSensorComponent} from "./user/components/edit-sensor.component";
import {DeleteSensorComponent} from "./user/components/delete-sensor.component";
import {SensorDetailComponent} from "./user/sensor-details/components/sensor-detail.component";

const appRoutes: Routes = [

  {path:'',component : HomeContentComponent},
  {path: 'Login', component: UserLoginComponent},
  {path:'Sign-up', component: UserSignUpComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class IotOrchardRoutingModule { }
