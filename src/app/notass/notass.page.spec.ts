import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotassPage } from './notass.page';

describe('NotassPage', () => {
  let component: NotassPage;
  let fixture: ComponentFixture<NotassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
