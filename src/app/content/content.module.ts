import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LibraryComponent } from './library/library.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    LibraryComponent,
    UserComponent,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'user', component: UserComponent }
    ])
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    LibraryComponent,
    UserComponent
  ]
})
export class ContentModule { }