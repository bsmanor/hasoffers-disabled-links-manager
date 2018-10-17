import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LimitCharactersPipe } from './pipes/limit-characters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LimitCharactersPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
