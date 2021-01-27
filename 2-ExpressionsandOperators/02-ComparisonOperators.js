//equal
console.log(3 == 3);
console.log('3' == 3);
/*
   -coerison is the process of converting a value from one type to another
    - JS assumes that a mistake was made and that we dont want to compare two values that are the same datatype
*/

// strict equal overrides a JS coerison
console.log(3 === 3);
console.log('3' === 3);

// not equal
console.log('3' != 3);

//strict not equal
console.log('3' !== 4);

// greater then
3 > 2; 

//less then
2 < 3;

// greater then or equal to
3 >= 2; // not to be confused with arrow function (=>)

// less than or equal to 
2 <= 3;

// and
2 && 3 // allows us to check if multiple values are true or false

// or
2 || 3; // checks if at least one is true