import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openCart(){
    
      this.router.navigate(['contacts']);
    
  }
  countries:any = [
    {
      code: '+91',
      name: 'India',
      imageUrl:'./assets/India.png'
    },
    {
      code: '+1',
      name: 'America',
      imageUrl:'./assets/Usa.png'
    }
    ];

}
