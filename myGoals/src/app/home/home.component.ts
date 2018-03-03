import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../filter.pipe';

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

  homeTitle = "Welcome to my goal list!";







  constructor() { }

  ngOnInit() {
  }

}
