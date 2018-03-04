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

    lucky_color:any;
    big_goal:any;
    small_goal:any;
    index:any;


    term: string;
    // goals: any[];
    goals = [];

    constructor(private route: ActivatedRoute,
    private logger: LoggingService,
    private dataService: DataService)
    {

    }

    // log_service(){
    //   this.logger.log();
    // }

    ngOnInit() {
      // this.dataService.fetchData().subscribe((data) => this.goals = data as any);
      // this.dataService.fetchData().subscribe((data) => console.log(data));
      this.fbGetData();
      this.delete_event_listener();
    }// end ngOnInit

    delete_event_listener(){
      firebase.database().ref('/').on('child_removed', (snapshot) =>{
        console.log('Just REMOVED a child !!!!');
        var object = snapshot.val();
        // console.log(snapshot.val());
        console.log(object.index);
        this.goals.splice(this.goals.indexOf(object, object.index))
      });
    }

    fbGetData(){
      firebase.database().ref('/').on('child_added', (result) => {
        // console.log('Just ADDED a child !!!!');
        // console.log(result.val());
        this.goals.push(result.val())
      });
    }

    // this add a goal version works too, push() will generate an unique id
    // instead for index id(just for fun for now)
    // fbAddData(small, big, color){
    //   // firebase.database().ref('/').push({small: small, big: big, color: color}).child('8');
    //   // firebase.database().ref('/').child('9').set({small: small, big: big, color: color});
    //   this.getkey = firebase.database().ref('/').push({small: small, big: big, color: color}).getKey();
    // }

    add_a_goal(index, small, big, color){
      console.log('add: '+index);
      firebase.database().ref('/').child(index).set({index: index, small: small, big: big, color: color});
    }

    delete_a_goal(number){
      console.log('delete: '+number);
      firebase.database().ref('/').child(number).remove();
    }

}
