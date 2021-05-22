import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaComponent } from './guinea.component';

describe('GuineaComponent', () => {
  let component: GuineaComponent;
  let fixture: ComponentFixture<GuineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
