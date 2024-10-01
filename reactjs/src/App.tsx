import React, { useState } from 'react'

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
    console.log("giá trị count", count);
  }
  console.log(1111111);

  return (
    <div>App
      <p> giá trị của count : {count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
