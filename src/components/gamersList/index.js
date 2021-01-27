import React from 'react'

const ListGamers = (props) => {
  return(
    props.nickname.map((nicknames, index) => (
      <tr key = { index }>
        <td> Name: { nicknames.name }</td>
      </tr>
    ))
  )
}

export default ListGamers