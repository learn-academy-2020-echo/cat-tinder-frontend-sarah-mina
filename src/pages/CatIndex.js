import React, { Component } from 'react'

class CatIndex extends Component {
  render() {
    return (
      <div className="main-body">
        <h3>Meet the Cats</h3>
        { this.props.cats && this.props.cats.map((cat, index) => {
          return (
            <a href={`/catshow/${cat.id}`} key={ index }>
              <p>{ cat.name } 🐾</p>
            </a>
          )
        })}
      </div>
    )
  }
}
export default CatIndex
