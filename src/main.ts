import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AuthGuard } from './app/core/guards/auth.guard';
import { NoAuthGuard } from './app/core/guards/no-auth.guard';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(AuthGuard, NoAuthGuard)
  ]
}).catch(err => console.error(err));