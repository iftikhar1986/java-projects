import { Component, input } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  // name = "Hp-Laptop";
  // price = 10000;

  prod!: Product;
  @Input("name") pname!:string;
  @Input("price") pprice!:number;

  constructor() {
    this.prod = new Product("Dell-Laptop", 120000);
  }

  ngOnInit():void{
      this.prod.name = this.pname;
     // this.prod.price = Number(this.pprice);

  }
}
