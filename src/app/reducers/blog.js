import TYPES from '../types'

const initialState = {
  posts: {
    loading: false,
    error: null,
    entries: []
  }
}

export default (state = initialState, action) => {
  const { posts } = state
  switch (action.type) {
    case TYPES.BLOG.BLOG_LOAD_INIT:
      return { ...state, posts: { ...posts, loading: true } }
    case TYPES.BLOG.BLOG_LOAD_SUCCESS:
      return { ...state, posts: { ...posts, loading: false, entries: action.entries } }
    case TYPES.BLOG.BLOG_LOAD_ERROR:
      return { ...state, posts: { ...posts, error: action.error } }
    default:
      return state
  }
}

