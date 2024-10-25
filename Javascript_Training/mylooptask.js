// Create a file called mylooptask.html. console.log numbers that are only divisible by 5 and 7  and between 0 to 500.
// The output should be 35, 70, 105...
// Hint: Use For loop and IF statements
let num = []
for (let i = 0; i <= 500; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        num.push(i);
    }
}
console.log(num);

// 1. Display numbers from 20 to 80 in console log
for (let j = 20; j <= 80; j++) {
    console.log(j);
}
// 2. Improve num 1 above, only display numbers divisible by 7 i.e 21, 28, 35
for (let k = 20; k <= 80; k++) {
    if (k % 7 === 0) {
        console.log(k);
    }
}
// 3. Store the numbers divisible by 7, in an array
let numbers = [];
for (let l = 20; l <= 80; l++) {
    if (l % 7 === 0) {
        numbers.push(l);
    }
}
// 4. Display that array with all the values.
console.log(numbers);
