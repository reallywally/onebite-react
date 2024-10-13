import { useParams, useSearchParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);

  const [q, setQ] = useSearchParams();
  console.log(q);

  return <div>{params.id} Diary</div>;
};

export default Diary;
