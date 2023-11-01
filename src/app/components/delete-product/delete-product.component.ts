import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  Product!: Product;
  isOpen = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Output() confirmEvent = new EventEmitter<void>();
  @Output() cancelEvent = new EventEmitter<void>();

  ngOnInit(): void {
  }

  deleteProduct() {
    this.productService.removeProduct(this.Product.id!).subscribe({
      next: (res) => {
         alert('Le produit a été supprimé avec succès.');
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error(error);
        alert("Une erreur s'est produite lors de la suppression du produit.");
      },
    });
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  confirm(){
    this.confirmEvent.emit()
    this.close()
  }

  cancel(){
    this.cancelEvent.emit()
    this.close();
  }
}
      
      
      
      
      
      
      
  


 