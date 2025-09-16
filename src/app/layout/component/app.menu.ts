import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul>`
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Bienvenido al Sistema',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Administrativo GEM',
                items: [
                    { label: 'PENDIENTE', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'PENDIENTE', icon: 'pi pi-fw pi-list',      routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Monitoreo GEM',
                icon: 'pi pi-fw pi-briefcase',
                
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Bitácora General',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/monitoreo/bitacora-General']
                    },
                    {
                        label: 'Documentos',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                           {
  label: 'Operadores',
  icon: 'pi pi-fw pi-bookmark',
  items: [
    {
      label: 'Información del Operador',
      icon: 'pi pi-fw pi-bookmark',
      routerLink: ['/monitoreo/informacion-operador']
    }
  ]
},
                            {
                                label: 'Unidades',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'awdad',       icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Equipos',   icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Gastos de Mantenimiento', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            { label: 'Login',         icon: 'pi pi-fw pi-sign-in',    routerLink: ['/auth/login'] },
                            { label: 'Error',         icon: 'pi pi-fw pi-times-circle', routerLink: ['/auth/error'] },
                            { label: 'Access Denied', icon: 'pi pi-fw pi-lock',        routerLink: ['/auth/access'] }
                        ]
                    },
                    { label: 'Crud',      icon: 'pi pi-fw pi-pencil',            routerLink: ['/pages/crud'] },
                    { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/pages/notfound'] },
                    { label: 'Empty',     icon: 'pi pi-fw pi-circle-off',        routerLink: ['/pages/empty'] }
                ]
            },
            {
                label: 'Gastos y Liquidaciones GEM',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    { label: 'Documentation', icon: 'pi pi-fw pi-book', routerLink: ['/documentation'] },
                    { label: 'View Source',  icon: 'pi pi-fw pi-github', url: 'https://github.com/primefaces/sakai-ng', target: '_blank' }
                ]
            }
        ];
    }
}
