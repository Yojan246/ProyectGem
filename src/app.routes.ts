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

      // UIKit
      {
        path: 'uikit',
        loadChildren: () =>
          import('./app/pages/uikit/uikit.routes').then(m => m.default)
      },

      { path: 'documentation', component: Documentation },

      // Pages
      {
        path: 'pages',
        loadChildren: () =>
          import('./app/pages/pages.routes').then(m => m.default)
      },

      // Monitoreo
      {
        path: 'monitoreo',
        children: [
          {
            path: 'bitacora-general', // ruta en minúsculas
            loadComponent: () =>
              import('./app/Monitoreo/pages/bitacora-General/bitacora-General.component')
                .then(m => m.BitacoraGeneralComponent)
          },
          {
            path: 'cartaporte/:id', // parámetro correcto
            loadComponent: () =>
              import('./app/Monitoreo/pages/bitacora-General/cartaporte/cartaporte-form/cartaporte-form.component')
                .then(m => m.CartaporteFormComponent)
          },
          {
            path: 'informacion-operador',
            loadComponent: () =>
              import('./app/Monitoreo/Documentos/Operadores/informacion-operador/informacion-operador.component')
                .then(m => m.InformacionOperadorComponent)
          }
        ]
      }
    ]
  },

  { path: 'landing', component: Landing },
  { path: 'notfound', component: Notfound },

  // Auth
  {
    path: 'auth',
    loadChildren: () =>
      import('./app/pages/auth/auth.routes').then(m => m.default)
  },

  // Fallback
  { path: '**', redirectTo: '/notfound' }
];
