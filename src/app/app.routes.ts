import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { LibraryComponent } from './content/library/library.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { CreditsComponent } from './content/credits/credits.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'credits', component: CreditsComponent, canActivate: [AuthGuard] },
  { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NoAuthGuard] }
];