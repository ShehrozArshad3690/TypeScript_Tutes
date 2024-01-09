// explicit types
let fname: string;
let age: number;
let qualify: boolean;

// fname=18;                // gives error
fname = "Shehroz";
// age='Shehroz';           // gives error
age = 25;
// qualify=[];              // gives error
qualify = true;

// arrays
let fnames: string[] = [];            // =[]  =>  this means we are initializing the array of strings with an empty array
let ages: number[];

// fnames=[12,45,23,56];
fnames = ['Shehroz', 'bilal', 'Adeel'];
fnames.push('Anum');            // no error
// ages=['Shehroz','bilal','Adeel'];
// ages.push(38);                  // gives error  because it is not initialize with an empty array yet
ages = [23, 29, 27];

// union types
// this union type defines more than one data type in it
// let Mixed:(number|string)[]      =       [];
//       ^            ^                     ^
//       |            |                     |
// variable      data type   initialize value  of variable with an empty array
let Mixed: (string | number)[] = [];
Mixed.push(18);
Mixed.push('Shehroz');
// Mixed.push(true);        // gives error because this Mixed variable can infer only two data type of string or number
console.log(Mixed);

let uid: string | number;
uid = '123';
uid = 123;
// uid=true;            // gives error 

// objects

let person: object;
person = {
    fname: "Shehroz",
    age: 24,
    isAvailable: true
}

// person='Alpha';         // gives error because of different type
person=[];          // no error because array is a kind of object 

// if we want to restrict array too then we can simply do this
let personTwo:{
    fname:string,
    age:number,
    isAvailable:boolean
}


// personTwo=[];       // now it gives error because of not same structure of personTwo
personTwo={
    fname:'Kamran',
    age:28,
    isAvailable:false
}