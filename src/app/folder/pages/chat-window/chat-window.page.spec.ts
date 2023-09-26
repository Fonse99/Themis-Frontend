import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatWindowPage } from './chat-window.page';

describe('ChatWindowPage', () => {
  let component: ChatWindowPage;
  let fixture: ComponentFixture<ChatWindowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatWindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
