import React from 'react'

import './field.scss'

const Field = (props) => {
  return (
    <div className='wrapper-field'>
      <div className='wrapper-field-layers--green'></div>
      <div className='wrapper-field-layers--gray'></div>
      <div className='wrapper-field-layers--green'></div>
      { props.children }
    </div>
  )
}

export default Field