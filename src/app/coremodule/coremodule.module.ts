import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoremoduleRoutingModule } from './coremodule-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoremoduleRoutingModule
  ],

  exports:[
    LayoutComponent 
  ]

})
export class CoremoduleModule { }
