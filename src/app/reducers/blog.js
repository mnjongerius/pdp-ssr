import TYPES from '../types'

const initialState = {
  posts: {
    loading: false,
    error: null,
    entries: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.BLOG.BLOG_LOAD_INIT:
      return { ...state, loading: true }
    case TYPES.BLOG.BLOG_LOAD_SUCCESS:
      return { ...state, posts: action.posts }
    case TYPES.BLOG.BLOG_LOAD_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}

