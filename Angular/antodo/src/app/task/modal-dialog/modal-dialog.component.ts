import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/utils/Task';
import { TaskStatus } from 'src/app/utils/TaskStatus';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  taskInfoForm: FormGroup;
  statuses: string[] = Object.values(TaskStatus);
  task: Task;
  type: string;

  get title() {
    return this.taskInfoForm.get('title')
  }

  get description() {
    return this.taskInfoForm.get('description')
  }

  get status() {
    return this.taskInfoForm.get('status')
  }

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private fb: FormBuilder,
  ) {
    this.type = this.data.type;
    this.task = this.data.task;
  }

  ngOnInit(): void {
    this.taskInfoForm = this.fb.group({
      title: [this.task.title, Validators.required],
      description: [this.task.description, Validators.required],
      status: [TaskStatus.OPEN, Validators.required]
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close({
      form: this.taskInfoForm.value,
      type: this.type
    });
  }
}
