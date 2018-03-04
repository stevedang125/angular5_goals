import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [ LoggingService, DataService ]
})
export class DirectoryComponent implements OnInit {

  term: string;
  // goals: any[];
  goals = [];

// // The data here will be moved into a .json file in public for HTTP practice
// // The json file is in FireBase now.
//   goals = [
//    {small:  "Summer Internship.", big: "Full stack web dev. at Universal Studios.", color: "Green" },
//    {small:  "Maintain good grades !", big: "M.I.T.", color: "Blue" },
//    {small:  "Be more healthy.", big: "Get buff.", color: "Red" }
//   ];

  constructor(private route: ActivatedRoute,
              private logger: LoggingService,
              private dataService: DataService)
  {

  }

  log_service(){
    this.logger.log();
  }

  ngOnInit() {
    // this.dataService.fetchData().subscribe((data) => this.goals = data as any);
    //this.dataService.fetchData().subscribe((data) => console.log(data));
    this.fbGetData();

  }// end ngOnInit

  fbGetData(){
    firebase.database().ref('/').on('child_added', (result) => {
      this.goals.push(result.val())
    });
  }

}
