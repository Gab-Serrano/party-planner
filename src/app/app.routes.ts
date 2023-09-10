import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo('/auth/login');

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.routes').then(m => m.routes),
  },
];