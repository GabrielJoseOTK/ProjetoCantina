import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkOkComponent } from './ok-ok.component';

describe('OkOkComponent', () => {
  let component: OkOkComponent;
  let fixture: ComponentFixture<OkOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkOkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
