import { Routes } from '@angular/router';

import { DropdownDemoComponent } from './demos/dropdown/dropdowndemo.component';

export const appRoutes: Routes = [
  { path: 'dropdown', 
    component: DropdownDemoComponent,
    data: { title: 'Dropdown' } 
  },
  { path: '',
    redirectTo: '/dropdown',
    pathMatch: 'full'
  }/*,
  { path: '**', component: PageNotFoundComponent }*/
];
