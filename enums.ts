// enums
enum ResourseType {
  Book,
  Author,
  Film,
  Director,
  Person,
}
interface Resourse<T> {
  uid: number;
  resourseType: ResourseType;
  data: T;
}

const docOne: Resourse<object> = {
  uid: 1,
  resourseType: ResourseType.Book,
  data: { title: "name of the wind" },
};

const docTwo: Resourse<object> = {
  uid: 2,
  resourseType: ResourseType.Person,
  data: { title: "Shehroz" },
};

console.log(docOne, docTwo);
