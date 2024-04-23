import React from 'react'

// 단순 전달용이면 어떤 props가 들어오는지 모를때 사용하는건 좋은 방법이다.
const ParentComponent = (props) => {
  return <ChildOrHocComponent {...props} />
}

const ParentComponent2 = (props) => {
  // 필요에 의해 명시적으로 한번 걸러주는게 좋다.
  const {관련없는props, ...rest} = props

  return <ChildOrHocComponent {...rest} />
}




const Props3 = () => {


  return (
    <div>Props3</div>
  )
}

export default Props3