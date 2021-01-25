import React from 'react'
import { useRoutes } from 'hookrouter'

import Home from '../views/Home'
import Game  from '../views/Game'


const routes = {
  '/': ()=> <Home />,
  '/game': ()=> <Game />
}

const routers = () => {
  return useRoutes(routes)
}

export default routers