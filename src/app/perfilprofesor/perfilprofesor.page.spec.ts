import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilprofesorPage } from './perfilprofesor.page';

describe('PerfilprofesorPage', () => {
  let component: PerfilprofesorPage;
  let fixture: ComponentFixture<PerfilprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
