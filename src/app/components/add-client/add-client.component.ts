import { Component, OnInit,ViewChild } from '@angular/core';
import {Client} from '../../models/Client'
import {ClientService} from '../../services/client.service'
import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  client:Client={

    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  };
  disableBalanceOnAdd: boolean=false;
  @ViewChild('clientForm', { static: false }) form :any;

  constructor(private flasmessage:FlashMessagesService,
    private  clientService:ClientService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value:Client,valid:boolean}){
    if (this.disableBalanceOnAdd){
      value.balance=0;
    }

    if(!valid){
      this.flasmessage.show("Please fill the form incorrectly",{cssClass:'alert-danger',timeout:4000});
      //show error
    }
    else{
      this.clientService.newClient(value);
      this.flasmessage.show("New client added",{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/'])



    }


  }
    }
