import React, { useMemo, useState } from "react";

const Props1 = ({ value }) => {
  // 무거운 연산을 하지 않는다면 이렇게 사용해도 된다.
  const [result] = useState(value);
  // 무거운 연산을 한다면 useMemo를 사용한다.
  const result2 = useMemo(() => value, [value]);

  return <div>Props1</div>;
};

export default Props1;
