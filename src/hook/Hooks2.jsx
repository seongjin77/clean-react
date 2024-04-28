import React, { useEffect } from 'react'

const Hooks2 = () => {

  useEffect(() => {
    // useEffect는 하나의 역할을 하는 것이 좋다
  }, [])

  useEffect(() => {
    // dependency 배열에 값이 늘어나면 분리의 대상으로 바라볼 수 있다.
  }, [option, option2, option3])

  return (
    <div>Hooks2</div>
  )
}

export default Hooks2