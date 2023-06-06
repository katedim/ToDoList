import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = "http://localhost:3000/tasks";
   }

   addTask(task : Task) {
    return this.http.post<Task>(this.serviceUrl, task);
   }

   getAllTasks() {
    return this.http.get<Task[]>(this.serviceUrl);
   }

   deletTask(task: Task) {
    return this.http.delete<Task>(this.serviceUrl+'/'+task.id);
   }

   editTask(task: Task) {
    return this.http.put<Task>(this.serviceUrl+'/'+task.id, task);
   }
}
