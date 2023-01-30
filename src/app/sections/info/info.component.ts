import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  title:string;
  text: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  tiles: Tile[] = [
    {title:'Stranger Things', text: 'Es una serie de televisión web estadounidense de suspenso y ciencia ficción coproducida y distribuida por Netflix.', cols: 1, rows: 1},
    {title:'Escrita Y Dirigida', text: 'Por los hermanos Matt y Ross Duffer, y producida ejecutivamente por Shawn Levy.', cols: 1, rows: 1},
    {title:'Historia', text: 'La historia se sitúa en el pueblo ficticio de Hawkins, en el estado Indiana, Estados Unidos, durante los años ochenta.', cols: 1, rows: 1},

  ];

}
