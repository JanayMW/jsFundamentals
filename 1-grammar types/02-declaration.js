/*
NOTES:
-Variables: named containers for storing and referring to later can make them whatever we want
    -a variable name must begin with a letter,underscore, dollar sign
    -numbers may follow the above characters, but cannot come first
    -Javasript is very sensitive- 'Hi' and 'hi' are different variables
    -no spaces are allowed in variable names
    -camelCase is best practice for naming variables
       -snake_Case, PascalCasing
    -this is good practice bbecause it helps keep  everything readable- letmyName='Garret'
*/

let a =2;
let    b   =    2
/* (1)    (2)    (3)    (4)

1.keyword
2.variable name (can name it whatever you want)
3.Assignment operator
4.Variable value

Var, let and Const:

-var: 'old' keyword for variables **In this course we wont be using this keyword often.
-let: 'new' keyword for variables (for now best practice to use)
-const: also  'new' : declares unchangeable variable
*/

/*
NOTES:
-declarations: are on the LEFT SIDE of a variable
    - it is simply: let x
    -declarations are on the left side of assignment operator(=)
-initializing: are on the RGHT SIDE of a variable
     -it sets the value of the variable
     -it incorporates the variable name (x), the assignment operator (=) and the value(10)=> x=10
*/
let x;
console.log('Declaration', x);

x = 10;
console.log('Initialization', x);

x=33;
console.log('Initialization 2', x);

let y = 'Hello';
console.log('Both:', x, y);

let today = "Great!";
const elevenfifty = "Wonderful!";
console.log ( today, elevenfifty);

today= 'Lovely';
elevenfifty= "Fantastic"
console.log(today, elevenfifty);

