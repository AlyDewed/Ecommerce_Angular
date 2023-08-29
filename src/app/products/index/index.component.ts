import { Product } from './../product';
import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  produits:Product[]=[]
  constructor(private prserv:ProductsService){}
  ngOnInit():void{
    this.prserv.getallArticles().subscribe((data:Product[])=> {this.produits=data})
  }

}
