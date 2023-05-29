import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetornoPage } from './retorno.page';

describe('RetornoPage', () => {
  let component: RetornoPage;
  let fixture: ComponentFixture<RetornoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RetornoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
