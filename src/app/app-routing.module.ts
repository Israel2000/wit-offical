import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'Contact', component: ContactPageComponent },
  { path: 'About', component: AboutPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
