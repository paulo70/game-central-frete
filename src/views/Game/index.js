import React from 'react'

import Field from '../../components/Field' 

import Car from '../../assets/images/car.png'

import './game.scss'

const Game = () => {
  return (
    <div className='wrapper-game'>
      <div className='wrapper-game-content'>
        <img src = {Car}  className='wrapper-game-content-img'/>
      </div>
    </div>
  )
}

export default Game