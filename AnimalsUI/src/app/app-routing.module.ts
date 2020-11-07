import { ViewAnimalComponent } from './pages/animals/view-animal/view-animal.component';
import { AddEditAnimalComponent } from './pages/animals/add-edit-animal/add-edit-animal.component';
import { AnimalslistComponent } from './pages/animals/animalslist/animalslist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnimalslistComponent, pathMatch: 'full' },
  { path: 'add-animal', component: AddEditAnimalComponent },
  { path: 'edit-animal/:animalId', component: AddEditAnimalComponent },
  { path: 'view-animal/:animalId', component: ViewAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
