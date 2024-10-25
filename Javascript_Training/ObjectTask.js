//Create a new file called objectTask and attempt the below questions:
let my_object = [
  23,
  "Jane",
  560,
  ["Lesson", "Maths", { "currency": "KES" }],
  987,
  76,
  "John",
];

//Display:
//1. KES
console.log(my_object[3][2].currency);
//2. 560
console.log(my_object[2]);
//3. Maths
console.log(my_object[3][1]);
//4. In the object with the key currency, add another key “amount” with value 90
my_object[3][2].amount = 90;
console.log(my_object);

//5. Reverse 987 to 789 without using an inbuilt -methods or Assigning 789 manually.
//Hint: arrays can be reversed using reverse() functions

/* my_object[4] = 789;
console.log(my_object);  ---- The manual way*/

// my_object.splice(4,1, 789);
// console.log(my_object); The splice method way

//Convert to a String.
my_object[4]=my_object[4].toString();
//Split to form an array.
my_object[4]=my_object[4].split('')
//Reverse the array.
my_object[4]=my_object[4].reverse()
//Join the array back to a string.
my_object[4]=my_object[4].join('');
// Convert the reversed string back to a number.
my_object[4] = Number(my_object[4]); 
console.log(my_object);

//6. Change the name “John” to “Jane”.
my_object.splice(6,1, "Jane");
console.log(my_object);


