import React from 'react'

const Header = ({ title, subheader }) => {
  return (
    <div>
        <h1 className="header">{title} App</h1>
        <h2>{subheader}</h2>
    </div>
  )
}

export default Header