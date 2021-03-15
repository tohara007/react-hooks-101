import React, { useEffect, useState } from 'react'

const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  useEffect(() => {
    console.log('This is like componentDidMount.')
  }, [])

  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])


  const increment = () => setState({...state, price: price + 1})
  const decrement = () => setState({...state, price: price - 1})
  const reset = () => setState(props)
  const changeName = (value) => setState({...state, name: value})

  return (
    <>
    <p>現在の{name}は、{price}円です。</p>
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
