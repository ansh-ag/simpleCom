import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  products = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.activatedRoute.queryParams.subscribe(data=>{
      const category =  data['q']
      console.log(data['q']);
      this.dataService.getProductByCategory(category)
      .subscribe(products=>{
        this.products = products;
      })
    })
   }



  ngOnInit(): void {
  }

}
