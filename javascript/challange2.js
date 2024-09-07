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
  new Student("John Doe", 20, "5ft 9in"),
  new Student("Jane Smith", 22, "5ft 6in"),
  new Student("Mark Lee", 19, "5ft 8in"),
  new Student("Lucy Brown", 21, "5ft 7in"),
  new Student("Tom Green", 23, "6ft 1in")
];

// Remove students at index 1 and 2 (Jane Smith and Mark Lee)
let removedStudents = students.splice(1, 2);

// Print the names of the removed students
console.log("Removed Students:");
removedStudents.forEach(student => {
  console.log(student.name);
});

// Optional: Display the remaining students
console.log("\nRemaining Students:");
students.forEach(student => {
  student.displayDetails();
});
