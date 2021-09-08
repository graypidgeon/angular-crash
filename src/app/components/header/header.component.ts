import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracket';
  showAddTask: boolean;

  constructor(private uiService:UiService) {
    //przechwytujemy wartosc z next
    this.uiService.onToggle()
        .subscribe((value) => (this.showAddTask = value));
  }

  //lifecycle method
  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
