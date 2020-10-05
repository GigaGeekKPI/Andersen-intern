import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../utils/Task';
import { TaskStatus } from 'src/app/utils/TaskStatus';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;

  statuses: string[] = Object.values(TaskStatus);

  @Output()
  selectionChange = new EventEmitter();

  @Output()
  editTask: EventEmitter<Task> = new EventEmitter<Task>();
  
  @Output()
  deleteTask: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  editHandler(task) {
    this.editTask.emit(task);
  }
  
  deleteHandler(id) {
    this.deleteTask.emit(id);
  }

  statusChange(option): void {
    this.selectionChange.emit({
      option: option.value,
      id: this.task.id
    });
  }
}
