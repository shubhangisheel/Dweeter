/**
 * Created by shubhangisheel on 2016-10-19.
 */
import {Component, OnInit} from '@angular/core';

import {Sensor} from '../../model/sensor';
import {SensorDetailComponent} from '../sensor-details/components/sensor-detail.component';

import {SensorService} from '../../services/sensor.service';

@Component({
    selector: 'user-home',
    templateUrl:'../html/user-home.component.html',
    styleUrls: ['../css/user-home.component.css'],
    providers:[SensorService]
})
export class UserHomeComponent implements OnInit{
    public userName: string;
    public emailId: any;
    public userContact: number;
    public sensorList: Sensor[];
    public FriendList: string[];
    public selectedSensor: Sensor;

    constructor(
        private sensorService: SensorService
    ){}

    ngOnInit(){
        this.getSensorList();
    }

    getSensorList(){

    }

    getFriendList(){

    }

    goToDetail(sensor: Sensor){

    }

    deleteSensor(sensor: Sensor){

    }

}