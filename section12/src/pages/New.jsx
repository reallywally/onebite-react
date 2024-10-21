import Header from "../commponents/Header";
import Button from "../commponents/Button";
import Editor from "../commponents/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로가기"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
