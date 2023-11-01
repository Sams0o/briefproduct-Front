import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit{
  product!: Product;
  editForm!: FormGroup;
  categories: Category[]=[];
  isOpen = false;


  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      category_id: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadCategories()
  }

  open(product:Product){
    this.product= product;
    this.editForm.patchValue({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category_id: product.category_id ? product.category_id.id : null
    });
    this.isOpen = true;
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })
  }

  close(){
    this.isOpen=false;
  }

  onSubmit(){
    console.log(this.editForm.value, 'FOOORMS')
    if(this.editForm.valid){
      const updatedProduct = {
        ...this.product,
        name: this.editForm.get('name')?.value,
        price: this.editForm.get('price')?.value,
        quantity: this.editForm.get('quantity')?.value,
        category_id: this.editForm.get('category_id')?.value,
      };
      this.productService.updateProduct(updatedProduct).subscribe(()=>{
        this.close();
        alert('Le produit a été mis à jour avec succès.');
        location.reload()
      }, error=>{
        console.error(
          'Une erreur est survenue lors de la mise à jour du produit :',
          error
        );
      })
    }
  }
}
