import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputlinkComponent } from './outputlink.component';

describe('OutputlinkComponent', () => {
  let component: OutputlinkComponent;
  let fixture: ComponentFixture<OutputlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
