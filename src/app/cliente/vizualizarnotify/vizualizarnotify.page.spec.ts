import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VizualizarnotifyPage } from './vizualizarnotify.page';

describe('VizualizarnotifyPage', () => {
  let component: VizualizarnotifyPage;
  let fixture: ComponentFixture<VizualizarnotifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VizualizarnotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
