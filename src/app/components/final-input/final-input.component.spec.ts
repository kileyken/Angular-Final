import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalInputComponent } from './final-input.component';

describe('FinalInputComponent', () => {
  let component: FinalInputComponent;
  let fixture: ComponentFixture<FinalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
