import React from 'react'

const Hooks = () => {


  // 기명 함수를 사용하면 useEffect 내에서 함수 이름을 보고 해당 함수가 어떤 역할을 하는지 쉽게 파악할 수 있다.
  useEffect(function addEvent (){
    console.log('addEvent')
    // 이벤트 등록
    // ... document.addEventListener('click', function(){})
    return function removeEvent(){
      console.log('removeEvent')
    }

  }, [])

  return (
    <div>Hooks</div>
  )
}

export default Hooks