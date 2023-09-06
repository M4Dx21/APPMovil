import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoXPage } from './curso-x.page';

const routes: Routes = [
  {
    path: '',
    component: CursoXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoXPageRoutingModule {}
