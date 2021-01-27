import React, { useState, useEffect } from 'react'
import { navigate, A } from 'hookrouter'
import Gamer from '../../models/gamer.js'
import Input from '../../components/input'
import Button from '../../components/button'

import './home.scss'


const Home = () => {

  const [ nickname, setNickName ] = useState('')
  const [ count, setCount ] = useState(0)
  const [ error, setError ] = useState('')

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

    if(nickname !== ''){
      const timer = setInterval(() => {
        setCount( seconds = seconds - 1 )

        if( seconds === 0 ) {
          clearInterval(timer)
          navigate('/game')
        }

      },1000)
    } else{
      setError('Nickname field cannot be blank')
    }
  }

  return (
    <section>
      <div className='box-children'>
        <div className='box-children-count'>
          <h2>Are you ready?</h2>
          <span className='box-children-count-timer'>{ count }</span>
        </div>
      </div>

      <div className='box-children'>
        <div className='box-children-welcome'>
          <h1 className='box-children-welcome-title'>Welcome to car racing game</h1>
          <form className='box-children-welcome-form' noValidate onSubmit = { handleRegisterGamer }>
            <label className='box-children-welcome-label'>NickName:
              <Input 
                type = 'text' 
                placeholder = 'type your nickname' 
                value = { nickname }
                handle = { handleNickName }
              />
            </label>
            
            { error ? ( <span className='error'>{error}</span> ) : '' }
            
            <Button type = 'submit' name = 'Start game' handle = {() => handleStart()} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home