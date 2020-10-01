import { Component } from '@angular/core';
import { FinalService } from './services/final.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private finalService: FinalService) {}
  
}
