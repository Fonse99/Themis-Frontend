import { CapacitorConfig } from '@capacitor/cli';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatModel } from './chat.model';
import { UserModel } from '../../modules/shared/models/user.model';
import { PersonModel } from '../../modules/shared/models/person.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'p-chat-window',
  templateUrl: './chat-window.page.html',
  styleUrls: ['./chat-window.page.scss'],
})
export class ChatWindowPage implements OnInit {
  userChat = {
    name: 'Harvey Specter',
  };
  currentUser: PersonModel = {
    address: 'Frente al parque central',
    city: 'Santo Tomas',
    department: 'Chontales',
    dni: '1210901991002G',
    lastName: '',
    name: '',
    phone: '86392699',
  };

  /*********Reactive fields**********/

      messageField: FormControl = new FormControl("");

  /*********Reactive fields**********/


  conversation: ChatModel[] = [];

  constructor(private location: Location) {}

  ngOnInit() {
    this.fakeData();
  }

  fakeData() {
    this.conversation.push({
      date: new Date('September 14, 2023'),
      emitter: {
        address: 'Frente al parque central',
        city: 'Santo Tomas',
        department: 'Chontales',
        dni: '1210901991002G',
        lastName: '',
        name: '',
        phone: '86392699',
      },
      receiver: {
        address: 'Frente al parque central',
        city: 'Juigalpa',
        department: 'Chontales',
        dni: '1210901991002H',
        lastName: '',
        name: '',
        phone: '86392690',
      },
      time: {
        hours: 18,
        minutes: 30,
      },
      message: 'Hola buenas tardes',
    });
  }

  goBack() {
    this.location.back();
  }

  sendMessage() {
    this.conversation.push({
      emitter: this.currentUser,
      receiver: {
        address: 'Frente al parque central',
        city: 'Juigalpa',
        department: 'Chontales',
        dni: '1210901991002H',
        lastName: '',
        name: '',
        phone: '86392690',
      },
      message: this.messageField.value as string,
      date: new Date(),
      time: {
        hours: 0,
        minutes: 0,
      },
    });

    this.messageField.setValue("");
  }

  isOwn(dni: string): boolean {
    return this.currentUser.dni === dni;
  }
}
