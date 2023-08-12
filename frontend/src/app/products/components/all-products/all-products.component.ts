import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})


export class AllProductsComponent implements OnInit{
  products:any[]=[];
  categories:any[]=[];
  cartProduct:any[]=[];
  loading:boolean=false;
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getProducts(),
    this.getCategories()
  }
  getProducts(){
    this.loading=true;
    this.service.getAllProducts().subscribe((res:any)=>{
     
     this.products= res;
     this.loading=false;
    },error=>{
      console.log(error);
      this.loading=false;
      alert(error);
    })
  }
  getCategories(){
   
    this.service.getAllCategories().subscribe((res:any)=>{

     this.categories= res;
    
    },error=>{
     
      console.log(error);
      alert(error);
    })
  }
  filterCategories(event:any){
    this.loading=true;

    let value =event.target.value;
    value=='all'? this.getProducts():this.getProductsCategory(value);
    this.loading=true;

    console.log(value);
  }

  getProductsCategory(keyword:string){
    this.loading=true;
    this.service.getProductByCategory(keyword).subscribe((rec:any)=>{
 
      this.products=rec;
      this.loading=false;
   
    });
  }

  addToCart(event:any){
    console.log(event);

  }



}
