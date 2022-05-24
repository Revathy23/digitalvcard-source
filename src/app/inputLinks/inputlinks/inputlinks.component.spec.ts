import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlinksComponent } from './inputlinks.component';

describe('InputlinksComponent', () => {
  let component: InputlinksComponent;
  let fixture: ComponentFixture<InputlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
