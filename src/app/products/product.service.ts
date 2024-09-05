import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: '12',
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: data.categoryId,
      name: 'c1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }
  products.push(newProduct);
  return newProduct;
}
