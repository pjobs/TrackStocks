import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated: boolean = false;

    // constructor(public router: Router, private cognito: CognitoUtil, private userServices: UserLoginService) {
    // }
}
