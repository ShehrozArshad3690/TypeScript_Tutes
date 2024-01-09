// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
//   };

//   let docThree = addUID({ name: "Shehorz", age: 23 });
//   let docFourth =addUID('Shehroz')
//   console.log(docThree);

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docThree = addUID({ name: "Shehorz", age: 23 });
// // let docFourth =addUID('Sh')
// console.log(docThree);

// const addUID = <T extends {name:string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
//   };

//   let docThree = addUID({ name: "Shehorz", age: 23 });
// //   let docFourth =addUID('Sh')
//   console.log(docThree);

// interface resource {
//   uid: number;
//   resourseName: string;
//   data: Object;
// }

interface resource<T> {
  uid: number;
  resourseName: string;
  data: T;
}

const docfifth: resource<string> = {
  uid: 1,
  resourseName: "person",
  data: "Shehroz",
};

const docsixth: resource<string[]> = {
  uid: 2,
  resourseName: "persons",
  data: ["Bilal", "Kamran", "Saman"],
};

console.log(docfifth, docsixth);
