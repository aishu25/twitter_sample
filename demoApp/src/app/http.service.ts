import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
// import { ProfileComponent } from './profile/profile.component';

@Injectable()

export class HttpService {
	localTime = new Date();
  	year = this.localTime.getFullYear();
  	month = this.localTime.getMonth() +1;
  	date = this.localTime.getDate();
  	hours = this.localTime .getHours();
  	minutes = this.localTime .getMinutes();
  	seconds = this.localTime .getSeconds();
  	ampm = this.hours >= 12 ? 'PM' : 'AM';
 	dateval =this.month+"/"+this.date+"/"+this.year+" "+this.hours+":"+this.minutes+":"+ this.ampm;
 	URL: string = environment.serverUrl


  constructor(private _http: HttpClient) { 

  }

  getData() {
  	let url = this.URL + "/profile";
  	return this._http.get(url);
  }
  getTweets(){
  	let url = this.URL + "/feed";
  	return this._http.get(url);
  }
  addPost(data){
  	let url = this.URL + "/feed";
  	return this._http.post(url, 
  		{"name":"Aish","handle":"aishu","date": this.dateval,"tweet": data});
  }
}
