import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/utils/Task';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DialogType } from 'src/app/utils/DialogType';
import { FormControl } from '@angular/forms';
import { Filters } from 'src/app/utils/Filters';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  tasks$: Observable<Task[]>;
  filters: Filters;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.filters = this.taskService.getTaskFilter();
    this.tasks$ = this.taskService.getAllTasks();
  }

  addTask(): void {
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

  editTask(task: Task): void {
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

  deleteTask(id: number): void {
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

  filterTasks(filters: Filters): void {
    this.taskService.setTaskFilter(filters);
    this.tasks$ = this.taskService.getAllTasks();
  }

  updateStatus({ option, id }): void {
    console.log('Updating status', option, id);
    //   this.taskService.updateTaskStatus(option, id).pipe(switchMap(() => {
    //     this.tasks$ = this.taskService.getAllTasks();
    //     return EMPTY;
    //   })).subscribe();
  }
}