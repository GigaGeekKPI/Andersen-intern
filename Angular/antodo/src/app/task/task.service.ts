import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get(`${environment.baseURL}/tasks`);
  }

  getTaskByID() { }

  addTask() { }

  deleteTask() { }

  updateTask() { }
}
