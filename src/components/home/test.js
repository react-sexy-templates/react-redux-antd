import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNum, addAsyncNum } from '@/actions/home'

import Hello from '@/components/commons/hello'
import { Button } from 'antd'

class Test extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }

    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleAsyncAddClick = this.handleAsyncAddClick.bind(this)
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  handleAddClick () {
    const { dispatch, num } = this.props
    dispatch(addNum(num+1))
  }

  handleAsyncAddClick () {
    const { dispatch, num } = this.props
    dispatch(addAsyncNum(num+1))
  }

  render() {
    const { num } = this.props
    return (
      <div>
        <Hello name="react-sexy" />
        <div style={{ margin: '20px auto', display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ marginRight: '20px' }}
            onClick={this.handleAddClick}>增加</Button>
          <Button onClick={this.handleAsyncAddClick}>异步增加</Button>
        </div>
        <div style={{ textAlign: 'center' }}>{num}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { home } = state;
  return {
    ...home
  }
}

export default connect(mapStateToProps)(Test);