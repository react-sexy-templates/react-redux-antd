import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomeList extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>123</div>
    )
  }
}

function mapStateToProps(state) {
  const { } = state;
  return {
  
  }
}

export default connect(mapStateToProps)(HomeList);