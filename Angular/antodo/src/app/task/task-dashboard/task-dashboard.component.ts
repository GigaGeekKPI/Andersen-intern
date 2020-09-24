import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  tasks: any;

  constructor(private taskService: TaskService, private authService: AuthService) { }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(data => {
      console.log(data);
      this.tasks = data;
    });
  }

}
