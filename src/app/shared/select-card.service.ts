import { Injectable,Output , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDescription } from '../models/charater-description.interface';

@Injectable({
  providedIn: 'root'
})


export class SelectCardService {
@Output() showCharacterInCard:EventEmitter<any> = new EventEmitter();
  constructor() {}
 




}
