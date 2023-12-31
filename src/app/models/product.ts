import { Category } from "./category";

export interface Product {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  category_id: Category;
}
