import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public app_data = {
    aboutMe: {
      header: {
        htmlId: 'aboutMe',
        title: 'Sobre mi',
      },
    },

    projects: {
      header: {
        htmlId: 'projects',
        title: 'Mis proyectos',
        paragraph:
          'Algunas practicas de codigo y proyectos que puedo compartir',
      },
    },
    experience: {
      header: {
        htmlId: 'experience',
        title: 'Mi experiencia',
        paragraph: 'Algunas empresar con las que he colaborado',
      },
    },
    contact: {
      header: {
        htmlId: 'contact',
        title: 'Dejame un mensaje',
        paragraph: 'Te respondere en breves',
      },
    },
  };
}
