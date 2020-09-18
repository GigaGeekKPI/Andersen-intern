import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterModule} from '@angular/router'


@NgModule({
  declarations: [SignUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule
  ],
  exports: [SignUpFormComponent]
})
export class AuthModule { }
