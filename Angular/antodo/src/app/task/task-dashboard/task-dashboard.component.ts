import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/utils/Task';
import { DialogType, ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskStatus } from 'src/app/utils/TaskStatus';
import { filter, switchMap } from 'rxjs/operators';

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

  addTask() {
    const data = {
      type: DialogType.CREATE
    }

    let dialogRef = this.dialog.open(ModalDialogComponent, { data });

    dialogRef.afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((task: Task) => this.taskService.addTask(task)),
        switchMap(() => {
          this.tasks$ = this.taskService.getAllTasks();
          return EMPTY;
        })).subscribe();
  }

  editTask(task: Task) {
    const data = {
      type: DialogType.EDIT,
      task: {
        title: task.title,
        description: task.description,
        status: task.status
      }
    };

    let dialogRef = this.dialog.open(ModalDialogComponent, { data });

    dialogRef.afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((task: Task) => this.taskService.updateTask(task)),
        switchMap(() => {
          this.tasks$ = this.taskService.getAllTasks();
          return EMPTY;
        })).subscribe();
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).pipe(switchMap(() => {
      this.tasks$ = this.taskService.getAllTasks();
      return EMPTY;
    })).subscribe();
  }
}