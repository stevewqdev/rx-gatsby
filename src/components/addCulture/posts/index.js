import React from 'react'

export default class BlogPosts extends React.Component {
  render() {
    return (
      <>
        <h1>Blog posts component</h1>
        {this.props.posts.map((post) => (
          <h1>{post.title}</h1>
        ))}
      </>
    )
  }
}