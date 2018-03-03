import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to my goal list";
  myString = "A goal without a plan is just a wish. (Antoine de Saint-Exupéry)";
  myBoolean = true;

  goal = {
    small: "Get an internship.",
    big: "Graduate and get a Job.",
    color: "Green"
  };

  clickme(e) {
    alert(e);
    console.log(e.toString());
  }

  constructor() { }

  ngOnInit() {
  }

}
