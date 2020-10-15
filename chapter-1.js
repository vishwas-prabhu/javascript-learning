"use strict";

let a = 10; // --> binding value and data type to the variable
let b = 10.3;
let c = 2.909e2;
let d;
console.log(c + 10); // 300.9
console.log(typeof a === 'number') // true
console.log(d === undefined) // true
console.log(typeof d + a) // undefined10
console.log( a == 10.00) // true
console.log('' + 10 + 10) //1010

console.log( isNaN('10')) //false
console.log( isNaN('10a')) //true
let e = '20g'; //cannot be converted into the number so +e is of type NaN
console.log( isNaN(e)) //true
console.log( !isNaN(e)) //false
console.log(-e) // NaN

console.log(`hai
this
is 
vishwas`) // works fine

// console.log(`haid
// kpdf
// oidjfm
// amksofm`) //error is generated; use \n

//operations within a string can be done
console.log(`10 plus 20 gives the sum ${a + 20}`)

let aaa = null;
let bbb = undefined;
console.log(bbb == aaa); //true
console.log(bbb === aaa); //false


console.log(8 * null)// → 0
console.log("5" - 1)// → 4
console.log("5" + 1)// → 51
console.log("five" * 2)// → NaN
console.log(false == 0)// → true

console.log("hai" || "hello"); // hai
console.log(true || "hello"); // true
console.log(false || "hello"); // hello
console.log(0 || "hello"); // hello
console.log("" || "hello"); // hello
console.log("" || ""); // ""
// "" , 0 , false are considered as false values
console.log("hai" && "hello"); //hello
console.log(true && "hello"); //hello
console.log('hello' && true); //true
console.log('hello' && false); //false

console.log(0 == false) //true
console.log("" == false) //true
console.log("" === false) //false


console.log(6 & 7); // 6 -> 101 & 111
console.log(1 + 8 && 1 + 2 < 4 | 2); // 3
// 9 && 1 + 2 < 4 | 2
// 9 && 3 < 4 | 2
// 9 && 1 | 2 --> here true is type converted to 1
// 9 && 3
console.log(8 | 1 + 2 < 3 + 4); // 9

// We looked at four types of JavaScript values in this chapter: 
// numbers, strings, Booleans, and undefined values.

// Such values are created by typing in their name (true, null)
// or value (13, "abc"). You can combine and transform values with operators.
// We saw binary operators for arithmetic (+, -, *, /, and %), 
// string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), 
// and logic (&&, ||), as well as several unary operators (- to negate a number, 
// ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) 
// to pick one of two values based on a third value.