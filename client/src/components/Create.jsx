import React, { Component } from 'react';
import $ from 'jquery';

export default class Create extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
    console.log(this.state.title)
  }
  handleBody(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
    console.log(this.state.body)
  }
  async handleSubmit(){
    const data = await $.post(`/api/posts`, {title: this.state.title, body: this.state.body});
    
  }

  render() {
    return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={this.handleSubmit}>
        <input className="create-title-input" type="text" onChange={e => this.handleTitle(e)} placeholder="Post Title"></input>
        <textarea className="create-body-textarea" onChange={e => this.handleBody(e)} placeholder="Post Body"></textarea>
        <button className="create-submit-button" type="submit">Save post</button>
      </form>
    </div>

    )
  }
}

