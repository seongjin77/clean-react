import React from "react";

const States1 = () => {
  //  플래그 : 프로그래밍에서 특정 조건을 혹은 제어를 위한 조건을 불리언으로 나타내는 값
  // 굳이 state를 통해 플래그를 관리할 필요가 없다.

  const inLogin =
    isCookie &&
    hasToken &&
    isTokenValid &&
    isNewUser &&
    isUserValid
  
  return <div>{inLogin && '안녕하세요 반갑습니다.' }</div>;
};

export default States1;
