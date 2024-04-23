import React from "react";

const Props4Before = (props) => {
  return (
    <JoinForm
      user={props.user}
      auth={props.auth}
      location={props.location}
      favorite={props.favorite}
      handleSubmit={props.handleSubmit}
      handleChange={props.handleChange}
      handleCancel={props.handleCancel}
    />
  );
};

// 너무 많은 프롭스를 넘기는 경우 ? => 분리의 대상으로 우선 고려
// One Depth 분리르 한다.
// 확장성을 고려하여 도메인 로직을 분리하고, 공통 컴포넌트를 만들어 사용한다.
const Props4 = () => {
  return (
    <JoinForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      onCancel={handleCancel}
    >
      <CheckBox formData={user} />
      <CheckBox formData={auth} />
      <RadioButtons formData={location} />
    </JoinForm>
  );
};

export default Props4;
