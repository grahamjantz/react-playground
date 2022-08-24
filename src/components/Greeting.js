import { React, useState } from 'react'
import Button from './Button'
import Header from './Header'
import InputText from './InputText'

const Greeting = () => {
    const [input, setInput] = useState('')
    const [name, setName] = useState('');

    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        setName(input);
    }

    return (
        <div className="component">
            <Header title="Greeting" subheader="What is your name?" />
            <h1></h1>
            <InputText placeholder="Enter Name" handleChange={handleChange}/>
            <Button text="Submit" handleClick={handleClick}/>
            <h1>{name.length > 0 ? `Hello ${name}!` : `Hello!`}</h1>
        </div>
    )
}

export default Greeting