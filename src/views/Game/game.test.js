import React from 'react'
import ReactDOM from 'react-dom'

import Game from './game'

it('Should render component without errors' , () => {
  const div = document.createElement('div')
  ReactDOM.render(<Game />, div)
  ReactDOM.unmountComponentAtNode(div)
})
