import { Component, Input } from '@angular/core';
import { headerData } from 'src/app/interfaces';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() headerData?: headerData;
}
