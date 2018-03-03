import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'My Goal List';
  motivation = '"A goal without a plan is just a wish." (Antoine de Saint-Exupéry)';
  

  goal = {
    small: "Get an internship.",
    big: "Graduate and get a Job.",
    color: "Green"
  };

}
