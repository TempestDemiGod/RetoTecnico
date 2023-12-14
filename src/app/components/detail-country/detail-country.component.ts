import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountrysServiceService } from 'src/services/countrys-service.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit{
  constructor(private servicesCountrys : CountrysServiceService){} 
  @Input() dataCountry:any
  @Output() closeEvent = new EventEmitter<any>();
  nameCountry:string=''
  flagCountry:string=''
  nameContinent:string=''
  allInfoCountrys:any =[]
  capital:string=''
  language:any
  population:string=''
  currency:string=''
  region:any
  states:any
  imgText :string=``
  imgCountry:string=''
  infoCountryPack:object={}
  loadInfo(){
    this.nameCountry = this.dataCountry.name
    this.nameContinent=this.dataCountry.continent.name
    this.capital=this.dataCountry.capital
    this.language=this.dataCountry.languages[0].name
    let namecurrency= this.dataCountry.currency
    this.states=this.dataCountry.states
    this.servicesCountrys.getAllCountries(this.nameCountry).then(res =>{
      if(res.ok){
          res.json().then(listCountries =>{
            this.allInfoCountrys = listCountries
            this.population = this.allInfoCountrys[0].population
            this.currency= this.dataCountry.currency
            this.flagCountry = this.allInfoCountrys[0].flags.png
            return listCountries
          })
        }
    })
    this.servicesCountrys.getImgCountries(this.nameCountry).then(res=>{
      if(res.ok){
      res.json().then(result=>{
      this.imgCountry = result.hits[0].largeImageURL
      this.imgText=`background-image: url("${this.imgCountry}");`
      })
    }
  })
  }
  close(){
    this.closeEvent.emit(true);
  }

  ngOnChanges() {
    this.loadInfo()
  }
  ngOnInit(): void {
    this.loadInfo()
    
  }
}
