import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LawyersPage } from './lawyers.page';

describe('LawyersPage', () => {
  let component: LawyersPage;
  let fixture: ComponentFixture<LawyersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LawyersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
