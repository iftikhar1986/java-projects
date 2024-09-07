// Define the Student class
class Student {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  // Method to display student details
  displayDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Height: ${this.height}`);
  }
}

// Create an array of 5 Student objects
let students = [
  new Student("syed", 20, "5ft 9in"),
  new Student("iftikhar", 22, "5ft 6in"),
  new Student("Mark", 19, "5ft 8in"),
  new Student("Neel", 21, "5ft 7in"),
  new Student("Tom Green", 23, "6ft 1in")
];

// Print the names and ages of students whose age is greater than 21
console.log("Students with age > 21:");
students.forEach(student => {
  if (student.age > 21) {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
  }
});