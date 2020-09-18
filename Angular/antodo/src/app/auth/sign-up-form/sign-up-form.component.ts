import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { passwordValidator } from '../passwordValidator'

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private signUpService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirm() {
    return this.signUpForm.get('confirm');
  }

  initForm() {
    this.signUpForm = this.fb.group({
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
    }, { validator: passwordValidator });
  }

  onSubmit() {
    this.signUpService.addUser(this.signUpForm);
  }

}
