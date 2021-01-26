import React, { useState, useEffect, useRef } from 'react'

import Car from '../../assets/images/car.png'

import { left, right, up, down, middle } from '../../utils/emulator'
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

    case 40:
      down(car)
      console.log('down')
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
            <h2>Instructions</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game