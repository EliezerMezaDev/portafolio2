import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/app/interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project?: project;

  constructor(public router: Router) {}

  aux() {
    //this.
  }

  public navigate(_url: string | any) {
    //this.router.navigate(_url);

    document.location.href = _url
  }
}
