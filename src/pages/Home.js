import React, { Component } from 'react'
import toast from '../assets/toast-toes.jpg'

class Home extends Component {
  render() {
    return (
      <div className="main-body">
        <h3>It's like Tinder but for cats.</h3>
        <p>Find your cat a friend today!</p>
        <p>Get started by <a href="/catnew">adding your cat</a> or meeting some <a href="/catindex" >new friends</a>.</p>
        <img src={ toast } alt="cat laying on its back" id="home-pic"/>
      </div>
    )
  }
}
export default Home
