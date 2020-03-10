import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/Client'
import {ClientService} from '../../services/client.service'
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }
  disableBalanceOnEdit:boolean=false;

  constructor(private clientservice:ClientService
    ,private router:Router,private route:ActivatedRoute,private flashmessage:FlashMessagesService) { }

ngOnInit() {

    this.id=this.route.snapshot.params['id'];
    this.clientservice.getClient(this.id).subscribe(client=>this.client=client);

  }

 onSubmit({value,valid}:{value: Client, valid: boolean}){
   if (!valid){
     this.flashmessage.show("Please fill correctly",{cssClass: 'alert-danger', timeout:4000});

   }
   else{
     value.id=this.id;
     this.clientservice.updateClient(value);
     this.flashmessage.show('Client Updated',{cssClass:'alert-success',timeout:4000});

     this.router.navigate(['/client/'+this.id])

   }

 }
}
