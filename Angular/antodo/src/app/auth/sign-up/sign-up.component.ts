import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { AuthService } from '../auth.service';
import { passwordValidator } from '../passwordValidator';
import { User } from '../../utils/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;

  get name() {
    return this.signUpForm.get('name');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirm() {
    return this.signUpForm.get('confirm');
  }

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
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

  onSubmit(): void {
    const user: User = {
      username: this.name.value,
      password: this.password.value
    };

    this.authService.signUp(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.router.navigate(['sign-in']));
  }

}
