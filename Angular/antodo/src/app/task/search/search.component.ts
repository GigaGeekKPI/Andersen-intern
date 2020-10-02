import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Task } from 'src/app/utils/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() tasksChange = new EventEmitter();

  private searchTerms = new Subject<string>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((term: string) => {
        if(term.length > 0) {
        this.tasksChange.emit(this.taskService.getByQuery(term));
        } else {
          this.tasksChange.emit(this.taskService.getAllTasks());
        }
        return EMPTY;
      }),
    ).subscribe();
  }

  searchByQuery(query) {
    this.searchTerms.next(query);
  }
}