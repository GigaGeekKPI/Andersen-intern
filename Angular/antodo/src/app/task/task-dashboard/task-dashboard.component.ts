import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/utils/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService, private authService: AuthService) { }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAllTasks();
  }

}
