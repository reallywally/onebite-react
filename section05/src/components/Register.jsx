import { useState } from "react";

const Register = () => {
  // 하나의 state로 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  /*
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  */
  console.log(input);
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register;
