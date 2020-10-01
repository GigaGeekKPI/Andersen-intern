import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskStatus } from 'src/app/utils/TaskStatus';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  taskInfoForm: FormGroup;
  statuses: string[] = Object.values(TaskStatus);

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
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.taskInfoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [TaskStatus.OPEN, Validators.required]
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close(this.taskInfoForm.controls)
  }
}
