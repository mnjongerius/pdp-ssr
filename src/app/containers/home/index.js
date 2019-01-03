import React from 'react'
import { connect } from 'react-redux'
import Container from '../../components/container'
import { getBlogEntries } from '../../selectors'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    const {entries} = this.props
    return (
      <Container>
        {/*{JSON.stringify(posts)}*/}
        {entries ? entries.map(this._renderPost) : 'No entries'}
      </Container>
    )
  }

  _renderPost = ({ id, title }) => {
    return (
      <div key={id}>
        <Link to={`/post/${id}`}>
          {title}
        </Link>
      </div>
    )
  }
}

export default connect(
  state => ({
    entries: getBlogEntries(state)
  })
)(Home)
