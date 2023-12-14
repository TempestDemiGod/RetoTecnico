import { Component, OnInit } from '@angular/core';
import { CountrysServiceService } from '../../../services/countrys-service.service';

import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit{
  imgText=[`background-image: url('../../../assets/africaContinent.png');`,`background-image: url('../../../assets/asiaContinent.png');`,`background-image: url('../../../assets/asiaContinent.png');`,`background-image: url('../../../assets/europaContinent.png');`,`background-image: url('../../../assets/asiaContinent.png');`,`background-image: url('../../../assets/americaContinent.png');`,`background-image: url('../../../assets/asiaContinent.png');`,`background-image: url('../../../assets/oceaniaContinent.png');`,`background-image: url('../../../assets/asiaContinent.png');`,`background-image: url('../../../assets/americaContinent.png');`]
  loading: boolean;
  allcontinents: any;
  close: boolean = false;
  private querySubscription: Subscription;
  infoCountry!:any
  infosave :number = 1
  listCountrys:Array<string> = []
  countrys:any 
  country:string = ''
  imgCountry:string = ''
  oldSelectionCountry:string='Aruba'
  cierreInfo:boolean=false
  constructor(private apollo: Apollo,private servicesCountrys : CountrysServiceService){
    this.querySubscription = new Subscription();
    this.loading = false;
  }
  addcontinents(continent:string){
    let continentLetters:string=''
    if(continent == "Africa"){
      continentLetters= "AF"
    }else if(continent == "Antarctica"){
      continentLetters= "AN"
    }else if(continent == "Asia"){
      continentLetters= "AS"
    }else if(continent == "Europe"){
      continentLetters= "EU"
    }else if(continent == "North America"){
      continentLetters= "NA"
    }else if(continent == "Oceania"){
      continentLetters= "OC"
    }else if(continent == "South America"){
      continentLetters= "SA"
    }
    const index = this.listCountrys.indexOf(continentLetters);
      if (index !== -1) {
        this.listCountrys.splice(index, 1);
      } else {
        this.listCountrys.push(continentLetters)
      }
    const cardSelect= document.getElementById(`${continent}`)
    cardSelect?.classList.toggle('select')
  }
  clearFilter(){
    this.listCountrys = []
    const cardsSelect= document.querySelectorAll(`.allContinents`)
    cardsSelect.forEach((card) => {
      card.classList.remove('select')
    });
  }
  state(){
    const contenedor = document.getElementById('contendor-info')
    contenedor?.classList.add('seccion-grid')
  }
  buscar(){
    this.searchCountries()
  }
  saveInfoCountry(countryInfo:any){
    this.infoCountry = countryInfo.country
    this.close= true
    this.oldSelectionCountry = countryInfo.seleccion
  }
  closeinfo(cierre:boolean){
    this.close= false
    if(this.cierreInfo == true){
      this.cierreInfo = false
    }else{
      this.cierreInfo = true
    }
    const contenedor = document.getElementById('contendor-info')
    contenedor?.classList.remove('seccion-grid')
  }
  searchCountries(){
    // query continents 
    let text = ''
    if(this.listCountrys.length == 0){
      text = ''
    }else{
      let continents = JSON.stringify(this.listCountrys);
      text =`
      continent: {
        in: ${continents}
      },
      `
    }
   
  this.querySubscription = this.apollo
    .watchQuery<any>({
      query: gql`
      query{
        
        continents {
          name
          code
        }
    }
      `,
    })
    .valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.allcontinents = data.continents;
    });
    // query countries
    this.querySubscription = this.apollo
    .watchQuery<any>({
      query: gql`
      query ListCountriesWithUnitedNames {
        countries(filter: {
          name: {
            regex: "^${this.country}"
          }
          ${text}
          
        }) {
          capital
          name
          currency
          languages{
            name
          }
          continent {
            name
            code
          }
          states{
            name
          }
        }
      }
      `,
    })
    .valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.countrys = data.countries;
    })
  }

  
  ngOnInit(): void {
    this.searchCountries()
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
