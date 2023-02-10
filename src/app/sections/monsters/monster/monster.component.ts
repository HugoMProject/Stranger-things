import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
public dataMonster:Array<any>=[
  {id:1,name:'Demogorgon',description:'Criatura humanoide depredadora'},
  {id:2,name:'Mind Flyer',description:'Controla la mente de las personas'},
  {id:3,name:'Vecna',description:'Posee a sus víctimas y se alimenta de sus traumas mas oscuros'}
]
  constructor(private _snackBar:MatSnackBar) { }
  ngOnInit(): void {}

  openSnackBar(monster:string){
    const Monster = monster
    const result = this.dataMonster.find(monster=>monster.id == Monster);
    const {name,description } =result
    this._snackBar.open(`${name} :  ${description} `,'Salir')
  }
}
