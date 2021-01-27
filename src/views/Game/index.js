import React, { useState, useEffect, useRef } from 'react'

import Car from '../../assets/images/car.png'

import { left, right, up, middle, stop } from '../../utils/emulator'
import Gamers from '../../components/gamers'
import Button  from '../../components/button'

import './game.scss'

const Game = () => {

const car = useRef(null)
const road = useRef(null)

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

    case 27:
      stop(road)
      console.log('stop')
    break;
  }
}

const handlePlay = () => {
  road.current.style.animationPlayState = 'running'
}

const handlePause = () => {
  road.current.style.animationPlayState = 'paused'
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
        
        <div className='wrapper-game-content-road' ref = { road }>
          <img 
            ref = { car }
            src = { Car }  
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
            <p>Start game you should use the keyboard using the arrows left, right or the keys A, S, D</p>
            <p>Pause game you should press Pause button (or Esc) and to continue press Play button</p>
            <div className='wrapper-game-content-infos-box-button'>
              <Button type = 'text' name = 'Pause' handle = {handlePause} />
              <Button type = 'text' name = 'Play' handle = {handlePlay} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game