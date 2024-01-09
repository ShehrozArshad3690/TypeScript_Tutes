//  example 1
let greetMe: (a: string, b: string) => void;
greetMe = (fname: string, fclass: string) => {
    console.log(`${fname} is in class ${fclass}`);
}


//  example 2
let calc: (a: number, b: number, c: string) => number;
calc = (x: number, y: number, z: string) => {
    if (z === 'add') {
        return x + y;
    } else {
        return x - y;
    }
}
console.log(calc(10, 5, 'add'));


//  example 3
let logDetails: (obj: { name: string, age: number }) => void;
type person = { name: string, age: number }

logDetails = (alpha: person) => {
    console.log(`${alpha.name} is ${alpha.age} years old`);
}

logDetails({ name: 'Shehroz', age: 23 });