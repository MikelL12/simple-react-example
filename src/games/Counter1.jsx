import {useState} from "react";

function Counter1() {
    // let count = 0; // Plain variable, React doesn't track changes
    const [count, setCount] = useState(0);
    const increment = () => {
      // count += 1; // Increment the count
      setCount(count + 1);
      console.log(count); 
    };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  
  export default Counter1;