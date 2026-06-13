//--> Array <--
// Array is a collection of diff data type.
// Dynamic size/Length
// Contigrous/Ordered memory allocation.
// Use Indexing.
// Mutable - Inbuilt fn that is used to change arr value.
// Non Primitive data type / Reference data type.

// var arr = [1,true,"hello"]; // Store diff data types
// console.log(arr);

// arr.push(5); // Can be Mutable/dynamic size
// console.log(arr);

// WE use CRUD - Create-Read-Update-Delete
// 1. Create.
var arr = [];

// 2. Read.
console.log(arr, typeof(arr));
// * Read specific position/index value
console.log(arr[0]);

// 3. Update.
// Add RHS/Ending [push]
arr.push(10);
console.log(arr);
// Add LHS/Starting [unshift]
arr.unshift(5);
console.log(arr);

// 4. Delete.
// Delete RHS/Ending [pop]
arr.pop();
console.log(arr);
// Delete LHS/Starting [shift]
arr.shift();
console.log(arr);
