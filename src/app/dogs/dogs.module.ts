import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogCreateComponent } from './dog-create/dog-create.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'list', component: DogListComponent },
  { path: 'create', component: DogCreateComponent },
];

@NgModule({
  declarations: [DogListComponent, DogCardComponent, DogCreateComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class DogsModule {}
