/**
 * Created by shubhangisheel on 2016-10-10.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'secure-data',
  templateUrl: '../html/secure-data.component.html',
  styleUrls: ['../css/secure-data.component.css']
})

export class SecureDataComponent{
  public thingID: string;
  public key:string;
  public value: string;

  public showPostResponse: boolean = false;
  public showGetResponse : boolean= false;

  onPost(){

    this.showPostResponse = true;
  }

  onGet(){
    this.showGetResponse = true;
  }
}
