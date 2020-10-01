import { Component, OnInit, Input } from '@angular/core';
import { Final } from '../../classes/final';
import { FinalService } from '../../services/final.service';

@Component({
  selector: 'app-final-item',
  templateUrl: './final-item.component.html',
  styleUrls: ['./final-item.component.css']
})
export class FinalItemComponent implements OnInit {

  @Input()
  private final: Final;

  constructor(private finalService: FinalService) { }

  ngOnInit() {
  }

  private removeFinal(): void {
    this.finalService.removeFinal(this.final.id);
  }

}
