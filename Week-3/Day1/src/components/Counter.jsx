import {useState} from "react";
function Counter(){
    const [count, setCount] = useState(0)
    // console.log(count);

     const handleAdd = ()=>{
        return setCount(count+1);
     };

     const handleReduce = ()=>{
        return setCount(count-1);
     };

     const handleReset = ()=>{
        return setCount(0);
     };
     return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            <button onClick={handleReset}>Reset</button>
        </div>
     )
}
export default Counter;