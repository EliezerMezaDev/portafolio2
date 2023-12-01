import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//>==== GLOBALS
import { NavigationComponent } from './globals/navigation/navigation.component';

//>==== SECTIONS
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ProjectComponent } from './sections/projects/project/project.component';
import { ContactComponent } from './sections/contact/contact.component';

//>==== OTHERS
import { SectionTitleComponent } from './others/section-title/section-title.component';
import { FooterComponent } from './globals/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavigationComponent,
    FooterComponent,

    WelcomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent,

    SectionTitleComponent,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,

    WelcomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent,

    SectionTitleComponent,
  ],
})
export class ComponentsModule {}
