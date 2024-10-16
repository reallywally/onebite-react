import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신</option>
          <option value={"oldest"}>오래</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"}></Button>
      </div>
      <div className="list_warpper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
