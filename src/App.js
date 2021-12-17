import React from "react";
import IndexClass from "./01-体验hooks/01-class实现计数器";
import CounterHook from "./01-体验hooks/02-hooks初体验";
import HooksTwo from "./01-体验hooks/03-counter-hooks";
import MultHookState from "./02-useState的使用/01-多个状态和复杂状态";
import ComplexHookState from "./02-useState的使用/02-复杂状态的修改";
import ClassCounterTitleChange from "./03-useEffect使用/01-class实现title的修改";
import HookCounterChangeTitle from "./03-useEffect使用/02-hook实现title的修改";
function App() {
  return (
    <div>
      {/* 1.react hooks 初体验 */}
      {/* <IndexClass /> */}
      {/* <CounterHook /> */}
      {/* <HooksTwo /> */}

      {/* 2.useState 的使用 */}
      {/* <MultHookState /> */}
      {/* <ComplexHookState /> */}

      {/* 3. useEffect 的使用 */}
      {/* <ClassCounterTitleChange /> */}
      <HookCounterChangeTitle />
    </div>
  );
}
export default App;
