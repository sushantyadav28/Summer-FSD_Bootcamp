//--> Loop in Array <--

var arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log("index value: ", i, "Arr value: ", arr[i]);
}

//--> for ... of loop.

for(let val of arr){  // Create a val variable and put inside the arr variable to get values only not indexing.
    console.log(val);
}