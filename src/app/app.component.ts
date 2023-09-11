import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Manuales de procedimientos', url: '/procedimientos', icon: 'book' },
    { title: 'Formatos y requisitos', url: '/formatos', icon: 'documents' },
    { title: 'Asesoría Legal', url: '/asesoria', icon: 'briefcase' },
    { title: 'Conversaciones', url: '/conversaciones', icon: 'chatbubbles' },
    { title: 'Perfiles de abogados', url: '/abogados', icon: 'people' },
    { title: 'Acerca de nosotros', url: '/acercade', icon: 'help' },
    { title: 'Cerrar Sesión', url: '/salir', icon: 'power' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
