import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountrysServiceService } from 'src/services/countrys-service.service';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit{
  @Input() NameCountry:string=''
  @Input() NameContinent:string=''
  @Input() dateCountry:any
  @Input() antiguaseleccion:any
  @Input() visualizarCierreInfo:any
  @Output() InfoCountryEvent = new EventEmitter<any>();
  flagCountry:string=''
  allInfoCountrys:any =[]
  imgCountry:string=''
  imgText :string=``
  infoCountryPack:object={}
  seleccionado:string=``
  validador:any
  constructor(private servicesCountrys : CountrysServiceService){}
  clickeo(){
    const card = document.getElementById(this.NameCountry) 
    const card2 = document.getElementById(this.antiguaseleccion) 
    card?.classList.add('card-select')
    if(card != card2){
      card2?.classList.remove('card-select')
    }
    this.seleccionado = this.NameCountry
    this.infoCountryPack ={
      'country': this.dateCountry,
      'seleccion': this.seleccionado
    }
    this.InfoCountryEvent.emit(this.infoCountryPack);
  }
  
  ngOnChanges(){
    if(this.visualizarCierreInfo == this.validador){
      
    }else{
      this.validador = this.visualizarCierreInfo
      const card = document.getElementById(this.NameCountry)
      card?.classList.remove('card-select')
    }
  }
  ngOnInit(): void {
    this.servicesCountrys.getImgCountries(this.NameCountry).then(res=>{
      if(res.ok){
      res.json().then(result=>{
      this.imgCountry = result.hits[0].largeImageURL
      this.imgText=`background-image: url("${this.imgCountry}");`
      })
    }
  })
   
      this.servicesCountrys.getAllCountries(this.NameCountry).then(res =>{
        
        if(res.ok){
            res.json().then(listCountries =>{
              
              this.allInfoCountrys = listCountries
              
              this.flagCountry = this.allInfoCountrys[0].flags.png
              return listCountries
            })
          }
        
      })
  }
}
