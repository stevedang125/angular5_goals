import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  log(){
    console.log('Hey I\'m the loging service');
  }


  // usually, ajax call back
  // promisses going on here for the services
  // access the data, and send back the data
  users:string[] = ['John', 'Doe', 'BigDude'];
  getFirstUser(){
    return this.users[0];
  }

  constructor() { }

}
