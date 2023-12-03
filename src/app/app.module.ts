import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';


const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [NgxScannerQrcodeModule, BrowserModule, IonicModule.forRoot({rippleEffect: false, mode: 'md'}), AppRoutingModule,RouterModule.forRoot(routes),HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
