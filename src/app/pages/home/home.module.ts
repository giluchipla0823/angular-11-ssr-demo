import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 

import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LazyLoadImageModule,
    TranslateModule
  ],
  exports: [
    // TranslateModule
  ]
})
export class HomeModule { }
