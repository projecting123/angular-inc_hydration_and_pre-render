import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'products/:id', loadComponent: () => import('./components/data/data.component').then(m => m.DataComponent)
    },
    {
        path: 'inchydration', loadComponent: () => import('../app/components/inchydration/inc_hydration.component').then(m => m.incremental_hydrationComponent)
    }
];
