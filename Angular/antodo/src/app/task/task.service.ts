import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../utils/Task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.baseURL}/tasks`);
  }

  getTaskByID() { }

  addTask() { }

  deleteTask() { }

  updateTask() { }
}
