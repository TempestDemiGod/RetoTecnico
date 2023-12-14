import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CountrysServiceService {
  
  private baseUrl : string;
  constructor() {
    this.baseUrl = 'https://countries.trevorblades.com/'
   }
  
   
   getContinents(){
    fetch(this.baseUrl,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        query:`
        query {
          continents {
            name
            code
          }
        }
        `
      })
    })
    .then(res => res.json())
    .then(data => {
    })
   }
   async getAllCountries(country:string){
    let datos = await fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>{
        return res
      })
      return datos
   }
   async getImgCountries(country:any){
    let datos = await fetch(`https://pixabay.com/api/?key=41230396-c611fa3345f463ca9c5d18715&q=${country}+city&image_type=photo&per_page=3`).then(res=>{
        return res
      })
      return datos
    
   }

}
