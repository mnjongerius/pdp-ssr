export const getBlogEntries = (state) => {
  return state.blog.posts.entries
}

export const getPostById = (state, searchId) => {
  return state.blog.posts.entries.find(({id}) => parseInt(id) === parseInt(searchId))
}