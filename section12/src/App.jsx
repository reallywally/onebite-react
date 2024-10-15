import "./App.css";
import { useReducer } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "asdasd",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "asasdasdasddasd",
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/dirary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
