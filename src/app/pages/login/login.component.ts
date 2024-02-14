import {Component} from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";
import {NgForm} from "@angular/forms";
import {AuthErrorCodeToHuman} from "../../helper/AuthErrorCodeToHuman";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string = '';
  constructor(private authService: AuthService) {
  }
  async login(form: NgForm){
    if(form.valid){
      try{
        await this.authService.login(form.value.email, form.value.password);
      } catch (e:any) {
        this.errorMessage = AuthErrorCodeToHuman.convertMessage(e.code);
      }
    }
  }
}
