import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;


  constructor(private fms:FlashMessagesService,private auth:AuthService,private router:Router) { }

  ngOnInit() {

    this.auth.getAuth().subscribe(auth=>{
      if (this.auth){
        this.router.navigate(['/'])
      }
    }
    )
  }
  onSubmit(){

    this.auth.login(this.email,this.password).then(res=>
      {
        this.fms.show("You are now logged in",{cssClass:'alert-success',timeout:4000});
        this.router.navigate(['/']);

      }).catch(err=>{
        this.fms.show(err.message,{cssClass:'alert-danger',timeout:4000});

      });


      }

}
