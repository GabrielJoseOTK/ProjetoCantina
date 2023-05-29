import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvidosComponent } from './resolvidos.component';

describe('ResolvidosComponent', () => {
  let component: ResolvidosComponent;
  let fixture: ComponentFixture<ResolvidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
