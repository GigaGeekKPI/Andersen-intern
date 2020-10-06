import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../utils/Task';
import { TaskStatus } from '../utils/TaskStatus';

@Injectable()
export class TaskService {

  private taskFilter$: BehaviorSubject<any> = new BehaviorSubject<any>({ search: '', status: TaskStatus.OPEN });

  constructor(private http: HttpClient) { }

  getTaskFilter(): any {
    return this.taskFilter$.getValue();
  }
  setTaskFilter(filters): void {
    this.taskFilter$.next(filters);
  }

  getAllTasks(): Observable<Task[]> {
    const { search, status } = this.getTaskFilter();

    let params = new HttpParams().set('status', status);
    if (search) {
      params = new HttpParams().set('search', search).set('status', status);
    }
    return this.http.get<Task[]>(`${environment.baseURL}/tasks`, { params });
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.baseURL}/tasks`, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${environment.baseURL}/tasks/${id}`);
  }

  updateTask(task: Task): Observable<any> {
    console.log('Updating task', task);
    return of();
  }

  updateTaskStatus(status: string, id:number): Observable<any> {
    return this.http.patch(`${environment.baseURL}/tasks/${id}`, status);
  }

  getByQuery(query:string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.baseURL}/tasks?search=${query}`)
  }
}
