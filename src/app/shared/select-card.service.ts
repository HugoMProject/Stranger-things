import { Injectable } from '@angular/core';
import { CharacterDescription } from '../models/charater-description.interface';
@Injectable({
  providedIn: 'root'
})


export class SelectCardService {
character:CharacterDescription[]=[
  {img:'../../../../once.png',name:'Event',decription:'Millie Bobby Brown'},
  {img:'../../../../jin-hopper.png',name:'Jim Hopper',decription:'David Harbour'},
  {img:'../../../../joyce-byers.png',name:'Joyce Byers',decription:'Winona Ryder'},
  {img:'../../../../Mike-wheeler.png',name:'Mike Wheeler',decription:'Finn Wolfhard'},
  {img:'../../../../dustin-henderson.png',name:'Dustin Henderson',decription:'Gaten Matarazzo'},
  {img:'../../../../lucas-sinclair.png',name:'Lucas Sinclair',decription:'Caleb McLaughlin'},
  {img:'../../../../will-byers',name:'Will Byers',decription:'Noah Schnapp'}
]

  constructor() {}

  selectCard(name:string){

  }

}
