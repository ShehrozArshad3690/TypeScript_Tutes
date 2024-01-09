// arrays
let names = ['shehroz', 'bilal', 'adeel'];          // here we are assigning an array with string data type

// names = 'Salman';                // gives error because of different type

// names.push(18);                  // gives error
// names[0]=40;                     // gives error
names.push('Akram');


let ages = [34, 23, 27];                               // here we are assigning an array with number data type

// ages.push('shehroz');            // gives error
// ages[2]='Bilal';                 // gives error
ages.push(45);

let mixed = ['Shehroz', 23, "bilal", 28, 'Adeel', 25];         // here we are assigning an array with two different data types

mixed.push('Anum');                 // no error
mixed.push(22);                     // no error
mixed[0] = 35;                        // no error


// objects

let person = {
    fname: 'Shehroz',
    age: 23,
    qualify: true
}

person.fname='bilal';
person.age=40;
// person.age='Asad';              // gives error because of different type
// person.skils='Javascript';          //gives error because of absence of skill property in person object

// person=[];          //gives error
// person='';          //gives error

// person={
//     f_name:"Akram"               // gives error because of no definition of f_name property in pre-defining object(person)
// }

person={
    fname:'Junaid',
    age:35,
    qualify:false,
}