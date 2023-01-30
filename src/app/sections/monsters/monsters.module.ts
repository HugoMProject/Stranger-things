import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterComponent } from './monster/monster.component';
import { MaterialModule } from '../../shared/material/material.module';



@NgModule({
  declarations: [
    MonsterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MonsterComponent
  ]
})
export class MonstersModule { }
