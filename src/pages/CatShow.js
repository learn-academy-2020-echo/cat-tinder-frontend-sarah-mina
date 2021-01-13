import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    let { cat } = this.props
    return (
      <div className="main-body">
        <h3>Hi there, I'm { cat.name }</h3>
        <p>I am { cat.age } years old</p>
        <p>I enjoy { cat.enjoys }</p>
        <NavLink to={`/catedit/${this.props.cat.id}`}>
          <Button>
            Edit Cat Profile
          </Button>
        </NavLink>
        <br />
        <br />
        <NavLink to="/catindex">
          <Button onClick={ () => this.props.deleteCat(this.props.cat.id)}>
            Delete Cat Profile
          </Button>
        </NavLink>
      </div>
    )
  }
}
export default CatShow
