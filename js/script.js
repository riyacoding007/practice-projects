 /* 
const words = ["dog", "cat", "dog", "bird", "cat", "dog"];
const map = new Map();
const dup = [];

for (let word of words){
    if(map.has(word)){
        map.set(word,map.get(word) + 1);  // increment count of value
            if(map.get(word) === 2){
                dup.push(word);                 
            }
    }
    else{
        map.set(word, 1);
    }
}
console.log(dup);
 
const str = "aabccdee";
const map1 = new Map();

for (let char of str) {
    if (map1.has(char)) {
        map1.set(char, map1.get(char) + 1);
    } else {
        map1.set(char, 1);
    }
}

console.log(map1);


console.log(null || "user")

console.log(true && "X");

console.log(false && "X");

console.log(true || "X");

console.log(false || "X");


let number = "o";

// execute unless the number is not a number
if (!isNaN(number)) {      
console.log("the square of the number is " + number * number);    // 16
}else {
    console.log("the value is not a number");
}


console.log("the square of the number is " + Math.pow(number, 2));   // num * num = answer

console.log("the square root of the number is " + Math.sqrt(number));

let number = Number(prompt("pick a number"));
if(!isNaN(number)) {
    console.log("square root is " + number * number);
}else {
    console.log("hey, that's not a number");
}


let num = prompt("pick a number");

if (num < 10 ){
    console.log("small");
}else if(num < 100) {
    console.log("medium");
}else {
    console.log("large");
}   

    while loop
let number = 0;
while(number <= 12) {
    console.log(number);
    number = number + 2 ;
}

         while loop         counter binding
let result = 1;
let count = 0;
while(count < 10) {
    result = result * 2;
    count = count + 1;
}
console.log(result);


for loop 

for( let i = 0; i <= 12; i = i + 2) {
    console.log(i);
}

let result = 1;
for (let i = 0; i < 10; i++) {
    result = result * 2
}
console.log(result);

do loop
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);

console.log(yourName);


for(let i = 15; ; i++) {
    if (i % 6 == 0) {
        console.log(i);
        break;  // exit the loop when a number is found
    }
}// 18




while loop
let i;
while(Number(i) !== 0) {
    i = prompt("Enter a number (0 to exit): ");
    console.log(i);
}

for loop
for(let i;Number(i) !== 0;) {
    i = prompt("Enter a number (0 to exit): ");
    console.log(i);
}

for loop

let scores = [90,80,70,60,50];

for (let i = 0; i < scores.length; i++) {
    console.log("Score " + (i + 1) + " is " + scores[i]);
}

while loop
let scores = [90,80,70,60,50];
let i = 0;
while (i < scores.length) {
    console.log("Score " + (i + 1) + " is " + scores[i]);
    i++;
}


switch (prompt("What is the whether like?")) {
    case "rainy":
        console.log("Take an umbrella");
        break;
    case "sunny":
        console.log("Wear sunglasses");      
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown whether type");
        break;
}

prompt("What is the weather like?") === "rainy" ? console.log("Take an umbrella") :
prompt("What is the weather like?") === "sunny" ? console.log("Wear sunglasses") :
prompt("What is the weather like?") === "cloudy" ? console.log("Go outside") : console.log("Unknown whether type");

whether = prompt("What is the weather like?")
if (whether === "rainy") {
    console.log("Take an umbrella");
} else if (whether === "sunny") {
    console.log("Wear sunglasses");
} else if (whether === "cloudy") {
    console.log("Go outside");
} else {
    console.log("Unknown whether type");
}


let num;
for (let i = 1; i <= 7; i++) {
    num = i;
    console.log("#".repeat(num));
}




let num1 = 0;
for (let i = 1; i <= 7; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "#";
    }
    console.log(str);
}
*/


// for(let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if (i % 3 === 0){
//         console.log("Fizz");
//     }else if (i % 5 === 0){
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }


