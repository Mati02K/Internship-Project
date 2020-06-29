import { Component, OnInit } from '@angular/core';
import { RestProviderService } from '../rest-provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login=this.rest.getPosts();
  data:any;
  
  constructor(private rest:RestProviderService, private route: ActivatedRoute,) {

   }

  ngOnInit() {
    
   
  }
  
  

}
