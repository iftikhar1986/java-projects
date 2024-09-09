let syedAge = 38;
let IftikharAge = syedAge;

console.log(" syedAge:  "+syedAge);
console.log(" IftikharAge: "+IftikharAge); // copy operation -> by value


syedAge = 40;
console.log(" syedAge:  "+syedAge);
console.log(" IftikharAge: "+IftikharAge);


let ages = [10,20,30,40,50]
let groupAges = ages        //copy operation -> by refrence

console.log(" ages:  "+ages);
console.log(" groupAges: "+groupAges);


groupAges[1] = 55
groupAges[2] = 66


console.log(" ages:  "+ages);
console.log(" groupAges: "+groupAges);