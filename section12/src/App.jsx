import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./commponents/Button";
import Header from "./commponents/Header";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text={"aaa"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("aaa");
        }}
      />
      <div>
        <img src={getEmotionImage(1)} />
      </div>
      <div>
        <Link to={"/"}>Memo</Link>
        <Link to={"/new"}>new</Link>
        <Link to={"/dirary"}>dirary</Link>
      </div>

      <button onClick={onClickButton}>new button</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/dirary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
