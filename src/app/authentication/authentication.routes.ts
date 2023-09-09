import { Routes } from '@angular/router';

import { AuthenticationPage } from './authentication.page';

export const routes: Routes = [
    {
        path: '',
        component: AuthenticationPage
    },
    {
        path: 'login',
        component: AuthenticationPage,
    },
    {
        path: 'singup',
        component: AuthenticationPage,
    }
]



