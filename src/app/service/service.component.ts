import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  apiurl:string = "http://localhost:50001/api/contacts"


  constructor() { }

  ngOnInit(): void {
  }

}
