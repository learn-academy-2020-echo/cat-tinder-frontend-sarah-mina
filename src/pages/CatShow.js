import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    let { cat } = this.props
    return (
      <>
        <h3>This is the Cat show page</h3>
        <p>{ cat.name }</p>
        <p>{ cat.age }</p>
        <p>{ cat.enjoys }</p>
      </>
    )
  }
}
export default CatShow
