import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoXPage } from './curso-x.page';

describe('CursoXPage', () => {
  let component: CursoXPage;
  let fixture: ComponentFixture<CursoXPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursoXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
