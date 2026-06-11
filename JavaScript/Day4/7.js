//--> Conditional statement - Flow of execution of context.


//--> Falsy Values.
//  0
//  false
//  ""
//  null
//  undefined
//  NaN

//--> Logical Operators.
// console.log(!"1"); //f
// console.log(!!0); //f
// console.log(!1); //f
// console.log(!undefined); //t


//--> And Operator - always search for Falsy values and if it doesn't found any falsy value then it gives last value as a result.
//  console.log("ram"&&"shyam"&& 0.5 && "" && "mukesh");


//--> Or Operator - always search fopr truthy value and return it and if it doesn't found any truthy value then it gives last value as a result.
//  console.log("ram"||"shyam"||0.5 || "" || "mukesh");


// console.log("kuch bhi" && 101>98 || undefined && "null" ||  !!! " " && 0 );
// console.log("ram"||"shyam"&& !undefined || !!!true && "false");      //ram
// console.log(!!!0 && "" && isNaN(NAN) && 5>=5.5 || 101);             //101
// console.log("hello" && false || !!!123 && undefined || "false");   // false
// console.log(0 && !!false && !!!"" && "hero" || 0);                // 0 
// console.log("hello" && "2"+1==3 || 0.0 && undefined || "error")   // error






//--> Priorities of logical operators
