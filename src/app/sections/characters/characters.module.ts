import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../../shared/material/material.module';




@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListComponent,
    CardComponent
  ]
})
export class CharactersModule { }
