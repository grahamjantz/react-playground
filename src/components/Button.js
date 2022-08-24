import React from 'react'

const Button = ({ text, handleClick, type }) => {
  return (
    <div>
        <button 
          className="btn"
          onClick={handleClick}
          type={type}>
            {text}
        </button>
    </div>
  )
}

export default Button