import { Component, Input } from '@angular/core';
import { sectionData } from 'src/app/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() sectionData?: sectionData;
}
