import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from '../components/welcome/welcome.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { SectionTitleComponent } from '../components/section-title/section-title.component';
import { ProjectComponent } from './projects/project/project.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WelcomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    SectionTitleComponent,
    ProjectComponent,
    NavigationComponent,
  ],
  exports: [
    WelcomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    SectionTitleComponent,
    NavigationComponent,
  ],
})
export class ComponentsModule {}
