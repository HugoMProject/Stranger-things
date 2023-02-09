import { Component } from '@angular/core';
import { SelectCardService } from 'src/app/shared/select-card.service';
import { CharacterDescription } from 'src/app/models/charater-description.interface';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  public characters:CharacterDescription[] = [
    {img:'../../../../assets/once.png',name:'Event',decription:'Millie Bobby Brown'},
    {img:'../../../../assets/jim-hopper 1.png',name:'Jim Hopper',decription:'David Harbour'},
    {img:'../../../../assets/joyce-byers 1.png',name:'Joyce Byers',decription:'Winona Ryder'},
    {img:'../../../../assets/Mike-wheeler 1.png',name:'Mike Wheeler',decription:'Finn Wolfhard'},
    {img:'../../../../assets/dustin-henderson 1.png',name:'Dustin Henderson',decription:'Gaten Matarazzo'},
    {img:'../../../../assets/lucas-sinclair 1.png',name:'Lucas Sinclair',decription:'Caleb McLaughlin'},
    {img:'../../../../assets/will-byers 1.png',name:'Will Byers',decription:'Noah Schnapp'}
  ]

  constructor(private _selectCardService:SelectCardService){}

  showinfo(character:any){
    //capturamos la los datos que mandamos por parametro y lo guardamos en una variable
    // y pasamos esa variable como parametro en la funcion del servicio.
    let characterName = character;
   return this._selectCardService.showCharacterInCard.emit(characterName)
  }
}
