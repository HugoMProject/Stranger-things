import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
