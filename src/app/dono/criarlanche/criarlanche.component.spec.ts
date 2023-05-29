import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarlancheComponent } from './criarlanche.component';

describe('CriarlancheComponent', () => {
  let component: CriarlancheComponent;
  let fixture: ComponentFixture<CriarlancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarlancheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarlancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
