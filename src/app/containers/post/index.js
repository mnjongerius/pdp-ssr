import React from 'react'
import Container from '../../components/container'
import { connect } from 'react-redux'
import { getPostById } from '../../selectors'

class Post extends React.Component {
  static defaultProps = {
    post: {}
  }

  render () {
    const { post: { title, body } } = this.props
    return (
      <Container>
        <div>{title}</div>
        <div>{body}</div>
      </Container>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    post: getPostById(state, ownProps.match.params.id)
  })
)(Post)