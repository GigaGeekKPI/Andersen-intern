import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EMPTY, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Task } from 'src/app/utils/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true
  }]
})
export class SearchComponent implements OnInit, ControlValueAccessor {

  searchInput: FormControl = new FormControl('');

  writeValue(val: string) {
    this.searchInput.setValue(val);
    this.handleChange(val);
  }

  registerOnChange(fn: (val: string) => void): void {
    this.handleChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.handleTouched = fn
  }


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.handleSearchInputChanges();
  }


  handleTouched() { }

  handleChange(val: string) {

  }

  private handleSearchInputChanges() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
      ).subscribe(val => this.writeValue(val));
  }
}