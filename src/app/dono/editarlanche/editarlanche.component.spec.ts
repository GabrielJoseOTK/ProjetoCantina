import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarlancheComponent } from './editarlanche.component';

describe('EditarlancheComponent', () => {
  let component: EditarlancheComponent;
  let fixture: ComponentFixture<EditarlancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarlancheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarlancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
