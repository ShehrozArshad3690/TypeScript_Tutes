let Greet: Function;


// greet = 'street';               // gives error because of different type function and string

Greet = () => {
    console.log("Hello World");
}
Greet();


let add = (a: number, b: number, c?: number | string) => {                 // here ? makes the c variable optional
    console.log(a + b);
    console.log(c);                         // default value is undefined because it is optional and we are not passing it in function call
}

add(5, 10);


let sum = (a: number, b: number, c: number | string = 10) => {                 // here ? makes the c variable optional
    console.log(a + b);
    console.log(c);                         // here instead of undefined we are defining default value of c without ? and assigning value of c
}

sum(35, 7, 'shehroz');

let minus = (a: number, b: number) => {
    return a - b;
}
let result = minus(10, 6)
console.log(result);