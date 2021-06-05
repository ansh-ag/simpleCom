import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productInfo;
  constructor(
    private activatedRoute:ActivatedRoute,
    private dataService:DataService
    ) { 
    this.activatedRoute.params.subscribe(data=>{
      const id = data['id'];
      this.dataService.getProductById(id).subscribe(productInfo=>{
        this.productInfo = productInfo
      })
    })
  }

  ngOnInit(): void {
  }

}
