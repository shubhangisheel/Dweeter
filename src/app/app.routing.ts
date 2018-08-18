// /**
//  * Created by shubhangisheel on 2016-10-11.
//  */
// import {ModuleWithProviders} from '@angular/core';
// import {Routes, RouterModule} from '@angular/router';
//
// import {UserSignUpComponent} from './components/user-sign-up.component';
// import {HomeContentComponent} from './components/home-content.component';
// import {UserLoginComponent} from "./components/user-login.component";
// import {UserHomeComponent} from "./components/user-home.component";
// import {AddSensorComponent} from "./components/add-sensor.component";
// import {EditSensorComponent} from "./components/edit-sensor.component";
// import {DeleteSensorComponent} from "./components/delete-sensor.component";
// import {SensorDetailComponent} from "./components/sensor-detail.component";
//
// const appRoutes: Routes = [
//
//   {path:'',component : HomeContentComponent},
//   {path: 'Login', component: UserLoginComponent},
//   {path:'Sign-up', component: UserSignUpComponent},
//
//   /* TODO: add user name in the url */
//   {path: 'user', component: UserHomeComponent,
//     children: [
//         {path: 'add-sensor' , component: AddSensorComponent},
//         {path: 'edit-sensor', component: EditSensorComponent},
//         {path: 'delete-sensor', component: DeleteSensorComponent},
//         {path: 'sensor-detail', component: SensorDetailComponent}
//       ]
//   }
//
//
// ];
//
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//
//
// /* Code before implementing app-routing.module.ts */