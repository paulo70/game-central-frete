import React, { useState } from 'react'
import { navigate, A } from 'hookrouter'
import Gamer from '../../models/gamer.js'

import './home.scss'

const Home = () => {

const [ nickname, setNickName ] = useState('')

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

  return (
    <section>
      <div className='box-welcome'>
        <h1 className='box-welcome-title'>Welcome to car racing game</h1>
        <form className='box-welcome-form' noValidate onSubmit = { handleRegisterGamer }>
          <label className='box-welcome-label'>NickName:
            <input 
              type = 'text' 
              placeholder = 'type your nickname' 
              value = { nickname }
              onChange = { handleNickName }
            />
          </label>
          <button className='box-welcome-button' type = 'submit'>Start</button>
        </form>
      </div>
    </section>
  )
}

export default Home