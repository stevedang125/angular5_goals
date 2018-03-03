import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [ LoggingService ]
})
export class DirectoryComponent implements OnInit {

  term: string;

  goals = [
   {small:  "Summer Internship.", big: "Full stack web dev. at Universal Studios.", color: "Green" },
   {small:  "Maintain good grades !", big: "M.I.T.", color: "Blue" },
   {small:  "Be more healthy.", big: "Get buff.", color: "Red" }
  ]

  constructor(private route: ActivatedRoute,
              private logger: LoggingService)
  {

  }


  log_service(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
