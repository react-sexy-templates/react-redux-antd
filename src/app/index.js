import React, { Component } from 'react'

import { Provider } from 'react-redux'
import configureStores from '../store'

import RootRouter from '../router'

import './app.css'

class App extends Component {
  render() {
    return (
      <Provider className="app" store={configureStores}>
        <RootRouter />
      </Provider>
    )
  }
}

export default App