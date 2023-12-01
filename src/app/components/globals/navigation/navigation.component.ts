import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public openMenu = false;

  private activeScroll: number = 0;

  constructor() {
    document.addEventListener('mousemove', (e) => {
      const headerBar = document.querySelector('.header');
      const positionY = e.pageY;

      const currentScroll = Number(
        document.getElementById('sectionsWrapper')?.scrollTop
      );

      if (currentScroll == 0) {
        headerBar?.classList.add('showNavigation');

        return;
      }

      if (positionY < 100) {
        headerBar?.classList.add('showNavigation');
      } else {
        headerBar?.classList.remove('showNavigation');
      }
    });

    setTimeout(() => {
      document
        .querySelector('.sectionsWrapper')
        ?.addEventListener('scroll', (e) => {
          const headerBar = document.querySelector('.header');

          const currentScroll = Number(
            document.getElementById('sectionsWrapper')?.scrollTop
          );

          if (currentScroll < 100 || this.activeScroll > currentScroll) {
            headerBar?.classList.add('showNavigation');
          } else {
            headerBar?.classList.remove('showNavigation');
          }

          this.activeScroll = currentScroll;
        });

      document.querySelectorAll('li[nList]').forEach((e) => {
        e.addEventListener('click', () => {
          this.openMenu = false;
        });
      });
    }, 10);
  }
}
