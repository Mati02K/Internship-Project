import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {
  pages =[
    {
      title:'First Page',
      url:'/screen/first'
    },
    {
      title:'Second Page',
      url:'/screen/second'
    }
  ];

  selectedPath ='';

  constructor(private router:Router) {
    
    this.router.events.subscribe((event:RouterEvent)=>{
this.selectedPath = event.url;

    })

   }

  ngOnInit() {
  }

}
