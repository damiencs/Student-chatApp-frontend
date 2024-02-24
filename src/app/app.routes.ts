import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/container/login.component';
import { MainMenuComponent } from './features/main-menu/main-menu.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main-menu', component: MainMenuComponent },
];
