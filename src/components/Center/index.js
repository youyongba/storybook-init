import React from 'react'

import "./index.css"
function index(props) {
  return (
    <div className='center'>{props.children}</div>
  )
}

export default index