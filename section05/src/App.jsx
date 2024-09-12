import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // state 현재값, 싱태 변화 함수
  // 변수와 차이는 리렌더링

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;

// 리액트 리렌더링 상황
// 1. state 변경
// 2. props 변경
// 3. 부모가 변경
// -> 그래서 자신과 상관 없는 state는 분리
