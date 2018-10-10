import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import { ActivatedRoute, Router } from '@angular/router';

// declare var $:JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'demoApp';
  followers : "";
  following : "";
  name : "";
  image : "";
  tweetsData: "";
  tweets : {};
  postData: any;
  errors: any;

  // $("#myBtn")

  constructor (private _httpService: HttpService,
  			   private _route: ActivatedRoute, 
  			   private _router: Router) { };
  ngOnInit() {
  	this.getProfileData();
  	this.getTweetsData();
  }
  
  getProfileData(){
  	let obs = this._httpService.getData();
  	obs.subscribe(data => {
  		this.followers = data["followers"];
  		this.following = data["following"];
  		this.name = data["name"];
  		this.image = data["imageUrl"];
  		this.tweetsData = data["tweets"]
  	})
  }

  getTweetsData(){
  	let obs = this._httpService.getTweets();
  	obs.subscribe(data => {
  		this.tweets = data 
  	})
  }
  newPost(){
  	let obs = this._httpService.addPost(this.postData);
	obs.subscribe(data => {
    console.log("data : ", data)
		this._router.navigate(['/'])
		this.getTweetsData(); // updating in the Recent tweets
		this.postData = ''; //making the form value empty again
	})
  }
}
