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

