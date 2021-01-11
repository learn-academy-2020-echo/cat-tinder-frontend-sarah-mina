import React, { Component } from 'react'

class CatIndex extends Component {
  render() {
    return (
      <>
        <h3>Meet the Cats</h3>
        { this.props.cats && this.props.cats.map((cat, index) => {
          return (
            <a href={`/catshow/${cat.id}`}><p key={ index }>{ cat.name }</p></a>
          )
        })}
      </>
    )
  }
}
export default CatIndex
