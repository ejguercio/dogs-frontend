import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LandingComponent }, // Ruta principal
      {
        path: 'dogs',
        loadChildren: () =>
          import('./dogs/dogs.module').then((module) => module.DogsModule),
      }, // Cargar módulos de dogs
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
