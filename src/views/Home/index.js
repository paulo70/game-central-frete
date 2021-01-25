import React, { useState } from 'react'
import { navigate, A } from 'hookrouter'
import Gamer from '../../models/gamer.js'

import './home.scss'

const Home = () => {

const [ nickname, setNickName ] = useState('')

 const handleRegisterGamer = (e) => {

 }

 const handleNickName = (e) => {
  setNickName(e.target.value)
 }

  return (
    <section>
      <h1>Welcome to car racing game</h1>
      <div className='box-welcome'>
        <form noValidate onSubmit = { handleRegisterGamer }>
          <label>NickName:</label>
          <input 
            type = 'text' 
            placeholder = 'type your nickname' 
            value = { nickname }
            onChange = { handleNickName }
          />
          <button></button>
        </form>
      </div>
    </section>
  )
}

export default Home