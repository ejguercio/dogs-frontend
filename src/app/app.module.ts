import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogsModule } from './dogs/dogs.module';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    NgbModule,
    DogsModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent }, // Ruta principal
      {
        path: 'dogs',
        loadChildren: () =>
          import('./dogs/dogs.module').then((m) => m.DogsModule),
      }, // Cargar módulo de dogs
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
