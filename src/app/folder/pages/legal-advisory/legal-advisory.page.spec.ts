import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalAdvisoryPage } from './legal-advisory.page';

describe('LegalAdvisoryPage', () => {
  let component: LegalAdvisoryPage;
  let fixture: ComponentFixture<LegalAdvisoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LegalAdvisoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
