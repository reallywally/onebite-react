import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName }) => {
  return (
    <div className="EmotionItem">
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_content">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
