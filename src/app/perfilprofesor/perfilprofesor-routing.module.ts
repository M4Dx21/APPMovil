import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilprofesorPage } from './perfilprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilprofesorPageRoutingModule {}
