import React, { Component } from 'react'
import toast404 from '../assets/toast-on-computer.png'


class NotFound extends Component {
  render() {
    return (
      <div className="main-body">
        <h3>Oops something went wrong!</h3>
        <img src={ toast404 } alt="cat sitting on computer" id="toast404" />
      </div>
    )
  }
}
export default NotFound
