import React, { Component } from 'react'

class CatIndex extends Component {
  render() {
    console.log(this.props.cats)
    return (
      <>
        <h3>This is the index page</h3>
        { this.props.cats.map((cat, index) => {
          return (
            <a href={`/catshow/${cat.id}`}><p key={ index }>{ cat.name }</p></a>
          )
        })}
      </>
    )
  }
}
export default CatIndex
