import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ LoggingService ]
})


export class HomeComponent implements OnInit {

  homeTitle = "Welcome to my goal list!";
  // **** getting data from array of users in services
  // declare a var, then go to ngOnInit
  user:string;

  // this component is expecting data from somewhere else
  @Input() propertyGoal;

  // this component is sending out data from here
  // this custom event will emit, and the app root component
  // will be listening for this customEvent.
  @Output() customEvent = new EventEmitter();



  constructor(private logger: LoggingService) { }

  // logging(){
  //   this.logger.log();
  // }


  // call the getFirstUser from the service: logger in the constructor
  // so short and fast !!
  ngOnInit() {
    //this.user = this.logger.getFirstUser();
  }

}
