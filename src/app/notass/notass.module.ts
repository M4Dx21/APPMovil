import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotassPageRoutingModule } from './notass-routing.module';

import { NotassPage } from './notass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotassPageRoutingModule
  ],
  declarations: [NotassPage]
})
export class NotassPageModule {}
