import { useState, useRef, useEffect } from "react";

// hook 특징
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문, 반복문에서 호출 불가능
// 3. 커스텀 훅은 접두사로 use만 붙이면됨. 그리고 보통 커스텀 훅은 hooks라는 폴더 만들어서 관리

const Register = () => {
  // 라이프 사이클
  // 1. 마운트
  useEffect(() => {}, []);
  // 2. 업데이트
  useEffect(() => {});
  // 3. 언마운트
  useEffect(() => {
    return () => {};
  }, []);

  // 하나의 state로 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        ></input>
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        ></input>
      </div>

      <div>
        <select name="contry" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
