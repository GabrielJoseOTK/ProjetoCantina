import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejeitaPedidoComponent } from './rejeita-pedido.component';

describe('RejeitaPedidoComponent', () => {
  let component: RejeitaPedidoComponent;
  let fixture: ComponentFixture<RejeitaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejeitaPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejeitaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
