import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from './../api-handler.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [ApiHandlerService]
})
export class EntryComponent implements OnInit {
  entry: Object = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiHandlerService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.getEntryDetails(params["id"]);
      console.log(typeof(params["id"]));
      console.log(this.entry);
    })
  }
  getEntryDetails(id){
    this.api.getEntry(id)
    .subscribe((entry)=> {
      this.entry = entry;
      console.log(this.entry);
    });


  }


}
