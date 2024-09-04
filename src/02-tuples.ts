const prices: (number | string)[] = [1,3,2,2,2,'as'];
prices.push(1);
prices.push('1');

let user: [string, number,boolean];
// user = ['kaisherdev',15];
// user = ['12',15];

// user = [];
// user = ['kaisher'];
// user = ['kaisher',12];
user = ['kaisher',12,true];
const [username,age] = user;
console.log(username);
console.log(age);


