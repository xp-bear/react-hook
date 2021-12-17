import React, { useEffect, useState } from "react";

export default function HookCounterChangeTitle() {
  const [counter, setcounter] = useState(0);

 useEffect(()=>{
     document.title=counter
 })
  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setcounter(counter + 1)}> +1</button>
    </div>
  );
}
