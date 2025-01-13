// 1. Task: Array Filtering and Mapping
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 22, gender: "female" },
  { name: "Mike", age: 30, gender: "male" },
  { name: "Emily", age: 28, gender: "female" },
  { name: "Shaila", age: 21, gender: "Other" },
  { name: "Abdullah", age: 19, gender: "Other" },
];

const filterAndMapNames = (people) => {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const maleNames = filterAndMapNames(people);
console.log(maleNames);

// 2. Task: Object Manipulation
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

const bookTitles = getBookTitles(books);
console.log(bookTitles);

// 3. Task: Function Composition
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composedFunction = (num) => addFive(double(square(num)));

console.log(composedFunction(3));

// 4. Task: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Focus", year: 2018 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// 5. Task: Find and Modify
const peoples = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Mike", age: 30 },
];

const modifyPersonAge = (peoples, targetName, newAge) => {
  const person = peoples.find((person) => person.name === targetName);
  if (person) {
    person.age = newAge;
  }
  return people;
};

const updatedPeople = modifyPersonAge(people, "Jane", 28);
console.log(updatedPeople);
