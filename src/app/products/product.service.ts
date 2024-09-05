import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'dkjfdkjfn' Solo de lectura no editar
  products.push(data);
}
