/*
  Literals
      -a literal represents a fixed value:
        -string literal
        -numeric literal
        -boolean literal
        -object literal
        -array literal
    
        -Literals are simply just values we as developers add to our code
        */

        //strinng literal
        let car ="ford"

        //numeric literal
        let december = 28;

        //boolean literal
        let third = true;
        
        //object literal
        let soup = {
            a: 'beef noodle',
            b: 'tomato',
            c: 'beef an barley'
        }

console.log(soup.b);

/* 
  - when working with objects using dot notations allow us to dive into the object and grab a specific piece of data
*/

// array literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursdat', 'Friday'];
console.log(days[2]); 
// square bracket notation

/*      
 - when working with arrays  using square bracket notation allows us to pull a singular value out of thearray by its index nuber 
 -when working with indices JS will start with 0
 -when done using length propperty Js will start connecting from 1
*/
console.log(days.log.length);