// for(let i = 1; i <= 100; i++) {
// (i % 3 === 0 && i % 5 === 0) ? console.log("FizzBuzz") :
// (i % 3 === 0) ? console.log("Fizz") :   
// (i % 5 === 0) ? console.log("Buzz") : console.log(i);
// }



// for (let i = 1; i <= 7; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "#";
//     }
//     console.log(str);
// }



// for(let i = 1; i <= 8; i++) {
//     let str = "";
//     for(let j = 1; j <= 8; j++) {
//         if ((i + j) % 2 === 0) {
//             str += "#";  // even sum of indices
//         } else {
//             str += " ";  // odd sum of indices
//         }
//     }
//     console.log(str);
// }


// const square = function(x) {
//     return x * x;
// }


// console.log(square(2));


// const power = function(base, exponent) {
//     let result = 1;
//     for ( let i = 0; i < exponent; i++) {
//         result = result * base;
//         console.log(result);
//     }
//     console.log("final result is " + result);
//     return result;
// }

// power(2,10);


// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;    /// visible throughout the global function if written in a scope, and not in a function
//     console.log(x + y + z);
// }
// console.log(x + z);

// // inner most binding hides the outer one 
// const halve = function(n) {
//     return n/2;
// }


// let n = 10;
// console.log(n/2);  // Outputs: 5
// console.log(halve(100));  // Outputs: 50

// let launch = function() {
//     missileSystem.launch("now");
// };
// if (safeMode) {
//     launch = function() {
//         console.log("Launch aborted");   // do nothing
//     }
// }



//   const square1 = (x) => { return x * x; }
//   const square2 = x => x*x;  // implicit return   

//     closure because of lexical funciton and memory reference 
//     beacuse   it removes from the stack      - the call stack
// function wrapValue(n) {
//     let local = n;
//     return () => local;    
// }

// const wrap1 = wrapValue(1);
// const wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());



// function minus (a, b) {
//     if (b === undefined) return -a;
//     return a - b;
// }

// console.log(minus(10));
// console.log(minus(10, 5));

// // optional arguemnts 
// const square = x => x * x;
// console.log(square(4, 2399999));  // Outputs: 16


// const chicken = () => egg();
// const egg = () => chicken();
// console.log(chicken() + ("came first"));  



// let power = (base, exponent = 2) => {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// };

// console.log(power(2));
// console.log(power(2,3));


// function multiplier(factor) {
//     return number => number * factor;
// }

// let twice =  multiplier(2);
// console.log(twice(5));

// function findSolution(target) {
//     function find(current, history) {
//         if(current === target) {
//             return history;
//         }else if(current > target){
//             return null;
//         }else {
//             return find(current + 5, `(${history} + 5)`) ||
//             find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }    


// console.log(findSolution(24));



// function printFarmInventary(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);

//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }

// printFarmInventary(7, 11);




// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }

//     console.log(`${numberString} ${label}`);
// }
// printZeroPaddedWithLabel(7);

// function printFarmInventary1(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");    
// }
// printFarmInventary1(7, 11, 3);


// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = "0" + string;
//     }
//     return string;
// }

// function printFarmInventary(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
// }
// printFarmInventary(7, 11, 3);


// const f0 = function(a) {
//     console.log(a + 2);
// }


// function f1(a) {
//     console.log(a + 2);
// }

// const f2 = (a) => a + 2;


// let findMin = (a, b) => a < b ? a : b; 

// console.log(findMin(9, 7)); 


// function isEven(n) {

//     if (n < 0) return isEven(-n);    // convert negative to positive

//     if (n == 0) {
//         return true;
//     }else if (n == 1) {
//         return false;
//     }else {
//         return isEven(n - 2);
//     }
// }  
// console.log(isEven(-2));


// function countBs(string) {
//     let s = String(string);
//     let count = 0;
//     for(let i = 0; i < s.length; i++){
//         if(string[i] == "B"){
//             count++;
//         }else{
//             count;
//         }
//     }
//     return count;
// }
// console.log(countBs("hvbjBBBBb"));



// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[3]);
// console.log(listOfNumbers[0]);
// console.log(listOfNumbers[3-2]);


// let doh = "Doh";
// console.log(typeof doh.toUpperCase);
// console.log(doh.toUpperCase());


//   let sequence = [1, 2 , 3];
//   sequence.push(4);
//   sequence.push(5);
//   console.log(sequence);
//   console.log(sequence.pop());
//   console.log(sequence);
//   console.log(sequence.push(7, 8));    // 6
//   console.log(sequence);


// let day1 = {
//     squirrel : false,
//     events : ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// console.log(day1.events);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);


// let key = "touched tree";
// let description = {
//     work : "went to work",
//     "touched tree" : "Touched a tree"
// }
// console.log(description["touched tree"]);
// console.log(description[key]); // also works


// let anObject = {left : 1, right : 2, x: 0, y: 1, z: 2};
// console.log(anObject.left);
// delete anObject.left;
// console.log(anObject.left);
// console.log("left" in anObject);
// console.log("right" in anObject);


// console.log(Object.keys(anObject));
// Object.assign(anObject, {y: 0});
// console.log(anObject);


// let journal = [
//     {
//         events: ["work", "touched tree", "pizza", "running", "telivision"],
//         sqirrel: false
//     },
//     {
//         events: ["work", "icecrea", "cauliflower", "touched tree", "brushed teeth"],
//         sqirrel: false
//     }, 
//     {
//         events: ["work", "touched tree", "pizza", "running", "telivision"],
//         sqirrel: true
//     }
// ];

// // for (let entry of journal) {
// //   console.log("Events:", entry.events);
// //   console.log("Squirrel?:", entry.sqirrel);
// // }

// // console.log(journal);

// // console.log(journal[0]);
// // console.log(journal[0].events);
// // console.log(journal[0].events[2]);


// // let object1 = {value: 10};
// // let object2 = object1;
// // let object3 = {value: 10};

// // console.log(object1 === object2);
// // console.log(object1 === object3);

// // console.log(object1.value = 15);
// // console.log(object2.value);
// // console.log(object3.value);


// function phi(table){
//     return (table[3] * table[0] - table[2] * table[1]) / 
//     Math.sqrt((table[2] + table[3]) * 
//     (table[0] + table[1]) * 
//     (table[1] + table[3]) *
//     (table[0] + table[2]));
// }

// console.log(phi([76, 9, 4, 1]));  


// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for(let i = 0; i < journal.length; i++) {
//         let entry = journal[i], index = 0;
//         if (entry.events.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }

// console.log(tableFor("pizza", journal));

// for(let i = 0; i < journal.length; i++) {
//     let entry = JOURNAL[i];
// }

// for(let entry of JOURNAL) {
//     console.log(`${entry.events.lenngth} events.`);
// }

// let num = prompt("Enter a number: ");
// function triple() {
//     num *= 3;
//     return num;
// }
// console.log(triple());

// // 1
// let name = prompt("Enter your name");
// greet("Hello," + 'name');

// // 2
// function greet() {
//   let name = prompt("Enter your name");
//   console.log(`Hello, ${name}!`);
// }
// greet();

// // 3
// let areaOfRectangle = (width,height) => width*height;
// console.log(areaOfRectangle(5,6));
 
// // 4
// let convertToMinutes = (hours) => hours*60;
// console.log(convertToMinutes(2));

// // 2.1        Arrow functions are great for small logic and anonymous callbacks.

// //       Normal functions are better when you want function hoisting or more traditional readability.
// const isGreater = (num1,num2) => num1 > num2 ? num1 : num2;
// console.log(isGreater(2,3));   

// function isGreater1(num1,num2) {
//     num1 > num2 ? console.log(num1) : console.log(num2);
// }
// isGreater1(2,3);

