import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoryComponent } from './catagory/catagory.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'category',
    component : CatagoryComponent
  },
  {
    path: ':id',
    component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
