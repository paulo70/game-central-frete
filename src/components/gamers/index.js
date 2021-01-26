import React from 'react'

import './gamer.scss'

const Gamers = (props) => {
  return (
    <div className='box-gamers'>
     <h2 className='box-gamers-title'>Welcome Gamers</h2>
     <table className='box-gamers-table'>
      <thead>
        <tr>
          <th>Nickname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bob</td>
        </tr>
        <tr>
          <td>Bob</td>
        </tr>
        <tr>
          <td>Bob</td>
        </tr>
      </tbody>
     </table>
    </div>
  )
}

export default Gamers