import React, {Component} from 'react';
import $ from 'jquery';



export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      comments: this.props.postId.comments,
      votes: this.props.postId.votes
    }
    // this.handleComment = this.handleComment.bind(this)
  }

  async handleVotes(e){
  
    const { postId } = this.props;
    const data = await $.post(`/api/posts/${postId._id}/votes`);

    this.setState({
      votes: data.votes
    });
  }

  handleInput(e) {
    this.setState({comment: e.target.value})
  }
  
  async handleComment(e) {
    e.preventDefault();
    const { postId } = this.props
    const data = await $.post(`/api/posts/${postId._id}/comments`, {comment: this.state.comment});
    
    this.setState({
      comments: data.comments
    })
    
    
  }
  
  render() {
    console.log(this.state.comments)
    let { postId } = this.props;
    let { comments } = this.state;

    return(
      !postId ? <h1 className="loading">Loading... </h1> :
      <div>
        {console.log('this is from the child', postId.title)}
        <h3>{postId.title}</h3>
        <p>{postId.body}</p>
        <hr />
        <span className="post-stats" onClick={e => this.handleVotes(e)}>{this.state.votes} upvotes</span>
        <span className="post-stats post-stats-comments">{postId.comments.length} comments</span>
      <form onSubmit={e => this.handleComment(e)}>
        <textarea className="comment-input" placeholder="Add your comment here!" onChange={e => this.handleInput(e)}></textarea>
        <button className="comment-submit" type="submit">Save comment</button>
      </form>
      <ul>
        {comments.map((comment, index) => 
        <li className="comment-entry" key={index}>{comment}</li>
        )}
      </ul>
      </div>
    )
  }
};

