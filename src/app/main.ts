import {faker} from '@faker-js/faker';
import {addProduct, products, updateProduct} from './products/product.service';

for (let index = 0; index < 10; index++){

  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(),10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    title: faker.commerce.productName(),
    stock: faker.number.int({min:10, max:100}),
    categoryId: faker.string.uuid()
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80
});
 console.log(product);
