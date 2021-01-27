/*
Booleans: has only two possible values TRUE or False
 */

 let on = true;
 console.log(on);

 let off = false;
 console.log(off);


 /*
 NULL: null is an empty value. anaothimg is in it still exist as a space to fill
 */

 let empty = null;
 console.log(empty)

 /* 
 UNDEFINED: no value assigned and does not act as an empty container
 */

 let undef;
 console.log(undef);

 /* NULL vs UNDEFINED:
 NULL:
    - lik a container with  nothing in it
    -Undefined is when a variable has never been initialized or hasn't been created yet.

    think of variables with null and undefined as packages coming out of ups null packages are packages that were intentionally packed  up with nothing but having been assembled
    undefined packages rae basically boxes that need to be assembled and given something to ship

*/

/* 
Numbers: numbers are literally just numbers dont need to write anything secial in js
*/

let degrees = 90;
console.log(degrees)

let precise = 999999999999999 //15 9s
console.log(practice);// 15 9s

const rounded = 9999999999999999
console.log(rounded); //16 9s gives you space for 15 9s before it rounds up basically 16 or higher rounds up

let notQuite = 0.2 + 0.1;
console.log(notQuite); // Js ROUNDS OUT CERTAIN NUMBER SO IF MATH  IS NEEDED BEWARE 

let numbersAreHard = (0.2 * 10 + 0.1 *10) /10
cconsole.log(numbersAreHard)

/*  
STRINGS: strings are data tyoe that represent text and are wrapped in a single quote (' ') or double quotes (" ")
*/

let stringOne = "oh hi Mark";
let stringTwo = 'oh hi Mark'

console.log(stringOne, stringTwo); //same output


//Number vs Strings
let first = 1050 + 100
let secong = '1050' + '100' // string concatenation

console.log(first); //number
console.log(second); //string

/* 
OBJECTS: are use to store many values instead of a singular value
*/

let frodo = {
     race: 'hobbit',
     rings: 1,
     cloak: true
}

console.log(frodo);
console.log(typeof frodo)

/* 
ARRAYS: are containers that hold a list of items
   -denoted by []
   - dont have to be the same dataType
*/
let list= ['item1', 'item2', 'item3']

let list = [ 'item1, undefined, 3']
// (1)    (2)      (3)
/*
1. name of array or list;
2. arrays use square brackets
3. each item regardless of dataType and is seperated by comas*/

let burritos = ['large', 4, true]
console.log(burritos);

console.log(typeof burritos)
//arrays are also containers that can hold multiple dataTypes. So JS has a clasified arrays as objects and not its own data type

/*
   -when  JS sees taht were trying to combine two or ore number it adds the value together using built in math funtionality
    -when Js SEES US TRYING TI ADD TOGETHER ONE OR MORE STRINGS INSTEAD OF USING BUILT IN MATH FUNCTIONALITY IT COMBINES STRINGS INSTEAD WITHOUT SYNTHEZIZING THE VALUES.
*/  

let example= 1050 + '100'; // coersion JS assumes that the uuser made a mistake and that wee trying  two strings instead of trying to do the math with values
console.log(example);
console.log(typeof example);
// example on how to string items
let firstname = 'Janay';
let lastname = 'Wade';
let housenumber= '1989';
let street = 'Mansion';
let city = 'Indy';
let state = 'IN';
let zipcode = '46235';

console.log(firstname, lastname + ',',housenumber, street + ',', city + ',', state, zipcode);

/* Need to figure out what i did wrong on this one
console.log('${firstname} ${lastname}, ${housenumber} ${street}, ${city}, ${state} ${zipcode}'); */

/*
STRING PROPERITIES
  - propertie are qualities that are associated with a dataType
*/

let myname = 'Nay'
console.log(myname. length); //

/*
STRING METHODS  
  -methods are tools that help us manipulate the data
   - .properties / .methods() *no parentheses for properties*
*/

let mynameis = 'nay'
console.log(mynameis. toUpperCase)// method that changes a string to uppercase

let hometown = 'my hometown is brightwood';
console.log(hometown. includes('brightwood')); // method that checks if  a certain string is included in another string

let sent = "whats up";
console.log( sent.split(""));
