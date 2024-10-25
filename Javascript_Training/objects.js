console.log("jsonObjects");
let person = {
  name: "Sheldon Njagi",
  age: 24,
  city: "Nairobi",
};
console.log(person);
console.log(person.age);
console.log(person["name"]);

//Adding properties to an object.
person["locaton"] = "Kerugoya";
console.log(person);

// add an array of skills
person["skills"] = [
  "html",
  "css",
  [20, 30, 40],
  "javascript",
  "python",
  "java",
];
console.log(person);
console.log(person.skills[1]);
//Dispaly 40
console.log(person.skills[2][2]);

//Modifying Values
person["age"] = 25;
console.log(person);

//Methods
// keys => used to display all keys in an object
console.log(Object.keys(person));

// values => used to display all values in an object.
console.log(Object.values(person));

// both key and values => used to display all key and  values in an object.

console.log(Object.entries(person));
