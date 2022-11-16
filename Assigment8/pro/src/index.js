import React, {useState} from "React";
import {createRoot} from "react-dom/client"

const Counter = () => {
    const[count, setCount] = useState(0);
    const increment = () =>  setCount (count + 1;)
    

  return <> 
  <h1> Hello World</h1>
  <div id="Counter">
  <h2> </h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}> Decrement</button>
    
   </div>
 </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<Counter />)