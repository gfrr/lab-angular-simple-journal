import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from './../api-handler.service';


@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css'],
  providers: [ApiHandlerService]
})
export class EntryFormComponentComponent implements OnInit {
  title: string = "";
  content: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiHandlerService,

  ) { }

  ngOnInit() {
  }

  create(title, content){
    console.log(title, content);
    this.api.createEntry({title: title, content: content})
    .subscribe(()=>{
      this.router.navigate(['']);
    });

  }

}
