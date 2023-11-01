import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  Product!: Product;
  toAddProduct!: FormGroup;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.createProduct();
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  createProduct() {
    this.toAddProduct = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    console.log("CE QU'ON ENVOIE",this.toAddProduct.value);
    if(this.toAddProduct.valid){
      this.productService.addProduct(this.toAddProduct.value).subscribe(data=>{
        alert('Vous avez bien ajouter votre produit !')
        this.router.navigate(['/products'])
      })
    }else{
      alert('Veuillez remplir tout les champs !')
    }
  }
}
