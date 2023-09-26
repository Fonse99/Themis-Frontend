import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent  implements OnInit {

  @Input() variant: 'own-message' | 'their-message' = 'own-message'
  @Input() alignment: 'start' | 'end' = 'start';
  @Input() text: string = "";

  classList: string = "bubble-container "

  constructor() {
  }

  ngOnInit() {
    this.classList = this.classList.concat(this.variant," ", this.alignment)

  }

}
