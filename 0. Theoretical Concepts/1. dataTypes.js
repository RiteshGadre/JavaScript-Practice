// There are 2 types of data types in JS:
/*
Primitive Datatypes :
- This are prebuilt and conventional datatypes in JS
- This are following 6 datatypes in js
    1. Numbers - Integers, Floats, etc
    2. String - characters or combinations of characters inclosed in single comma(''), double comma(""), backtick(``)
    3. Boolean - true/false value
    4. Null - Empty value
    5. Undefined - var is created but value is not assigned
    6. Symbol - Can store the all charcters excluding alphabet
- This data types are immutable(We can not modify the data in primitive datatypes)
- We can reasign the value to avoid above problem
*/

let num = 123; console.log(num);
let firstName= 'Akash'; console.log(firstName);
let present= true; console.log(present);
let x= null; console.log(x);
let y; console.log(y);
let emoji= '⭐⭐'; console.log(emoji);

firstName[2]= 'g'; // It is not allowedI
firstName= 'Ritesh'; // It is allowed 
// In the above statement we have assigned new adderess to the var and the firstone is erased after assignment

/*
Non-Primitive Data Types:
- We can modify this datatypes
- There are 2 types of non primitive data types as follows:
    1. Array - Collection of elements  
    2. Object - Key value pair
*/

let nums= [1, 2, 3, 4, 5, 6]; console.log(nums);
const obj= {
    fName:'Sachin',
    lName:'Tendulkar',
    age: 40
}
obj.fName= "Vinod";
console.log(obj);
console.log(obj.fName);
console.log(obj.lName);
console.log(obj.age);



