import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabPanel: any;
  
  constructor() {
    
  }
  log() {
    console.log(123)
  }
}
