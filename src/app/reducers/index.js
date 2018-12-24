import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

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

const rootReducer = combineReducers({
  blog
})

export function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware()
    )
  )
}