import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: '../html/sensors.component.html',
    styleUrls: ['../css/sensors.component.css']
})
export class SensorsComponent{

    constructor(private router:Router){}

    goToSensorDetail(){
        let redirectUrl = ['sensor-detail'];
        this.router.navigate(redirectUrl);
    }
}