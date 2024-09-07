class Student {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Height: ${this.height}`);
    }
  }
  
  let students = [
    new Student("Sameer", 20, "5ft 9in"),
    new Student("Iftikhar", 22, "5ft 6in"),
    new Student("Neel", 19, "5ft 8in"),
    new Student("Lucy", 21, "5ft 7in"),
    new Student("Tom", 23, "6ft 1in")
  ];
  
  students.forEach(student => {student.displayDetails();
  });