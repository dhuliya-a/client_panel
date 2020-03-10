import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {Router,CanActivate} from '@angular/router'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth:AngularFireAuth,private router:Router) {
   }

  canActivate():Observable<boolean>{
    return this.auth.authState.pipe(map(auth=>{

      if (!auth){
        this.router.navigate(['/']);
        return false;
      }
     else{
       return true;
     }
    }));


  }
}
