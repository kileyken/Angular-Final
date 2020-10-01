import { Injectable } from '@angular/core';
import { Final } from '../classes/final';

@Injectable({
  providedIn: 'root'
})
export class FinalService {

  private finals: Final[];
  private nextId: number;

  constructor() { 
    this.finals = [
      new Final(0, "Do my homework."),
      new Final(1, "Watch coding videos."),
      new Final(2, "Finish Angular Final!!!")
    ];

    this.nextId = 3;
  }

  public addFinal(text: string): void {
    console.log(this.finals);
    let final = new Final(this.nextId, text);
    this.finals.push(final);
    this.nextId++;
  }

  public getFinals(): Final[] {
    return this.finals;
  }

  public removeFinal(id: number): void {
    this.finals = this.finals.filter((final) => final.id !== id);
  }

}
