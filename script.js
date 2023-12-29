// for...in is suitable JSON objects (jsonData) because it iterates over object keys

const jsonData = {
  name: "Arshad",
  age: 27,
  profession: "FSD",
};

for (let data in jsonData) {
  console.log(`${data}: ${jsonData[data]}`);
}

// Output:

// name: Arshad
// age: 27
// profession: FSD

//  For JSON arrays (jsonArray), you can use for...of, a regular for loop, or forEach to iterate through the items, depending on your preference and specific use case.
//---------------------------------------------------------------------------

const jsonArray = [
  { name: "Arshad", profession: "Lab Technician" },
  { name: "Nawaz", profession: "Doctor" },
  { name: "Razi", profession: "Lab Technician" },
  { name: "Sadullah", profession: "Doctor" },
];

// for loop:

for (let i = 0; i < jsonArray.length; i++) {
  console.log(jsonArray[i]);
}

//For of

for (let dataof of jsonArray) {
  console.log(dataof);
}

// Feo Each

jsonArray.forEach((element) => {
  console.log(element);
});
//Output: for loop, for of, for Each

// { name: 'Arshad', profession: 'Lab Technician' }
// { name: 'Nawaz', profession: 'Doctor' }
// { name: 'Razi', profession: 'Lab Technician' }
// { name: 'Sadullah', profession: 'Doctor' }
//---------------------------------------------------------------------------
