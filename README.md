# **Tipos avanzados y funciones de TypeScript**

## [__Tabla de contenido__](#TOC)

- [Introducción](#introducción)
  - [Conocimientos previos Fundamentos de TypeScript](#conocimientos-previos)
  - [Configuración del Proyecto con ts-node](#config-ts-node)
- [New Types](#sección-1)
  - [Tuples](#subsección-11)
  - [Enums](#subsección-12)
  - [Unknown type](#subsección-13)
  - [Never Type](#subsección-14)
- [Funciones](#sección-2)
  - [Parámetros opcionales y nullish-coalescing](#subsección-21)
  - [Parámetros por defecto](#subsección-22)
  - [Parámetros reset](#subsección-23)
  - [Sobrecarga de funciones: el problema](#subsección-24)
- [Interfaces](#sección-3)
  - [interfaces](#subsección-31)
  - [Estructuras complejas](#subsección-32)
  - [Extender interfaces](#subsección-33)
  - [Propiedades de solo lectura](#subsección-34)
- [Proyecto](#sección-4)
  - [Omit y Pick type](#subsección-41)
  - [Ejemplo de CRUD](#subsección-42)
  - [Partial y Required Type](#subsección-43)
  - [Readonly type](#subsección-44)
  - [Acceder al tipado por índice](#subsección-45)
  - [ReadonlyArray](#subsección-46)


## [Introducción](#introducción)

### [Conocimientos previos Fundamentos de TypeScript](#conocimientos-previos)

 _Se necesita contar con conocimientos previos sobre Fundamentos de TypeScript._

 ### [Configuración del Proyecto con ts-node](#config-ts-node)

_- Iniciar node `npm init -y`_
  
_- Instalar `typescript` con el comando `npm install typescript`_
  
_- Inicializar repo `git init`_
  
_- Iniciar a transpilar `npx tsc`_
  
_- Transpilar continuamente `npx tsc --watch`_
  
_- Utilizaremos librería [ts-node]('https://typestrong.org/ts-node/')_
  
_- Ejecutamos el siguiente comando `npx ts-node src/demo.ts`_

## [New Types](#sección-1)

### [Tuples](#subsección-11)

Crea el archivo en la ruta `src/01-tuples.ts`

```ts
const prices: (number | string)[] = [1,3,2,2,2,'as'];
prices.push(1);
prices.push('1');

let user: [string, number,boolean];
// user = ['kaisher',15];
// user = ['12',15];

// user = [];
// user = ['kaisher'];
// user = ['kaisher',12];
user = ['kaisher',12,true];
const [username,age] = user;
console.log(username);
console.log(age);

```

### [Enums](#subsección-12)

Crea el archivo en l aruta `src/enums.ts`

```ts
export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string;
  role: ROLES;
}

const kaisherUser: User = {
  username: 'kaisherdev',
  role: ROLES.SELLER,
}

```

### [Unknown type](#subsección-13)

Crea el archivo llamado unknown en `src/unknown.ts`

```ts
// Con any
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();

// Con unknown
let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething(); //-> no permite

if (typeof unknownVar==='string'){
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown=>{
  return JSON.parse(str);
}

if (typeof unknownVar === 'boolean'){
  let isNewV2: boolean = unknownVar;
}

```

### [Never type](#subsección-14)

```ts
const withoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
}
console.log(example('Hola'));
console.log(example([1,1,1,1]));
console.log(example(1212)); // detiene
console.log(example('Hola despues del fail'));

```

## [Funciones](#sección-2)

### [Parámetros opcionales y nullish-coalescing](#subsección-21)

```ts
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

// 0 === false
// '' === false
// false == false

const p1 = createProduct(1,true,12);
console.log(p1)

const p2 = createProduct(1);
console.log(p2)

const p3 = createProduct(1,false,0);
console.log(p3)

```

### [Parámetros por defecto](#subsección-22)

```ts
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number=10,
) => {
  return {
    id,
    stock,
    isNew,
  }
}

// 0 === false
// '' === false
// false == false

const p1 = createProduct(1,true,12);
console.log(p1)

const p2 = createProduct(1);
console.log(p2)

const p3 = createProduct(1,false,0);
console.log(p3)

const p4 = createProduct(1,true,100);
console.log(p4)

const p5 = createProduct(5,false);
console.log(p5)

```

### [Parámetros reset](#subsección-23): 

```ts
import {User,ROLES} from './01-enum';

const currentUser: User = {
  username: 'kaisher',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN){
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole = (role1: string, role2: string)=>{
  if (currentUser.role === role1){
    return true;
  }
  if (currentUser.role === role2){
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN,ROLES.SELLER);
console.log('checkRole', rta2);

export const checkRoleV2 = (roles: string[])=>{
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN,ROLES.SELLER]);
console.log('checkRoleV2', rta3);


export const checkRoleV3 = (...roles: string[])=>{
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN,ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);

```

### [Sobrecarga de funciones: el problema](#subsección-24)

Ejemplo 1: `src/overload.ts`

```ts
// Kaisher => [K,a,i,s,h,e,r] => string => string[]
// [K,a,i,s,h,e,r] => Kaisher => string[] => string

function parseStr(input: string  | string[]): string | string[]{
  if (Array.isArray(input)){
    return input.join(''); // string
  } else{
    return input.split(''); // string[]
  }
}

const rtsArray = parseStr('Kaisher');
// rtsArray.reverse();
if (Array.isArray(rtsArray)){
  rtsArray.reverse();
}
console.log('rtaArray','Kaisher =>', rtsArray);

const rtaStr = parseStr(['K','a','i','s','h','e','r']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string'){
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['K','a','i','s','h','e','r'] =>", rtaStr);

```
Ejemplo 2: `overload-2.ts`

```ts
// Kaisher => [K,a,i,s,h,e,r] => string => string[]
// [K,a,i,s,h,e,r] => Kaisher => string[] => string

function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr(input: string  | string[]): string | string[]{
  if (Array.isArray(input)){
    return input.join(''); // string
  } else{
    return input.split(''); // string[]
  }
}

export const rtsArray = parseStr('Kaisher');
rtsArray.reverse();
// if (Array.isArray(rtsArray)){
//   rtsArray.reverse();
// }
console.log('rtaArray','Kaisher =>', rtsArray);

const rtaStr = parseStr(['K','a','i','s','h','e','r']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string'){
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['K','a','i','s','h','e','r'] =>", rtaStr);

```

Ejemplo 3: `src/overload-3.ts`

```ts
// Kaisher => [K,a,i,s,h,e,r] => string => string[]
// [K,a,i,s,h,e,r] => Kaisher => string[] => string

function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr(input: string  | string[]): string | string[]{
  if (Array.isArray(input)){
    return input.join(''); // string
  } else{
    return input.split(''); // string[]
  }
}

export const rtsArray = parseStr('Kaisher');
rtsArray.reverse();
// if (Array.isArray(rtsArray)){
//   rtsArray.reverse();
// }
console.log('rtaArray','Kaisher =>', rtsArray);

const rtaStr = parseStr(['K','a','i','s','h','e','r']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string'){
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['K','a','i','s','h','e','r'] =>", rtaStr);


```

## [Interfaces](#sección-3)

### [Interfaces](#subsección-31)

```ts
type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: string | number;
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
}

```
### [Estructuras complejas](#subsección-32)

_Crear el directorio `app` dentro de ella los directorios `categories`, `orders`. `products` y `users`. Y sus respectivos archivos según árbol de directorios y archivos_

```bash
.
├── src/
│   ├── app/
│   │   ├── categories/
|   │   │   └── category-model.ts
│   │   ├── orders/
│   │   │   └── order-model.ts
│   │   ├── products/
│   │   │   ├── product-model.ts
│   │   │   └── product-service.tsx
│   │   ├── users/
│   │   │   └── user-model.ts
│   │   ├── main.ts
│   │   └── base-model.ts
│   ├── demo.ts
│   └── 01-tuples.ts
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
└── .editorconfig

```

### [Extender interfaces](#subsección-33)

```ts
// base-model.ts
export interface BaseModel {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
}
```

### [Propiedades de solo lectura](#subsección-34)

## [Proyecto](#sección-4)

### [Omit y Pick Type](#subsección-41)

### [Ejemplo de CRUD](#subsección-42)

### [Partial y Required Type](#subsección-43)

### [Readonly Type](#subsección-44)

### [Acceder al tipado por indice](#subsección-45)

### [ReadonlyArray](#subsección-46)

```ts
// Permite la Mutabilidad
const numbers1: number[] = [1,2,3,4,5];
numbers1.push(9);
numbers1.pop();
numbers1.unshift(1);
console.log(numbers1);

// Evitar mutabilidad en arrays
const numbers2: ReadonlyArray<number> = [1,2,3,4,5];
// numbers2.push(9);
// numbers2.pop();
// numbers2.unshift(1);

numbers2.filter(()=>{});
numbers2.reduce(()=>0);
numbers2.map(()=>0);

console.log(numbers2);

```

