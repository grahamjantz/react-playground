import { React } from 'react'

const InputText = ({ placeholder, handleChange }) => {
    
    return (
        <input   
            className='input'  
            type="text" 
            placeholder={placeholder} 
            onChange={handleChange}/>
    )
}

export default InputText