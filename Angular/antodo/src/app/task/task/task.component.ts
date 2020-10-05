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

  constructor() { }

  ngOnInit(): void { }


  statusChange(option): void {
    this.selectionChange.emit({
      option: option.value,
      id: this.task.id
    });
  }
}
