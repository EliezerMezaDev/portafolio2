import { Component, Input } from '@angular/core';
import { sectionData } from 'src/app/interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @Input() sectionData?: sectionData;

  hoverMe(_action: string) {
    const pictureMe = document.getElementById('pictureMe');

    console.log('<>>>  <>>>', pictureMe);

    if (_action == 'enter') {
      //pictureMe?.classList.remove('hoverLeave');

      pictureMe?.classList.add('hoverEnter');
    } else {
      // pictureMe?.classList.remove('hoverEnter');

      pictureMe?.classList.add('hoverLeave');
    }

    // console.log('<>>> asdf <>>>', this.pictureMe);
    // this.pictureMe?.classList.remove('animation-leave');

    // this.pictureMe?.classList.add('animation-hover');
  }
}
