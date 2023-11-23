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
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deleniti ipsam vitae ex incidunt a, dolorem, itaque, velit consequuntur labore ea doloribus illum! Labore quo aliquid quibusdam dolorum, reprehenderit adipisci.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem? ashdbfkabd aksdfb kasdbf habsdfh ba',
        'askjdfajkndfkj ansdfjk nasjk fnaf',
      ],
      skills: ['Ionic', 'Angular', 'React', 'TypeScript', 'JavaScript'],
    },

    {
      timelapse: '2019 - 2021',
      url: '#',
      label: 'BeeLetters C.A.',

      rol: 'Desarrollador Frontent',

      performance: ['asndfan3n ajn23j an j3', 'asdkfp asdfm adnsf '],

      skills: ['Wordpress', 'CSS'],
    },
  ];

  public jobCurrent: any = {
    label: '',
  };

  constructor() {
    this.jobCurrent = this.jobList[0];
  }
}
