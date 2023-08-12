import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id:any;
  data:any={};
  loading:boolean=false;
  constructor(private route:ActivatedRoute ,private service:ProductsService){

    this.id= this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  
  ngOnInit(): void {
    this.getProduct();
    
  }

  getProduct(){
    this.loading=true;
    this.service.getProductById(this.id).subscribe(rec=>{
      console.log(rec);
      this.data=rec;
      this.loading=false;

    })

  }

}
