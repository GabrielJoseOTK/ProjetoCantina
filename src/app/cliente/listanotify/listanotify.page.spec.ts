import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListanotifyPage } from './listanotify.page';

describe('ListanotifyPage', () => {
  let component: ListanotifyPage;
  let fixture: ComponentFixture<ListanotifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListanotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
