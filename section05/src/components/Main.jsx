// 주의사항
// 1. 중괄호안에는 자바스크립트 표현식만 가능. if, for 불가능
// 2. 숫자, 문자열, 배열깂만 렌더링 가능. boolean, undefined, null, 객체 불가능
// 3. 모든 태근 닫혀야함
// 4. 최상위 태그는 하나만

import "./Main.css";

const Main = () => {
  const user = {
    name: "김빵빵",
    isLogin: true,
  };

  //   if (user.isLogin) {
  //     return <div>로그아웃</div>;
  //   } else {
  //     return <div> 로그인</div>;
  //   }

  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
