import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/utils/Task';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskStatus } from 'src/app/utils/TaskStatus';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAllTasks();
  }

  createModal(task: Task) {
    const data = {
      type: task ? 'Edit' : 'Create',
      task: {
        title: task?.title,
        description: task?.description,
        status: task?.status
      }
    }
    let dialogRef = this.dialog.open(ModalDialogComponent, { data });

    dialogRef.afterClosed().subscribe(result => {
      console.table(result);
    });
  }
}