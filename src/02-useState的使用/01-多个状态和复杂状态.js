import React, { useState } from "react";

export default function MultHookState() {
  const [count, setState] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setfriends] = useState(["ok", "ko", "pp"]);
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <h2>我的年龄: {age}</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
