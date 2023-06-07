//1) declare an array with 5 items.
`let myArray = [1, 2, 3, 4, 5];`

//2) add an item to the array
`myArray.push(6);`

//3) update the third item in the array
`myArray[2] = 'new value';`

//4) let arr = [0,1,2,3,4,[5,6,7],8,9]
`let arr = [0, 1, 2, 3, 4, [5, 6, 7], 8, 9];`

//5) print 5 from the array define above
`console.log(arr[5][0]);`

//6) print the last item in the array above using the array length property
`console.log(arr[arr.length - 1]);`

//7) write a program that swaps 0 and 1 in the array and produces this output [1,0,2,3,4,[5,6,7],8,9]*/

let temp = myArray[0];
myArray[0] = myArray[1];
myArray[1] = temp;
console.log(myArray);

//8) declear an object call class with 3 properties
`let myObject = {property1: 'value1', property2: 'value2', property3: 'value3'};`

//9) add a new property to the object
`myObject.newProperty = 'newValue';`


// 10) print the first item from the object using the dot notation
let person = {name: "John", age: 30, city: "New York"};
console.log(person.name);

// 11) print the last item from the object using the square bracket notation
console.log(person["city"]);

// 12-15) create an array of objects
let people = [
  {name: "mary", contact: 0881999000},
  {name: "paul", contact: 0881999600},
  {name: "peter", contact: 0881999400},
  {name: "sara", contact: 0881999300}
];

// 16) print mary from the list of people
console.log(people[0].name);

// 17) add gender to each of the object in the array
people.forEach(person => {
  person.gender = "unknown";
});

// 18) add a new object to the list of people
people.push({name: "jane", contact: 0881999500, gender: "unknown"});

// 19) print sara's contact
console.log(people[3].contact);
