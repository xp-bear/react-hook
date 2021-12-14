import React, { useState } from "react";

export default function HooksTwo() {
  const [state, setstate] = useState(55);
  console.log("我被渲染了");
  return (
    <div>
      <h2>当前计数:{state} </h2>
      <button onClick={(e) => setstate(state + 1)}>+1</button>
      <button onClick={(e) => setstate(state - 1)}>-1</button>
    </div>
  );
}
