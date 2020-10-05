import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emit } from 'process';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskStatus } from 'src/app/utils/TaskStatus';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit, OnDestroy {
  @Input() filters;

  @Output() filterChange = new EventEmitter();
  
  statuses: string[] = Object.values(TaskStatus);
  taskFilter: FormGroup;
  destroy$: Subject<void> = new Subject<void>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.handleFiltersChange();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes.filters && this.taskFilter) {
  //     console.log(changes.filters)
  //     this.taskFilter.setValue({...this.filters}, {emitEvent: false});
  //   }
  // }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm() {
    this.taskFilter = this.fb.group({
      search: [this.filters.search],
      status: [this.filters.status]
    })
  }

  handleFiltersChange() {
    this.taskFilter.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => this.filterChange.emit(val));
  }

}
