import { Component, Input } from '@angular/core';
import { project, sectionData } from 'src/app/interfaces';

//? STATIC DATA
const projects = [
  {
    label: 'To-Do List App V02',
    description: 'Práctica de uso de componentes en Angular Framework',
    image: 'assets/previews/todolistappv02',
    skills: ['Angular', 'SCSS', 'TypeScript'],
    url: 'https://eliezermezadev.github.io/To-DoListApp_v02/',
  },
  {
    label: 'Weather App',
    description:
      'Práctica de conexión con la REST API de api.openweathermap.org',
    image: 'assets/previews/weaterappv01',
    skills: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://eliezermezadev.github.io/WeatherApp/',
  },
  {
    label: 'Voice Converter App',
    description:
      'Práctica de uso de herramienta de síntesis de voz nativa de JavaScript',
    image: 'assets/previews/voiceconverterappv01',
    skills: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://eliezermezadev.github.io/VoiceConverterApp/',
  },
  {
    label: 'To-Do List App',
    description:
      'Práctica de captación e inserción de objetos en el DOM con JavaScript',
    image: 'assets/previews/todolistappv01',
    skills: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://eliezermezadev.github.io/To-DoListApp_v01/',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @Input() sectionData?: sectionData;

  projects: project[] = projects;
}
