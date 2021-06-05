import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  private getData(){
    return this.http.get('assets/data/products.json')
  }

  getCatagories():Observable<string[]>{
    let catagories = []
    return this.getData()
    .pipe(map((data:any[])=>{
      console.log(data)
      for(let i = 0;i < data.length;i++){
        const element = data[i];
        console.log(element);
        if(catagories.indexOf(element.category) == -1){
          catagories.push(element.category)
        }
      }
      return catagories;
    })) 
  }

  getProductByCategory(category:string){
    return this.getData()
    .pipe(map((data:any[])=>{
      console.log(category)
      return data.filter(element=> element.category == category)
    }))
  }

  getProductById(id:number){
    return this.getData()
    .pipe(map((data:any[])=>{
      return data.find(element=> element.id == id)
    }))
  }
}
