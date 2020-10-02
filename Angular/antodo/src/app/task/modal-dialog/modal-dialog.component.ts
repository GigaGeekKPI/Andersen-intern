import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogType } from 'src/app/utils/DialogType';
import { TaskStatus } from 'src/app/utils/TaskStatus';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  taskInfoForm: FormGroup;
  statuses: string[] = Object.values(TaskStatus);
  type: string;
  readonly dialogType = DialogType;

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
  }

  ngOnInit(): void {
    this.initForm();
    if(this.data.type === DialogType.EDIT) {
      this.setExistingTask();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close({
      ...this.taskInfoForm.value
    });
  }

  private initForm() {
    this.taskInfoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  private setExistingTask() {
    this.taskInfoForm.addControl('status', new FormControl(''));
    this.taskInfoForm.setValue({...this.data.task});
    console.log(this.taskInfoForm);
  }
}
