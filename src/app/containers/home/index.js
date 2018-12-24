import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render () {
    const {state} = this.props
    return JSON.stringify(state)
  }
}

export default connect(
  state => ({
    state
  })
)(Home)
