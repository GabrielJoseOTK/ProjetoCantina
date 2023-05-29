import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroplancheComponent } from './droplanche.component';

describe('DroplancheComponent', () => {
  let component: DroplancheComponent;
  let fixture: ComponentFixture<DroplancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroplancheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroplancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
