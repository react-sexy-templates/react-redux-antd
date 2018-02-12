import React, { Component } from 'react'

import './index.css'

class Hello extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="title">hello,{this.props.name}</div>
    )
  }
}

export default Hello
