import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./App.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "qqq",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "www",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "eee",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]); //todos.push() 노노
  };

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </>
  );
}

export default App;
