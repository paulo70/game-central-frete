import React, { useState, useEffect } from 'react'

import Nicknames from '../../components/gamersList'

import './gamer.scss'

const Gamers = (props) => {

  const [ nickname, setNickName ] = useState([])
  const [ loadNicknames, setLoadNickNames ] = useState(true)

  useEffect(() => {

    const getNicknames = () => {
      const gamerDB = localStorage['gamer']
      const listGamers = gamerDB ? JSON.parse(gamerDB) : []
      setNickName(listGamers)
      
      console.log(listGamers, 'who')
    }

    if( loadNicknames ) {
      getNicknames()
      setLoadNickNames(false)
    }
    
  },[loadNicknames])

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
        <Nicknames 
          nickname = { nickname }
          reload = {setLoadNickNames} 
        />
      </tbody>
     </table>
    </div>
  )
}

export default Gamers