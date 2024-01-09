let fullName = 'Shehroz';
let Age = 23;
let isBlackBelt = false;


// fname=18;                // it gives us error because of number type cannot assign to string type 
fullName = 'Bilal';

// age = 'aslam';
Age = 35;

// isBlackBelt=12;
// isBlackBelt='Hello';
isBlackBelt = true;
console.log(fname, age, isBlackBelt);



// let result = (diameter) => {
//     return diameter * Math.PI;
// }

// console.log(result('Shehroz'));

let resultNumber = (diameter:number) => {
    return diameter * Math.PI;
}

console.log(resultNumber(17));