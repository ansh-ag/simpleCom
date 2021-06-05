import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories = []
  constructor(private dataService:DataService) { 
    this.dataService.getCatagories()
    .subscribe(data=>{
      this.categories = data
    })
  }

  ngOnInit(): void {
  }

}
