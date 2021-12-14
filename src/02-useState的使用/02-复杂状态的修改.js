import React, { useState } from "react";

export default function ComplexHookState() {
  const [friends, setfriends] = useState(["ok", "ko", "pp"]);
  const [students, setStudents] = useState([
    { id: 1, name: "xp", age: 0 },
    { id: 2, name: "x0p", age: 10 },
    { id: 3, name: "7xp", age: 55 },
    { id: 4, name: "xp8", age: 45 },
  ]);

  //   添加朋友
  function addFriend() {
    friends.push("test");
    setfriends(friends);
  }
  //   修改age
  function incrementAgeWithIndex(index) {
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={(e) => setfriends([...friends, "oo"])}>添加朋友</button>
      {/* 错误的做法  这种方式界面不会刷新 因为数组还是之前的哪一个 */}
      <button onClick={addFriend}>添加朋友</button>

      <hr />
      <h2>学生列表</h2>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={item.id}>
              <span>姓名: {item.name}</span> &emsp;
              <span>年龄: {item.age}</span>&emsp;
              <button onClick={(e) => incrementAgeWithIndex(index)}>年龄+1</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
