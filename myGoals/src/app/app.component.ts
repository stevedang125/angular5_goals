import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'My Goal List';
  motivation = '"A goal without a plan is just a wish." (Antoine de Saint-Exupéry)';

  


  // goal = {
  //   small: "Get an internship.",
  //   big: "Graduate and get a Job.",
  //   color: "Green"
  // };
  //
  // customFunction(e) {
  //   alert('hey this is your customFunction in the root app component');
  //   console.log(e.toString());
  // }

}
