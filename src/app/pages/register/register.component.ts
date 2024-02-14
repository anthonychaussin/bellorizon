import {Component} from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  password = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  email = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  resetPasswordForm = this.formBuilder.group(
    {
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    });
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  register(){
    if(this.resetPasswordForm?.valid){
      this.authService.register(this.resetPasswordForm.value.email, this.resetPasswordForm.value.password);
    }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const matchingControl = formGroup.controls[matchingControlName];
      if ( matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (formGroup.controls[controlName].value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
