const string = new String("Hello, World!");
const string2 = "Hello, World!"; // double quotes
const string3 = "Hello, World!"; // single quotes
const string4 = `Hello, World!`; // backticks

// string length
const str = "hello world";
//console.log(str.length); // 11
//console.log(str[4]); // o
//console.log(str.charAt(4)); // o

// looping through a string
for (let i = 0; i < str.length; i++) {
  //console.log(str[i]);
}
// modifying a string
//console.log(str.replace("world", "everyone")); // hello everyone
//console.log(str.replaceAll("o", "0")); // hell0 w0rld

const newstr = str.concat("!"); // hello world!
//console.log(newstr.trim()); // hello world!

// searching
//console.log(str.indexOf("o")); // 4
//console.log(str.startsWith("h")); // true
//console.log(str.endsWith("d"));

// Extracting a substring
//console.log(str.substring(0, 5)); // hello
//console.log(str.toUpperCase()); // HELLO WORLD!
//console.log(str);

// converting case
const toBeConverted = { name: "john" };
//console.log(String(toBeConverted)); // [object Object]
//console.log(JSON.stringify(toBeConverted)); // {"name":"john"}
//console.log("A" == "a"); // false
//console.log(str.charCodeAt(0)); // 104
//console.log(String.fromCharCode(104)); // h

const st = "hello world";
const st2 = " 123";

//onsole.log(st.localeCompare(st2)); // -1

// truncate the text
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

//console.log(truncateText("This is a long text that needs to be truncated.", 20),); // This is a long text...

//palindrome number

function ispalindrome(num) {
  return num < 0 ? false : num == +num.toString().split("").reverse().join("");
}

//console.log(ispalindrome("AXA")); // false
//console.log(ispalindrome("12321")); // true

// hamming Distance
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error("Strings must be of the same length");
  }
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
}

//console.log(hammingDistance("hello", "h7llo")); // 1

// valid anagram
function isAnagram(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
}
//console.log(isAnagram("listen", "silent")); // true
//console.log(isAnagram("hello", "world")); // false
