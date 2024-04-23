import React from 'react'

// emotion을 사용할때, 컴포넌트 안에 선언하게 되면, 컴포넌트가 리렌더링 될때마다 새로 생성되기 떄문에
// 컴포넌트 밖에 선언

// emotion 사용시 best practice
// css``로 스타일을 정의하면 dx에 좋지않고 자동완성을 사용할 수 없어 버그 이슈가 발생할 수 있다.
const emotionCss = {
  example: css({
    backgroundColor: 'black',
    color: 'white',
  }),
  example2: css({
    backgroundColor: 'black',
    color: 'white',
  })
}

const Props2 = () => {

  return (
    <div css={emotionCss.example}>Props2</div>
  )
}

export default Props2