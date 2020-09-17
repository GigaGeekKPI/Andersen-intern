import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(12)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    ]],
    confirm: ['', [
      Validators.required
    ]]
  });

  constructor(private fb: FormBuilder, private signUpService: SignUpService) { }

  ngOnInit(): void {
  }

  get name () {
    return this.signUpForm.get('name');
  }
  get password () {
    return this.signUpForm.get('password');
  }
  get confirm () {
    return this.signUpForm.get('confirm');
  }

  onSubmit() {
    this.signUpService.addUser(this.signUpForm);
  }

}