// function isGreater2(num1,num2) {
//     console.log(num1 > num2 ? num1 : num2);
// }
// isGreater2(2,3);

// function isGreater3(num1,num2) {
//     if(num1 > num2){
//         return num1;
//     }else {
//         return num2;
//     }
// }
// console.log(isGreater3(2,3));

// function isGreater4(num1,num2) {
//     if(num1 > num2){
//         console.log(num1);
//     }else {
//         console.log(num2);
//     }
// }
// isGreater4(2,3);


// function absoluteValue(num) {
//     if(num < 0){
//         return -num;
//     }else {
//         return num;
//     }
// }
// console.log(absoluteValue(-1));


// function lastChar(str){
//     return str.charAt(str.length - 1);
// }
// console.log(lastChar("riya"))


// const canVote = (age) => age >= 18 ? true : false;
// console.log(canVote(18));

// const canVote1 = (age) => age >= 18 ;
// console.log(canVote1(19));


// function circleInfo(radius) {
//     let area = Math.PI * radius * radius;
//     let circumference = 2 * Math.PI * radius;
//     return {
//         area : area,
//         circumference : circumference};
// }
// console.log(circleInfo(5));   //31.41592653589793


// function stringRepeat(str, num) {
//     let result = "";
//     for(i = 0; i < num; i++){
//         result += str;
//     }
//     return result;
// }
// console.log(stringRepeat("riya", 5));  


// function Twice1() {
//     return 5 * 5;
// }
// function doTwice1(func) {
//     console.log(func());
//     console.log(func());
// }
// doTwice1(Twice1);

// function Twice2() {
//     console.log(5 * 5);
// }
// function doTwice2(func) {
//     func();
//     func();
// }
// doTwice2(Twice2);  


// function Twice3() {
//     return 5 * 5;
// }
// function doTwice3(func) {
//     return func();
//     return func();
// }
// console.log(doTwice3(Twice3));


// function Twice4() {
//     return 5 * 5;
// }
// function doTwice4(func) {
//     console.log(func());
//     return func();
// }
// console.log(doTwice4(Twice4));

// const add = (a, b) => a + b;

// function calculator(num1, num2, func) {
//     return func(num1, num2);
// }
// console.log(calculator(3, 2, add));

// function countDown(num) {
//     if (num <= 1){
//         console.log(num);
//     }else{
//         console.log(num);
//         countDown(num -= 1);
        
//     }
// }
// countDown(10);



// function factorial(num) {
//     if(num === 0 || num === 1) {return 1}
//     else {
//         return num * factorial(num - 1);
//     }
// } 
// console.log(factorial(0));


// function isEven(num) {
//     if (num === 1) {
//         console.log("odd");
//     }else if (num === 0) {
//         console.log("even");
//     }else {
//         return isEven(num-2);
//     }
// }
// isEven(11);

// function reverseString(str) {
//     if(str === "") return "";
//     return reverseString(str.slice(1)) + str[0];
// }
// console.log(reverseString("riya"));


// function countBs(str) {
//     let count = 0;
//     for(i = 0; i < str.length; i++){
//         if(str === "") return 0;
//         if (str[i] === "b"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countBs("boby"));


// function countChar(str, char) {
//     let count = 0;
//     for(i = 0; i < str.length; i++){
//         if (str[i] === char){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countChar("yayyyyyy", "y"));



// function countBs1(str) {
//     let count = 0;
//         if(str === "") return 0;
//         countBs1("bobby") = (firstCharIsB ? 1 : 0) + countBs(+ str[0])
//     return count;
// }

// console.log(countBs1("bobby"));

// function countBs2(str) {
//     // base case
//     if (str === "") return 0;

//     // check first character
//     let firstChar = str[0] === "b" ? 1 : 0;

//     // recursive call on the rest of the string
//     return firstChar + countBs2(str.slice(1));
// }

// console.log(countBs2("bobby")); // 3


