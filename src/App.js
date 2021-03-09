import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(precount => precount + 1)
  const decrement2 = () => setCount(precount => precount - 1)

  const reset = () => setCount(0)
  const double = () => setCount(precount => precount * 2)
  // 自前で考えたver（合っていた）
  // const onethird = () => {
  //   if (count % 3 === 0) {
  //     setCount(count / 3)
  //   }
  // }
  // 答えver
  // const onethird = () => setCount(precount => {
  //   if (precount % 3 === 0) {
  //     return precount / 3
  //   } else {
  //     return precount
  //   }
  // })
  const onethird = () => setCount(precount => 
    precount % 3 === 0 ? precount / 3 : precount
  )

  return (
    <>
      <div>
        <p>count: {count}</p>
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={onethird}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}

export default App
