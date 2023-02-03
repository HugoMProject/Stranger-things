import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectCardService } from './shared/select-card.service';
import { SectionModule } from './sections/section/section.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SectionModule
  ],
  providers: [SelectCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
