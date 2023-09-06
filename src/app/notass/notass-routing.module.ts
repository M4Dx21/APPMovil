import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotassPage } from './notass.page';

const routes: Routes = [
  {
    path: '',
    component: NotassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotassPageRoutingModule {}
