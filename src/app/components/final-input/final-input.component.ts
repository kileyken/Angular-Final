import { Component, OnInit } from '@angular/core';
import { FinalService } from '../../services/final.service'

@Component({
  selector: 'app-final-input',
  templateUrl: './final-input.component.html',
  styleUrls: ['./final-input.component.css']
})
export class FinalInputComponent implements OnInit {

  private finalText: string;

  constructor(private finalService: FinalService) {
    this.finalText = '';
  }

  ngOnInit() {
  }

  private addFinal(): void {
    this.finalService.addFinal(this.finalText);
    this.finalText = '';
  }

}
