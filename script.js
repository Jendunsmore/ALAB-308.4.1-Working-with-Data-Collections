// Part 1: Refactoring Old Code

let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = ``; // Cell //ind. cell values
let row = ``; // row //store entire row as string
let result = [];  //store array
let lines = string.split('\n'); //split string by new line- get row


for (let i in string) {
  //For index in string
  if (string[i] == ',') {
    row = row + cell + ' '; // Add cell to row
    cell = ``; // Emptying cell to reuse
  } else if (string[i] == '\n') {
    row += cell; // Add final cell to row
    cell = ``; // Clear cell
    console.log(row); // Print row
    row = ``; // Clear row
  } else {
    cell += string[i]; //If char, add to current cell
  }

  //If we reach final character in string, print final row
  if (i == string.length - 1) {
    //string.length is length of string - 114 - index is 114
    row += cell; // Add final cell
    console.log(row); // Print row
  }
}

//Part 2:

//Tasks
// - Declare a variable that stores the number of columns in each row of data within the CSV.
// - Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

/*
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = ``; // Cell //ind. cell values
let row = ``; // row //store entire row as string
let result = [];  //store array
let lines = string.split('\n'); //split string by new line- get row
*/

//Loops through each line
for (let i = 0; i < lines.length; i++) {
  let cells = lines[i].split(','); //Split each line by commas
  result.push(cells); //Add array to result
}
console.log(result);


//Part 3: Transforming Data

//Tasks:
//- For each row of data in result array from previous code, create an obj
//where key value is that value's column heading
//- Convert to lowerCase
//- Store obj as arr, in order as listed
//- Don't create obj for heading row itself


/*
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = ``; // Cell //ind. cell values
let row = ``; // row //store entire row as string
let result = [];  //store array
let lines = string.split('\n'); //split string by new line- get row
*/
//Extract and lowercase the headings
let headings = result[0].map(header => header.toLowerCase());
let objectsArray = [];

// Loops through each row after the heading row
for (let i = 1; i < result.length; i++) {
  let row = result[i];
  let obj = {};
  for (let j = 0; j <headings.length; j++) {
    obj[headings[j]] = row[j]; //Map heading to cell value
  }
  objectsArray.push(obj); //Add object to the array
}
//output of the array of objects
console.log('Array of objects:', objectsArray);



// Part 4: Sorting and Manipulating Data

//Requirements:
// 1. Remove last element from sorted arr
// 2. Insert the following obj @ index 1:
//{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
// 3. Add following obj to end of arr:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
// 4. Use values of each obj in arr & arr length property to calculate
//avg age of group using loop


// Remove last element = pop
// Insert new element = splice? newObject, index 1
// Add obj to end = push

objectsArray.pop(); // Remove last element
objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); // Insert new element
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); // Add obj to end

let totalAge = 0; //ages total
for (let i = 0; i < objectsArray.length; i++) {
  totalAge += Number(objectsArray[i].age);
}
let averageAge = totalAge / objectsArray.length; //calculate age
console.log(averageAge);


// Part 5: Full Circle

//Transform final set of data back into CVS format

