import {Category} from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: Category;
}
