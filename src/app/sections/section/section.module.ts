import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component'
import { HeaderComponent } from '../header/header.component'
import {CharactersModule} from '../characters/characters.module'
import { InfoComponent } from '../info/info.component'
import { MonstersModule } from '../monsters/monsters.module'
import { MaterialModule } from '../../shared/material/material.module'
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    BannerComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CharactersModule,
    MaterialModule,
  ],
  exports:[
    BannerComponent,
    HeaderComponent,
    CharactersModule,
    InfoComponent,
    MonstersModule,
    FooterComponent
  ]
})
export class SectionModule { }
