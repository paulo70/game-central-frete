import React, { useState, useEffect } from 'react'
import { navigate, A } from 'hookrouter'
import Gamer from '../../models/gamer.js'
import Input from '../../components/input'

import './home.scss'


const Home = () => {

  const [ nickname, setNickName ] = useState('')
  const [ count, setCount ] = useState(0)

  const handleRegisterGamer = (e) => {
    e.preventDefault()

    const gamerDB = localStorage['gamer']
    const gamer = gamerDB ? JSON.parse(gamerDB) : []

    gamer.push( new Gamer(nickname))

    localStorage['gamer'] = JSON.stringify(gamer)
  }

  const handleNickName = (e) => {
    setNickName(e.target.value)
  }

  const handleStart = () => {
    let seconds = 4
    const timer = setInterval(() => {
      setCount( seconds = seconds - 1 )

      if( seconds === 0 ) {
        clearInterval(timer)
        navigate('/game')
      }

    },1000)
  }

  return (
    <section>
      <div className='box-count'>
        <h2>Are you ready?</h2>
        <span className='box-count-timer'>{ count }</span>
      </div>
      <div className='box-welcome'>
        <h1 className='box-welcome-title'>Welcome to car racing game</h1>
        <form className='box-welcome-form' noValidate onSubmit = { handleRegisterGamer }>
          <label className='box-welcome-label'>NickName:
            <Input 
              type = 'text' 
              placeholder = 'type your nickname' 
              value = { nickname }
              handle = { handleNickName }
            />
          </label>
          <button 
            className='box-welcome-button' 
            type = 'submit'
            onClick = {() => handleStart()}
            >
            Start game
          </button>
        </form>
      </div>
    </section>
  )
}

export default Home