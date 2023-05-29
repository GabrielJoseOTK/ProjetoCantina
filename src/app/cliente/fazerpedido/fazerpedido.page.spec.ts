import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FazerpedidoPage } from './fazerpedido.page';

describe('FazerpedidoPage', () => {
  let component: FazerpedidoPage;
  let fixture: ComponentFixture<FazerpedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FazerpedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
