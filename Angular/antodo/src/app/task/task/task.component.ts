import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../utils/Task';
import { TaskStatus } from 'src/app/utils/TaskStatus';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()
  task: Task;

  statuses: string[] = Object.values(TaskStatus);

  @Output()
  selectionChange = new EventEmitter();

  @Output()
  editTask: EventEmitter<Task> = new EventEmitter<Task>();
  
  @Output()
  deleteTask: EventEmitter<number> = new EventEmitter<number>();

  statusClasses = {
    open: false,
    progress: false,
    done: true
  }

  constructor() { }

  editHandler(task: Task): void {
    this.editTask.emit(task);
  }
  
  deleteHandler(id: number): void {
    this.deleteTask.emit(id);
  }

  statusChange(option: MatSelectChange): void {
    this.selectionChange.emit({
      option: option.value,
      id: this.task.id
    });
  }
}
