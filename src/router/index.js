import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import * as RouterConfig from '../constants/RouterConfig'

import HeadBar from '../components/common/headbar'
import Home from '../containers/home/HomeContainer'

const { Header, Content } = Layout

const RootRouter = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header style={{ backgroundColor: '#f3f3f3' }}>
          <HeadBar />
        </Header>
        <Content style={{ height: '100%', padding: '20px 50px' }}>
          <Route exact path={RouterConfig.HOME} component={Home} />
        </Content>
      </Layout>
    </Router>
  )
}

export default RootRouter
