import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// this component is expecting data from somewhere else
@Input() propertyGoal;

// this component is sending out data from here
// this custom event will emit, and the app root component
// will be listening for this customEvent.
@Output() customEvent = new EventEmitter();

  homeTitle = "Welcome to my goal list.";
  myString = "A goal without a plan is just a wish. (Antoine de Saint-Exupéry)";
  myBoolean = true;

  clickme(e) {
    alert(e);
    console.log(e.toString());
  }

  fireTheCustomEvent(e)
  {
    this.customEvent.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
