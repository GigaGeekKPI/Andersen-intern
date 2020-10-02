import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../utils/Task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.baseURL}/tasks`);
  }

  addTask(task: Task) {
    return this.http.post<Task>(`${environment.baseURL}/tasks`, task);
  }

  deleteTask(id) {
    return this.http.delete<Task>(`${environment.baseURL}/tasks/${id}`);
  }

  updateTask(task) {
    console.log('Updating task', task);
    return of();
  }

  updateTaskStatus(status, id) {
    return this.http.patch(`${environment.baseURL}/tasks/${id}`, status);
  }

  getByQuery(query) {
    return this.http.get<Task[]>(`${environment.baseURL}/tasks?search=${query}`)
  }
}
