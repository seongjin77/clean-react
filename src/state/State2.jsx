import React, { useEffect, useState } from 'react'

const mockData = [
  { id: 1, name: 'John', check: true },
  { id: 2, name: 'Jane', check: true },
  { id: 3, name: 'Bob', check: true },
  { id: 4, name: 'Alice', check: false },
  { id: 5, name: 'Mike', check: false }
];

const State2 = () => {

  const [data, setData] = useState(mockData);
  // 매번 새로운 데이터를 담아서 사용하게 된다면 state를 사용하지 않아도 된다.
  const fiteredData = data.filter((item) => item.check)
  
  // const [filter, setFilter] = useState(mockData)


  // 이렇게 쓸대없이 useEffect를 사용하지 않아도 된다.
  // useEffect(() => {
  //   const newState = data.filter((item) => item.check)
  //   setFilter(newState)
  // }, [data])


  return (
    <div>State2</div>
  )
}

export default State2