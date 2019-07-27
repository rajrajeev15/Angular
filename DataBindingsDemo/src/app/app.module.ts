import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import  {FormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
