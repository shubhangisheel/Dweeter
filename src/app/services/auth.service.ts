import {Injectable} from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';

import {Observable} from "rxjs";
import {HandleErrorService} from "./handle-error.service";

/* This service validates user login using http get request and returns an observale to
 * user-login.component */

@Injectable()
export class AuthService{

    public isLoggedIn : boolean = false;

    /* TODO: append user id in url */
    public redirectUrl = `/user`;

    constructor(private http:Http,
                private handleErrorService: HandleErrorService){}

    /* TODO: update loginUrl */
    /*Login function for user authentication*/

    login(userName: string, password: any): Observable<any>{
        let loginUrl = ``;
        let params: URLSearchParams = new URLSearchParams();
        params.set(userName, password);

        return this.http.get(loginUrl, {search: params})
                        .map(res => res.json())
                        .catch(this.handleErrorService.handleError);

    }

    loginTest(userName: string, password:any): Observable<boolean>{
        console.log("Debug: Authservice : loginTest");
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }
}


