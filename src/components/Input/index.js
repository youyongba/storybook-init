import React from 'react'
import './index.css'


function index(props) {
    const { size='medium', children, ...rest } = props;


  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default index