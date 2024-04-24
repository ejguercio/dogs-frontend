import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogCreateComponent } from './dog-create/dog-create.component';
import { RouterModule, Routes } from '@angular/router';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectOption } from '@angular/forms';

const routes: Routes = [
  { path: 'list', component: DogListComponent },
  { path: 'detail/:id', component: DogDetailComponent },
  { path: 'create', component: DogCreateComponent },
];

@NgModule({
  declarations: [
    DogListComponent,
    DogCardComponent,
    DogCreateComponent,
    DogDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class DogsModule {}
