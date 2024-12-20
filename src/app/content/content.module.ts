import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LibraryComponent } from './library/library.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    CreditsComponent,
    LibraryComponent,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'credits', component: CreditsComponent }
      ])
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    LibraryComponent
    ]
})
export class ContentModule { }