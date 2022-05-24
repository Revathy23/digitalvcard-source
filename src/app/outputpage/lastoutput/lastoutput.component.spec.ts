import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastoutputComponent } from './lastoutput.component';

describe('LastoutputComponent', () => {
  let component: LastoutputComponent;
  let fixture: ComponentFixture<LastoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastoutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
