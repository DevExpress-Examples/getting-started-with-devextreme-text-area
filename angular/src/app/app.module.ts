import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTextAreaModule } from 'devextreme-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
