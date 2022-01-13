const students = require("./students.json");

for (let i = 0; i < students.length; i++) {
  console.log("Hello " + students[i].firstName + " " + students[i].lastName);
}
let chars = students.filter((char) => {
  return char.lastName[0] === "D";
});
console.log(chars.length);

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
