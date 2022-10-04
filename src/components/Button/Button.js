import React from 'react'
import "./Button.css"

function Button(props) {

  const { veriant='primary', children, ...rest } = props;

  return (
    <button className={`button ${veriant}`} {...rest }>
        {children}
    </button>
  )
}

export default Button