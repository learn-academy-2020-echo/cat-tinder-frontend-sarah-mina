import React, { Component } from 'react'
import { Button } from 'reactstrap'

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    let { cat } = this.props
    return (
      <div className="main-body">
        <h3>Hi there, I'm { cat.name }</h3>
        <p>I am { cat.age } years old</p>
        <p>I enjoy { cat.enjoys }</p>
        <Button href={`/catedit/${this.props.cat.id}`} >
          Edit Cat Profile
        </Button>
        <br />
        <br />
        <Button>
          Delete Cat Profile
        </Button>
      </div>
    )
  }
}
export default CatShow
