import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.getProfileData()
  }
  
  getProfileData(){
  	let obs = this._httpService.getData();
  	obs.subscribe(data => {
  		console.log("received data : ", data)
  	})
  }
}
