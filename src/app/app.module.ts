import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoremoduleModule } from './coremodule/coremodule.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoremoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
