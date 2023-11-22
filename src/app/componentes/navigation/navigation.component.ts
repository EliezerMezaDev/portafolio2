import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor() {
    document.addEventListener('mousemove', (e) => {
      const navigationBar = document.querySelector('.navigation');
      const positionY = e.pageY;

      const currentScroll = Number(
        document.getElementById('sectionsWrapper')?.scrollTop
      );

      if (currentScroll == 0) {
        navigationBar?.classList.add('showNavigation');

        return;
      }

      if (positionY < 100) {
        navigationBar?.classList.add('showNavigation');
      } else {
        navigationBar?.classList.remove('showNavigation');
      }
    });

    setTimeout(() => {
      document
        .querySelector('.sectionsWrapper')
        ?.addEventListener('scroll', (e) => {
          const navigationBar = document.querySelector('.navigation');

          const currentScroll = Number(
            document.getElementById('sectionsWrapper')?.scrollTop
          );

          if (currentScroll < 100) {
            navigationBar?.classList.add('showNavigation');
          } else {
            navigationBar?.classList.remove('showNavigation');
          }
        });
    }, 10);
  }
}
