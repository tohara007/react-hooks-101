import React, { useState } from 'react'

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const increment = () => setPrice(price + 1)
  const decrement = () => setPrice(price - 1)
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }
  const changeName = (value) => setName(value)

  return (
    <>
    <p>現在の{name}は、{price}円です</p>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>Reset</button>
    <input value={name} onChange={e => changeName(e.target.value)}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
