import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoXPageRoutingModule } from './curso-x-routing.module';

import { CursoXPage } from './curso-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoXPageRoutingModule
  ],
  declarations: [CursoXPage]
})
export class CursoXPageModule {}
