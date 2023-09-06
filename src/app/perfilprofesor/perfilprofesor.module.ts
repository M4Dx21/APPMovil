import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilprofesorPageRoutingModule } from './perfilprofesor-routing.module';

import { PerfilprofesorPage } from './perfilprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilprofesorPageRoutingModule
  ],
  declarations: [PerfilprofesorPage]
})
export class PerfilprofesorPageModule {}
