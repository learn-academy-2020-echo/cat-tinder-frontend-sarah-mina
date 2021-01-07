import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import catlogo from '../assets/cat-tinder.png'

class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container fluid>
            <a href="/"><img src={ catlogo } id="cat-logo"/></a>
            <span id="top-nav">
              <a>Meet the Cats</a> |
              <a> Add a Cat</a>
            </span>
          </Container>
        </Jumbotron>
      </>
    )
  }
}
export default Header
