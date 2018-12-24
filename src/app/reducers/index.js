import { combineReducers } from 'redux'

const initialState = {
  blog: {
    posts: []
  }
}

const blog = (state = initialState.blog, action) => {
  switch (action.type) {
    case 'BLOG_LOAD_DONE':
      return { ...state, posts: action.posts }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  blog
})
