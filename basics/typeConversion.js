let score ="33aa";
console.log(typeof score); // string 
console.log(typeof (score)); // as a method written inside parameter

// conversion of string "33" to number 33

let valueInNumber = Number(score); // while converting always use Number, String etc

// conversion of string "33aa" to number 33aa => its type gets converted but not its value

console.log( typeof valueInNumber); // string is converted to number
console.log(valueInNumber); // the converted value is NaN (not a number)

// conversion regarding null

let x = null;
let num = Number(x);

console.log(typeof x); // null is typeof object 
console.log(num); // a null converted to number is 0

// conversion regarding undefined

let y = undefined ;
let n = Number(undefined);
 console.log(typeof (y)); // undefined is a typeof undefined itself

 console.log(n);// when an undefined is converted to a number its value is NaN

 //conversion regarding boolean

 y=true;
 n= Number(y)

 console.log(typeof (y)); // true or false is a boolean value

 console.log(n); // bool when converted to a number gives either 0 or 1;
  
 let isLoggedIn =undefined;

 let boolvalue= Boolean(isLoggedIn);

 console.log(boolvalue);
 console.log(typeof (boolvalue));

 //  1=> true    and     0 => false
 //   "    "   => true
 // "string"   => true
 // ""         => flase
 // null       => false
 // undefined  => false



 







