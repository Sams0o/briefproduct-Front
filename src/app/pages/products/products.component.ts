import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { DeleteProductComponent } from 'src/app/components/delete-product/delete-product.component';
import { UpdateProductComponent } from 'src/app/components/update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  allProduct!: Product[];
  productToDisplay!: Product[];
  productToDelete!: number;

  @ViewChild('editModal') editModal!: UpdateProductComponent;
  @ViewChild(DeleteProductComponent) confirmationModal!: DeleteProductComponent;

  constructor(
    private productsService: ProductService,
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.allProduct = [...res];
        this.productToDisplay = [...res];
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onDelete(productId:number){
    this.productToDelete= productId;
    this.confirmationModal.open()
  }

  deleteProduct(){
    this.productsService.removeProduct(this.productToDelete).subscribe({
      next:()=>{
        alert('Produit supprimé avec succès !')
        location.reload()
      }, error:(error)=>{
        console.error('Erreur lors de la suppression du produit', error)
      }
    })
  }

  onCancelDelete(){
    console.log('Suppression annulée')
  }

  onUpdate(product: Product) {
    this.editModal.open(product)
  }

}
