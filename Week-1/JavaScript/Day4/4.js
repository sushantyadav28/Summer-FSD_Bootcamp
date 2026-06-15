//2. Data Types

//-->Primitive data type/value data type

// 1. Number
//  var num = 10;
//  var num1 = 10.5;

//  console.log(num,num1,typeof num,typeof num1)

//  // 2. string data type - combinantion of characters - numbers
//   var nm = "sushant";
//   var nm1 = 'krmu';
//   var nm2 = `sohna
//                             to
//                     delhi`;

//                     console.log(nm, nm1, typeof nm, typeof nm1);
//                     console.log(nm2, typeof nm2);


// // 3. boolean
// var bl = false;
// var bl1 = true;
// console.log(bl, bl1, typeof bl, typeof bl1);


// // 4. null data type   ----    explicit data type.
// var nl = null;
// console.log(nl, typeof nl);


// // 5. undefined data type    ---   implicit data type.
// var ud;
// console.log(ud, typeof ud)


// --> NON Primitive data type/user defined/ Reference data type

// 1. Array
let arr = [1,2,3];
console.log(arr, typeof arr);

// 2. Object
let obj = {a:1};
console.log(obj, typeof obj);

// 3. Function
function hello(){
    console.log("Hello world");
}
console.log(hello(), typeof hello);
console.log();

function yello(){
    return "yello world";
}
console.log(yello(), typeof yello);
console.log();