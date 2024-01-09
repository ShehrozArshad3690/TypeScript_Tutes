let age: any = 28;

age = '10';
console.log(age);
age = false;
console.log(age);
age = { fname: "saman" };
console.log(age);



let mixed: any[] = [];

mixed.push(18);
mixed.push('Shehroz');
mixed.push(true);
console.log(mixed);



let alpha: { fname: any, age: any };
alpha = { fname: 'Faisal', age: 25 };
console.log(alpha);
alpha = { fname: 21, age: 'Faizan' };
console.log(alpha);