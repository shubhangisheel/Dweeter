/**
 * Created by shubhangisheel on 2016-10-09.
 */
import {Component} from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import {keyValues} from '../model/keyValues';
import {KeyValuePipe} from './key-value.pipe';
import {HomeService} from '../services/home.service';

import '../rxjs-operators';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'simple-get-post',
    templateUrl: '../html/simple-get-post.component.html',
    styleUrls: ['../css/simple-get-post.component.css']
})
export class SimpleGetPostComponent {

    public thingName :string;
    public showPostResponse: boolean=false;
    public showGetLatestResponse = this.homeService.showGetLatestResponse;
    public showGetAllResponse = this.homeService.showGetAllResponse;
    public postResponse : any;
    public getLatestResponse = this.homeService.getLatestResponse;
    public getAllResponse = this.homeService.getAllResponse;
    public errorMessage: any;

    // private url = 'localhost:8080/api/${this.thingName}/add/';
    //
    public keyValues: keyValues[] = this.homeService.keyValues;

    constructor(private homeService: HomeService) {
    }

    addKey() {
        this.homeService.keyValues.push({key: '', value: ''});
    }

    onPost(): void {

        this.homeService.onPost(this.thingName)
            .subscribe(
                data => this.postResponse = data,
                err => this.errorMessage = err,
                () => console.log("Debug: actualData : ", this.postResponse)
            );
        this.showPostResponse=true;
    }

    onGetLatest() {
        this.homeService.onGetLatest(this.thingName)
            .subscribe(
                data=> {
                    this.getLatestResponse = data;
                    console.log("Debug: data : ", data)
                },
                err=>this.errorMessage=err,
                ()=>console.log("Debug: actual data getLatest : ", this.getLatestResponse)
            );

        this.showGetLatestResponse = true;

    }

    onGetAll() {

        this.homeService.onGetAll(this.thingName)
            .subscribe(
                data => {
                    this.getAllResponse = data;
                    console.log("Debug: in getALL : data ", data)
                },
                err => this.errorMessage = err,
                ()=>console.log("Debug: getAll data is : ",this.getAllResponse)
            );

        this.showGetAllResponse = true;
    }
}
