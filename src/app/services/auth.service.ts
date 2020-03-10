import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) {
   }


   login(email:string,password:string){
     return new Promise((resolve,reject)=>
     {

       this.auth.auth.signInWithEmailAndPassword(email,password).then(userData=>resolve(userData),err=>reject(err));
     })
   }



   getAuth(){

     return this.auth.authState.pipe(map(auth=>{auth}))

   }

   logout(){
     this.auth.auth.signOut();
   }

}
