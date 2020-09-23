import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  templateData =  {
    title: "Create interceptor",
    description: "Read docs and write code",
    status: "OPEN",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
