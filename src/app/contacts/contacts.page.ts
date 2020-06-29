import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  navigate =[
    {
      title:'First Page',
      url:'/screen'
    },
    {
      title:'Second Page',
      url:'/activity'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
