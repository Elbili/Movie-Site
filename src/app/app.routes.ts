import { Routes } from '@angular/router';
import path from 'node:path';
import { Home } from './components/home/home';
import { title } from 'node:process';

export const routes: Routes = [
{path : '',component:Home,title:'home'},
{path: 'Home',
loadComponent: ()=> import('./components/home/home').then( m=> m.Home),
title:"Home"
},
{path: 'movie',
loadComponent: ()=> import('./components/movies/movies').then( m=> m.Movies),
title:"Movie"
}

];
