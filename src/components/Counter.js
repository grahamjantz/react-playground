import { React, useState } from 'react'
import Button from './Button'
import Header from './Header';


const Counter = ({ text, handleChange }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <div className="component">
        <Header title="Counter"/>
        <h1>Total Count: {count}!</h1>
        <Button text="Increment" handleClick={increment} className="btn" />
        <Button text="Decrement" handleClick={decrement} className="btn" />
    </div>
  )
}

export default Counter;