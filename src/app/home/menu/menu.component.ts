import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<any>();
  
  selectMenu(id: string){
    const menu = document.getElementById('homeOption')
  const visionuno = document.getElementById('visita01')
  const vistados = document.getElementById('visita02')
    if(id == 'home'){
      menu?.classList.add('selection')
      visionuno?.classList.remove('selection')
      vistados?.classList.remove('selection')
    }else if(id == 'visita01'){
      menu?.classList.remove('selection')
      visionuno?.classList.add('selection')
      vistados?.classList.remove('selection')
    }else{
      menu?.classList.remove('selection')
      visionuno?.classList.remove('selection')
      vistados?.classList.add('selection')
    }
  }
  close(){
    this.closeEvent.emit(true);
  }
  ngOnInit(): void {
  }
}
