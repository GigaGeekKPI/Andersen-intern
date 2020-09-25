import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from './task.service';


@NgModule({
  declarations: [TaskDashboardComponent, TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
