import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SignUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [SignUpFormComponent]
})
export class AuthModule { }
