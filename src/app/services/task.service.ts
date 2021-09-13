import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<{id?: number;
            text: string;
            day: string;
            reminder: boolean;
            asd:number}[]>(this.apiUrl);
    // return this.http.get<Task[]>(this.apiUrl);

    //return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
