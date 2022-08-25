import React from 'react'

const Button = ({ text, handleClick, type, className}) => {
  return (
    <div>
        <button 
          className={className}
          onClick={handleClick}
          type={type}>
            {text}
        </button>
    </div>
  )
}

export default Button