const accountId=1;
let accountName="Arsalan";
var password="asdf";
let city="jaipur";
console.table([accountId,accountName,password,city]);

accountName="Arham";
password="jklm";
city="bengaluru";
let nationality;

console.table([accountId,accountName,password,city,nationality]);

/* let ,var ,const are used to declare variables in js
   1. var = is a function scope so it is not preffered ;
            hoisted , you can use a variable before it is declared innitially stored as undefined ;
            can be redeclared in the same scope

   2. let = is a block scoped ;
            not hoisted ;
            connot be redeclared  in the same scope ;

   3. const= is a block scoped
            not hoisted ;
            cannot be redeclared in the same scope

    */

