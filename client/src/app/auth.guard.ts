import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ProfileService } from './profile/profile.service';

@Injectable({ providedIn: 'root' })

@Injectable()
class Authentication{
   constructor(private profileService : ProfileService){}
  canActivate(){
    const username = prompt("Enter username : ")
    const password = prompt("Enter password : ")
    if(this.profileService.authenticate(username,password)){
      return true
    }
    else{
      alert("Authentication Failed")
      return false
    }
      
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(Authentication).canActivate()
};
