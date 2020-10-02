import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/utils/Task';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs/operators';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DialogType } from 'src/app/utils/DialogType';

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

  deleteTask(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().pipe(
      filter(Boolean),
      switchMap(() => this.taskService.deleteTask(id)),
      switchMap(() => {
        this.tasks$ = this.taskService.getAllTasks();
        return EMPTY
      })
    ).subscribe();
  }

  updateStatus({ option, id }) {
    console.log('Updating status', option, id);
    //   this.taskService.updateTaskStatus(option, id).pipe(switchMap(() => {
    //     this.tasks$ = this.taskService.getAllTasks();
    //     return EMPTY;
    //   })).subscribe();
  }
}