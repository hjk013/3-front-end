import React, {Component } from 'react';
import $ from 'jquery';
import Post from './Post.jsx';

export default class Posts extends Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: [],
  
    }
  }
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "/api/posts",
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
      }
    }
    
    $.ajax(settings).done((response) => {
      this.setState({posts: response})

    });
  }

  render() {
    let { posts } = this.state;

    return (
    !posts ? <h1 className="loading">Loading... </h1> :
    <div>
      <h2>All Llamantations</h2>
      {console.log('this is from the parent comp', this.state.posts)}
        <ul>
            {posts.map((post) => 
              <li className="post-list-entry" onClick={() => this.props.viewPost(post)} key={post._id}> 
                <div className="post-list-entry-title">{post.title}</div>
                <span className="post-list-entry-stats">{post.votes} upvotes </span>
                <span className="post-list-entry-stats">{post.comments.length} comments</span>
              </li>
            )}
        </ul>
    </div>
    )
  }
}
{/* <div>
  <h2>All Llamantations</h2>
  <ul>
    <li className="post-list-entry">
      <div className="post-list-entry-title">This is an example post title.</div>
      <span className="post-list-entry-stats">3 upvotes</span> <span className="post-list-entry-stats"> 1 comment</span>
    </li>
    <li className="post-list-entry">
      <div className="post-list-entry-title">Here's another example post.</div>
      <span className="post-list-entry-stats">0 upvotes</span> <span className="post-list-entry-stats"> 0 comments</span>
    </li>
    <li className="post-list-entry">
      <div className="post-list-entry-title">A third example post!</div>
      <span className="post-list-entry-stats">9 upvotes</span> <span className="post-list-entry-stats"> 3 comments</span>
    </li>
  </ul>
</div> */}


