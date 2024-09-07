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

// Use filter to get students with age greater than 21
let studentsOver21 = students.filter(student => student.age > 21);

// Print the names and ages of the filtered students
console.log("Students with age > 21:");
studentsOver21.forEach(student => {
  console.log(`Name: ${student.name}, Age: ${student.age}`);
});
