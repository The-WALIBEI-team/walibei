import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcongoComponent } from './drcongo.component';

describe('DrcongoComponent', () => {
  let component: DrcongoComponent;
  let fixture: ComponentFixture<DrcongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