// function wordStats(str) {
//     // { wordCount: <total number of words>, charCount: <total characters without spaces>, averageWordLength: <average characters per word> }

//     let array = str.split(" ");
//     let wordCount = array.length;
//     array = str.split(" ").join("");
//     let charCount = array.length;

//     let averageWordLength = charCount/wordCount;

//     return {
//         wordCount: wordCount,
//         charCount: charCount,
//         averageWordLength: averageWordLength
//     }
// }
// console.log(wordStats("I am Riya"));



// // array and objects  
   
// // array methtods - shift and unshift 

// let todoList = [];
// function remember(task) {    // add 
//     todoList.push(task);
// }
// function remove() {    // reomve from back 
//     todoList.pop();
// }
// function getTask() {   // remove from fornt
//     return todoList.shift();
// }
// function rememberUrgently(task) {   // add from front
//     return todoList.unshift(task);
// }
// remember("groceries");
// remember("desserts");
// remember("maggie");
// console.log(rememberUrgently("icecream"));
// remember("icecream");
// console.log(todoList);

// console.log(todoList.indexOf('icecream'));
// console.log(todoList.lastIndexOf('icecream'));

// remove();
// console.log(todoList);



// function conSlice(array,index){
//     return array.slice(0, index).concat(array.slice(index + 1));
// }
// console.log(conSlice(["a", "b", "c", "d", "e"],2));

//rest parameters 
// function max(...numbers) {  
//     let result = -Infinity;
//     for(let number of numbers) {
//         if(number > result) result = number;
//     }
//     return result;
// }
// console.log(max(4, 1, 9, -2));



// let numbers = [5, 7, 1];
// console.log(max(...numbers));


// let words = ["never", 'fully'];
// console.log(["will", ...words, "understand"]);
 
// // array lifo
// let arr = ["apple", "mango", "banana", "kiwi", "orange"]
// console.log(arr[0]);
// console.log(arr[4]);
// arr.push("custurd apple");
// arr.shift()
// console.log(arr);


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num.length);
// console.log(num[4]);

// for (let i = 0; i <= num.length; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }
// for (let i = 0; i <= num.length; i++){
//     num.indexOf(i);
// }
// console.log(num);




// let day1 = {
//     squirrel : false,
//     events : ["work", "touched tree", "pizza", "running"]
// };
  
// // he collects many of these entry in arrays 
// let journal = [
//     {
//         squirrel : false,
//         events : ["work", "touched tree", "pizza", "running"]
//     },
//     {
//         squirrel : true,
//         events : ["weekend", "touched tree", "peanuts", "running"]
//     }
// ];

// console.log(journal);
// // adding new arrays 

// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }

// addEntry("brushed teeth", true);

// console.log(journal);

// function phi([n00, n01, n10, n11]) {
//     return (n11 * n00 - n01 * n10) /
//     Math.sqrt((n10 + n11) * (n00 + n01) * (n10 + n00) * (n01 + n11));
// } 



// let journal = [
//     {
//         events: ["work", "touched tree", "pizza", "running", "television"],
//         squirrel: false
//     },
//     {
//         events: ["work", "icecream", "cauliflower", "lasagna", "touched tree", "brushed teeth", "alcohol"],
//         squirrel: false
//     },
//     {
//         events: ["weekend", "cycling", "break", "peanuts", "alochol"],
//         squirrel: true
//     }
// ];

// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }

// addEntry(["weekend", "break", "peanuts", "beer"], true);
// addEntry(["weekend", "break", "peanuts", "alcohol"], true);
// addEntry(["weekend", "break", "brushed teeth", "alcohol"], false);
// console.log(journal);

// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) / 
//     Math.sqrt((table[2] + table[3])  *
//     (table[0] + table[1])  *
//     (table[1] + table[3])  *
//     (table[0] + table[2]));
// }
// console.log(phi([1, 1, 2, 0]));

// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for(let i = 0; i < journal.length; i++){
//         let entry = journal[i], index = 0;
//         if(entry.events.includes(event)) index += 1;
//         if(entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }
// console.log(tableFor("pizza", journal));

// function journalEvents(journal) {
//     let events = [];
//     for (let entry  of journal) {
//         for (let event of entry.events) {
//             if(!events.includes(event)) {
//                 events.push(event);
//             }
//         }
//     }
//     return events;
// }
// console.log(journalEvents(journal));


// for (let event of journalEvents(journal)) {
//     console.log(event + ":", phi(tableFor(event, journal)))
// }

// for (let event of journalEvents(journal)) {
//     let correlation = phi(tableFor(event, journal));
//     if(correlation > 0.1 || correlation < -0.1) {
//         console.log(event + ":", correlation);
//     }
// }


// let student = {
//     name: "Riya",
//     age: 18,
//     isGraduated: false,
// };
// console.log(student);

// console.log(student.name);
// console.log(student.age);
// console.log(student.isGraduated);
// console.log(student.hobbies);    // undefine

// student.hobbies = ["art", "crochet", "mehendi"];
// console.log(student.hobbies);

// console.log(student);

// for(let i in student) {
//     console.log(i, "->", student[i]);
// }

// let book = {
//     title: "Do it today",
//     author: "Darius Foroux",
//     pages: 180
// }
// console.log(book);
// book.pages =  200
// console.log(book);

// // when a function is inside method we call it a method
// let car = {
//     brand: "Toyota Corolla Altis",
//     model: "E140",
//     year: 2006 
// }
// car.start = function() {
//     console.log("Car is starting...");   // start is a metthod 
// }
// car.start();
// console.log(car);

let library = {
    name: "The Bookworm's Retreat",
    location: "Andheri West",
    books: {
        "Do it Today": {
            author: "Darious Foroux",
            available: true
        },
        "Eloquent JavaScript": {
            author: "Marijn Haverbeke", 
            available: true 
        },
        "Clean Code": {
            author: "Robert C. Martin",
            available: false
        }
    },

// Add a members object to the library. Each key is a member’s name, value is an object { borrowed: [] }.
    members: {
        "Riya": [],
        "Pooja": []
    },


// listBooks() → prints all book titles and their availability
    listBooks: function() {
        for (let key in this.books){
            console.log(key, this.books[key].available)
        }
    },

//addBook(title, author) → adds a new book object under books
    addBooks: function(title,author) {
        this.books[title] = {author, available: true};
    },

//borrowBook(title) → sets available = false if the book exists and is available, else prints error

// Update borrowBook(title, memberName) so that:

// If available, mark the book unavailable and push it into that member’s borrowed list.

// If not available, print "Book already borrowed".
    borrowBook: function(title, memberName) {
        if (!this.books[title]) {
            console.log("Book not found");
        }
        else if (this.books[title].available === true) {
            this.members[memberName].push(this.books[title]);
            this.books[title].available = false;
        }else {
            console.log("Book already borrowed")
        }
    },

//returnBook(title) → sets available = true if the book exists and was borrowed

// Update returnBook(title, memberName) so it removes the book from the member’s borrowed list.
    returnBook: function(title, memberName) {
        if (this.books[title].available === false) {
            this.members[memberName].pop(this.books[title]);
            this.books[title].available = true;
        }
    }
}

// library.listBooks();
// library.addBooks("Verity", "Colleen Hoover");
library.addBooks("Verity", "Colleen Hoover");
library.addBooks("Haunting adeline", "H. D. Carlton");
library.addBooks("Hunting adeline", "H. D. Carlton");
library.addBooks("The Silent Patient", "Alex Michaeliides");

library.borrowBook("Do it Today", "Pooja");
library.borrowBook("Hunting adeline", "Riya");
library.borrowBook("Haunting adeline", "Riya");
library.returnBook("Hunting adeline", "Riya");


library.borrowBook("hgfvgjet", "Pooja");
console.log(library.books);

console.log(library.members);
