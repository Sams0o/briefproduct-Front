import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allProduct!: Product[];
  productToDisplay!: Product[];

  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next:(res) => {
        this.allProduct = [...res];
        this.productToDisplay = [...res];
      },
      error:(error) => {
        console.error(error);
      }
    })
  }

}
