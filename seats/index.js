let array = [
  { name: "Avi", age: 40 },
  { name: "Yash", age: 20 },
  { name: "Test", age: 35 },
  { name: "RC" },
  { name: "Jay", age: 10 },
];

// array.sort((a, b) => {
//   if (a?.name > b?.name) {
//     return 1;
//   } else if (a?.name < b?.name) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

array.sort((a, b) => a?.age - b?.age);

console.log(array);
