/**
 * Created by shubhangisheel on 2016-10-17.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {userInfo} from "os";
import {HandleErrorService} from "../services/handle-error.service";

@Component({
   selector: 'user-login',
   templateUrl: '../html/user-login.component.html',
   styleUrls: [('../css/user-login.component.css')]
})
export class UserLoginComponent{
   public userName: string;
   public password: any;
   public authResponse : boolean = true;
   public errorMessage: any;
   public message:string;

   constructor(private router: Router,
               private authService: AuthService
               ){
      this.setMessage();
   }

   setMessage(){
      this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out" );
   }

   login(){
      this.authService.login(this.userName,this.password)
          .subscribe(
              data=>{this.authResponse = data,
                  console.log("Debug: In login() loginResponse is : ", this.authResponse)},
              err => this.errorMessage = err
          );
   }

   loginTest(){

      this.message = 'Trying to log in ...';

      this.authService.loginTest(this.userName,this.password)
          .subscribe(
              () => {
                 this.setMessage();

                 if(this.authService.isLoggedIn){
                    console.log("Debug: user-login.component : loginTest: inside if ");
                    let redirect = this.authService.redirectUrl;
                    this.router.navigate([redirect]);

                 }
                 else{
                    console.log("Debug: user-login.component : loginTest: inside else ");
                    this.authResponse = false;
                    this.message = "User name and password do not match";
                 }

              }
          );
   }

   goToSignUp(){
      let link = ['./Sign-up'];
      this.router.navigate(link);
   }
}