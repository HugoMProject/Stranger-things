import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showInfo(e:any){
    e.preventDefault()
    const boxInfo:any = document.querySelector('#info');
    boxInfo.addEventListener('click',eventBox())
    function eventBox(){
        if(boxInfo.classList.contains('displayOff')){
          boxInfo.classList.remove('displayOff');
          boxInfo.classList.add('info-container')
        }else{
          boxInfo.classList.remove('info-container');
          boxInfo.classList.add('displayOff')
        }
    }
  }

}
