import {Injectable} from '@angular/core';

import {Http, Headers, URLSearchParams, Response} from '@angular/http';

import '../rxjs-operators';

import {Observable} from 'rxjs/Observable';

import {keyValues} from '../model/keyValues';
import {HandleErrorService} from "./handle-error.service";



@Injectable()
export class HomeService{

    public thingName: string;
    private headers = new Headers({'content-type': 'application/json'});
    public showGetLatestResponse: boolean = false;
    public showGetAllResponse: boolean = false;
    public postResponse: any;
    public getLatestResponse: any;
    public getAllResponse: any;
    private url = 'localhost:8080/api/${this.thingName}/add/';
    public keyValues: keyValues[] = [{key: '', value: ''}];

    constructor(private http: Http,
                private handleErrorService: HandleErrorService) {
    }

    addKey() {
        this.keyValues.push({key: '', value: ''});
    }

    onPost(thingNameDuplicate: string): Observable<any> {

        const postUrl = `http://localhost:8080/api/${thingNameDuplicate}/add`;
        let params: URLSearchParams = new URLSearchParams();

        this.keyValues.forEach(item => {
            params.set(item.key, item.value);
        });

        return this.http.get(postUrl, {search: params})
            .map(this.extractData)
            .catch(this.handleErrorService.handleError);
    }

    private extractData(res: Response) {
        console.log("Deubg: in extractData : res.json : ", res.json());
        let body = res.json();
        return body.data || {};
    }

    onGetLatest(thingNameDuplicate: string): Observable<any> {

        let getLatestUrl = `http://localhost:8080/api/${thingNameDuplicate}/latest`;

        return this.http.get(getLatestUrl)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

    onGetAll(thingNameDuplicate: string): Observable<any> {

        let getAllUrl = `http://localhost:8080/api/${thingNameDuplicate}`;

        return this.http.get(getAllUrl)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }




}