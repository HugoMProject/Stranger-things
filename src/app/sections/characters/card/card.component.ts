import { Component, OnInit } from '@angular/core';
import { SelectCardService } from 'src/app/shared/select-card.service';
import { CharacterDescription } from 'src/app/models/charater-description.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // datos por defectos
public MainCharacter:any =[{
  img:'../../../../assets/once.png',
  name:'Event',
  decription:'Millie Bobby Brown',
}]
  constructor( private _selectCardService:SelectCardService) { }

  ngOnInit(): void {
    this._selectCardService.showCharacterInCard.subscribe(data => {
// llamas al array y eliminamos el elemento que contiene por defecto
      this.MainCharacter.shift();
     const {img,name,decription} = data
     // le hacemos un push al array con los nuevos datos para que sea dinamico
     this.MainCharacter.push({img,name,decription});

    })
  }


}
