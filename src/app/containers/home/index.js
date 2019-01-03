import React from 'react'
import { connect } from 'react-redux'
import Container from '../../components/container'

class Home extends React.Component {
  render () {
    const {state} = this.props
    return (
      <Container>
        {JSON.stringify(state)}
      </Container>
    )
  }
}

export default connect(
  state => ({
    state
  })
)(Home)
