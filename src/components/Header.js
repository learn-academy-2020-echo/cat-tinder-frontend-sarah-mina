import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import catlogo from '../assets/cat-tinder.png'

class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container fluid>
            <a href="/"><img src={ catlogo } alt="cat tinder logo" id="cat-logo" /></a>
            <span id="top-nav">
              <a href="/catindex">Meet the Cats</a> |
              <a href="/catnew"> Add a Cat</a>
            </span>
          </Container>
        </Jumbotron>
      </>
    )
  }
}
export default Header
