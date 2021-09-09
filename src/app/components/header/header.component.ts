import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracket';
  showAddTask: boolean;

  constructor(private uiService:UiService, private router: Router) {
    //przechwytujemy wartosc z next
    //koles bral tu subscription, uzywa sie tego do tego zeby zunsubscrybowowac subskrypcje, np zeby zwolnic zasoby
    this.uiService.onToggle()
        .subscribe((value) => (this.showAddTask = value));
  }

  //lifecycle method
  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}