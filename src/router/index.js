import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as RouterConfig from '@/constants/RouterConfig'

import Home from '../containers/home'

const RootRouter = () => {
  return (
    <Router>
      <Route exact path={RouterConfig.HOME} component={Home} />
    </Router>
  )
}

export default RootRouter
