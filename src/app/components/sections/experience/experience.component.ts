import { Component, Input } from '@angular/core';
import { sectionData } from 'src/app/interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() sectionData?: sectionData;

  public jobList: any[] = [
    {
      timelapse: '2021 - Presente',
      url: 'https://www.grupospartan.com/',
      label: 'Grupo Spartan S.A.',
      rol: 'Desarrollador de Software',
      performance: [
        'Realizo análisis de requerimientos y propongo estrategias para enfocar proyectos.',
        'Diseño y Desarrollo aplicaciones de gestión de recursos con funcionalidades de control de inventario, manejo de órdenes de compra/venta, análisis de costos y gastos, gestión de empleados, gestión de procesos.',
        'Optimizo componentes hechos en Ionic/Angular para múltiples proyectos.',
        'Presto apoyo a otros equipos en funciones de Frontend y Backend.',
      ],
      skills: ['Ionic', 'Angular', 'React', 'TypeScript', 'JavaScript'],
    },
  ];

  public jobCurrent: any = {
    label: '',
  };

  constructor() {
    this.jobCurrent = this.jobList[0];
  }
}
