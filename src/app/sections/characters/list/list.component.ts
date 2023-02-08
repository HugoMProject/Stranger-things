import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  

  typesOfShoes: string[] = [
    'Eleven', 'Jim Hopper', 'Joyce Byers', 'Mike Wheeler', 'Dustin Henderson','Lucas Sinclair','Will Byers'
  ];

  showinfo(character:any){
    let characterName= character.innerHTML
    console.log(characterName);
  }
}
