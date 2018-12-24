export function loadBlogSuccess (posts) {
  return { type: 'BLOG_LOAD_DONE', posts }
}
