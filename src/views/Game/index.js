import React, { useState, useEffect, useRef } from 'react'

import Car from '../../assets/images/car.png'

import { left, right, up, middle } from '../../utils/emulator'
import Gamers from '../../components/gamers'

import './game.scss'

const Game = () => {

const car = useRef(null);

const handleMoving = (event) => {

  console.log(event.keyCode, 'code')

  switch (event.keyCode) {
    case 37:
      left(car)
      console.log('left')
    break;

    case 39:
      right(car)
      console.log('right')
    break;

    case 38:
      up(car)
      console.log('up')
    break;

    case 65:
      left(car)
      console.log('left')
    break;

    case 68:
      right(car)
      console.log('right')
    break;

    case 83:
      middle(car)
      console.log('up')
    break;
  }
}

useEffect(() => {
  window.addEventListener('keydown', handleMoving);
})

  return (
    <div className='wrapper-game'>
      <div className='wrapper-game-content'>
        <div className='wrapper-game-content-gamers'>
          <Gamers />
        </div>
        <div className='wrapper-game-content-road'>
          <img 
            ref = {car}
            src = {Car}  
            className= 'wrapper-game-content-img'
            style={{ 
              position: "absolute", 
              left: '50%',
              right: '50%',
              top: '50%',
              bottom: 'auto'
            }}
          />
        </div>
        <div className='wrapper-game-content-infos'>
          <div className='wrapper-game-content-infos-box'>
            <h2 className='wrapper-game-content-infos-box-title'>Instructions</h2>
            <p>To start game you should use the keyboard using the arrows left, right, up or the keys A, S, D</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game