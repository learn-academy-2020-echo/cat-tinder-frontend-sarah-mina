import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    console.log(this.props.cats)
    return (
      <div className="main-body">
        <h3>Meet the Cats</h3>
        { this.props.cats && this.props.cats.map((cat, index) => {
          return (
            <ul>
              <NavLink to={`/catshow/${cat.id}`} key={ index }>
               { cat.name } 🐾
              </NavLink>
            </ul>
          )
        })}
      </div>
    )
  }
}
export default CatIndex

// NavLink vs Link - Alicia
