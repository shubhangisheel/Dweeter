import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {IotOrchardRoutingModule} from "./app-routing.module";

import { AppComponent } from './components/app.component';
import {HomeContentComponent} from './components/home-content.component';
import {SimpleGetPostComponent} from './components/simple-get-post.component';
import {SecureDataComponent} from './components/secure-data.component';
import {UserSignUpComponent} from './components/user-sign-up.component';
import {UserLoginComponent} from "./components/user-login.component";
import {UserHomeComponent} from "./user/components/user-home.component";
import {AddSensorComponent} from "./user/components/add-sensor.component";
import {EditSensorComponent} from "./user/components/edit-sensor.component";

import {KeyValuePipe} from './components/key-value.pipe';

import {HomeService} from "./services/home.service";
import {SensorService} from "./services/sensor.service";
import {AuthService} from "./services/auth.service";
import {HandleErrorService} from "./services/handle-error.service";
import {DeleteSensorComponent} from "./user/components/delete-sensor.component";
import {SensorDetailComponent} from "./user/sensor-details/components/sensor-detail.component";

import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    SimpleGetPostComponent,
    SecureDataComponent,
    UserSignUpComponent,
    UserLoginComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IotOrchardRoutingModule,
    UserModule
  ],
  providers: [HomeService,
              HandleErrorService,
              SensorService,
              AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
