import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Input() propertyGoal;

  homeTitle = "Welcome to my goal list.";
  myString = "A goal without a plan is just a wish. (Antoine de Saint-Exupéry)";
  myBoolean = true;

  clickme(e) {
    alert(e);
    console.log(e.toString());
  }

  constructor() { }

  ngOnInit() {
  }

}
