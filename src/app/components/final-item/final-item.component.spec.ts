import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalItemComponent } from './final-item.component';

describe('FinalItemComponent', () => {
  let component: FinalItemComponent;
  let fixture: ComponentFixture<FinalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
