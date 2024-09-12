import "./App.css";
import { useState } from "react";

function App() {
  // state 현재값, 싱태 변화 함수
  // 변수와 차이는 리렌더링
  const [count, setCount] = useState(1);
  const [light, setLight] = useState("OFF");

  console.log(count);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>

      <h1>{light}</h1>
      <button onClick={() => setLight(light === "OFF" ? "ON" : "OFF")}>
        on/off
      </button>
    </>
  );
}

export default App;
