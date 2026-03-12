const person = {
  name: "jhon",
  age: 30,
};
let arr = ["apple", "banana", "grapes", "orange", person];

//console.log(arr[4].name);
//console.log(arr.length);

/*arr.push("mango");
console.log(arr);
arr.pop();
console.log(arr);*/

/*arr.unshift("mango");
console.log(arr);
arr.shift();
console.log(arr);*/

/*or (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
} */

const number = [1, 2, 3, 4, 5];
/*const newNumber = number.map((num, index, array) => {
  return num * 20 + " " + index + 1 + " " + typeof 10;
});
console.log(newNumber);
*/

// spread and rest operator

const number1 = [1, 2, 3];
const number2 = [4, 2, 5, 6];
const combined = [...number1, ...number2];
//console.log(combined);

function sum(...args) {
  return args;
}
//console.log(sum(number1, number2));

//cancat
number1.concat(number2);
//console.log(newarr);
// slice
//const newarr = number1.slice(0, 2);
//console.log(newarr);
//console.log(number1);

//splice
//number1.splice(1, 1, 10);
//console.log(number1);

//fill
const dummy = [1, 2, 3, 4, 5];
dummy.fill(2, 2);
//console.log(dummy);

// findindex
//const index = number1.findIndex((num) => num === 3);
//console.log(index + 1);

// flat
/*const nested = [
  [1, 2],
  [3, 4],
];
const flat = nested.flat();
console.log(flat);*/

//reverse
//number1.reverse();
//console.log(number1);

// sort
//let unsorted = [3, 1, 4, 2, 5, 0, -2, 1.5];
//unsorted.sort((a, b) => b - a);
//console.log(unsorted);

//some questions
// find second largest number in array for no dulicates
let arr1 = [4, 2, 8, 4, 5, 10, 7, 6, 9, 1, 9, 10];
//function secondLargest(arr) {
// let sorted = arr.sort((a, b) => a - b);
// console.log(sorted[sorted.length - 2]);}
//secondLargest(arr1);

//function secondLargest2(arr) {
//const unique = [...new Set(arr)];
//unique.sort((a, b) => a - b);
//console.log(unique[unique.length - 2]);}
//secondLargest2(arr1);

// raote array by k times
function roate(arr, k) {
  for (let i = 0; i < k; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
}
let arr2 = [1, 2, 3, 4, 5];
//roate(arr2, 2);
//console.log(arr2);
//output [4, 5, 1, 2, 3]

//without using unshift and pop
/*function rotatearray(num, k) {
  let size = num.length;
  if (size > k) {
    k = k % size;
  }
  reverse(num, 0, size - 1);
}
function reverse(num, start, end) {
  while (start < end) {
    let temp = num[start];
    num[start++] = num[end];
    num[end--] = temp;
  }
}

let one = 1;
console.log(one++);
console.log(++one); */

// Question remove duplicates from sorted array

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
//console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5]));
// output [1, 2, 3, 4, 5]
