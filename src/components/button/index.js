import React from 'react'

import './button.scss'

const Button = (props) => {
  return (
    <button type = { props.type } onClick = { props.handle }>
      { props.name }
    </button>
  )
}

export default Button