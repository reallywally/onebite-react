import Header from "../commponents/Header";
import Button from "../commponents/Button";
import DiaryList from "../commponents/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      ></Header>
      <DiaryList />
    </div>
  );
};

export default Home;
