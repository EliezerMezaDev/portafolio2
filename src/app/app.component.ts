import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public app_data = {
    projects: {
      header: {
        title: 'Mis proyectos',
        paragraph:
          'Algunas practicas de codigo y proyectos que puedo compartir',
      },
    },
    experience: {
      header: {
        title: 'Mi experiencia',
        paragraph: 'Algunas empresar con las que he colaborado'
      },
    },
    contact: {
      header: {
        title: 'Dejame un mensaje',
        paragraph: 'O escribeme acerca de tu proyecto, te respondere en breves'
      },
    }
  };
}
