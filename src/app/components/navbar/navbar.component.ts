import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/Client'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;


  constructor(private auth:AuthService
    ,private router:Router,private flashmessage:FlashMessagesService) { }

  ngOnInit() {

    // this.auth.getAuth().subscribe(auth=>{
    //   if (auth){
    //     this.isLoggedIn=true;
    //     this.loggedInUser=auth.email;

    //   }
    //   else{
    //     this.isLoggedIn=false;
    //   }
    // }
    // )
  }

}
