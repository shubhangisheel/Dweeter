import {Component} from '@angular/core';
import {Sensor} from "../../model/sensor";

@Component({
    selector:'add-sensor',
    templateUrl: '../html/add-sensor.component.html',
    styleUrls:['../css/add-sensor.component.css']
})
export class AddSensorComponent{
    public sensorName: string;
    public sensorType: string;
    public sensorLocation: string;

    onAddSensor(){
        this.updateSensorList();
    }

    updateSensorList(){

    }
}