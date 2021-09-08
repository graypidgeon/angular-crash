import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //subskrybujemy to w miejscach gdzie chcemy byc powiadomieni o kliknieciu w togla
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
