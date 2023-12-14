import { Component, OnInit } from '@angular/core';
import { CountrysServiceService } from '../../services/countrys-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  country:string = 'Andorra'
  constructor(private servicesCountrys : CountrysServiceService){}
  openMenu(){
    const menu = document.getElementById('menu')
    menu?.classList.add('openMenu')
  }
  closeMenu(close: boolean){
    if(close==true){
      const menu = document.getElementById('menu')
      menu?.classList.remove('openMenu')
    }
    
  }
  ngOnInit(): void {
      this.servicesCountrys.getContinents()
  }
}
