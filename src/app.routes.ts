import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: Dashboard },

      // UIKit (export default)
      {
        path: 'uikit',
        loadChildren: () =>
          import('./app/pages/uikit/uikit.routes').then(m => m.default)
      },

      { path: 'documentation', component: Documentation },

      // Pages (export default)
      {
        path: 'pages',
        loadChildren: () =>
          import('./app/pages/pages.routes').then(m => m.default)
      },



      // Bitácora Formulario
      {
        path: 'monitoreo/bitacora-formulario',
        loadComponent: () =>
          import('./app/Monitoreo/pages/bitacora-formulario/bitacora-formulario.component')
            .then(m => m.BitacoraFormularioComponent)
      }
    ]
  },
  { path: 'landing', component: Landing },
  { path: 'notfound', component: Notfound },

  // Auth (export default)
  {
    path: 'auth',
    loadChildren: () =>
      import('./app/pages/auth/auth.routes').then(m => m.default)
  },

  { path: '**', redirectTo: '/notfound' }
];
