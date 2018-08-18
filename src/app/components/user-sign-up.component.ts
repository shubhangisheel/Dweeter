/**
 * Created by shubhangisheel on 2016-10-11.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'user-sign-up',
  templateUrl: '../html/user-sign-up.component.html',
  styleUrls: ['../css/user-sign-up.component.css']
})
export class UserSignUpComponent{
    public userName: string;
    public signUpPassword: any;
    public firstName: string;
    public lastName:string;
    public email: string;
    public reEnterEmail:string;

  onSignUp(){

  }
}
