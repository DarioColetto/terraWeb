import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { DescubriComponent } from './pages/descubri/descubri.component';

export const routes: Routes = [
    {path: '' , component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'servicio', component:ServicioComponent},
    {path: 'descubri', component:DescubriComponent}
];
