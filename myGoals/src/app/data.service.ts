import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // http will send a request to the database, got back the data
  // then in the component, which uses this service, will
  // subscribe and do whatever it need to do with the data.
  fetchData(){
    return this.http.get('https://mygoals-angular5.firebaseio.com/.json');
  }


}
