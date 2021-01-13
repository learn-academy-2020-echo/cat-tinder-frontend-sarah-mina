import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import cats from './mockCats.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.catIndex()
  }

  catIndex = () => {
    fetch("http://localhost:3000/cats")
    .then(response => {
      return response.json()
    })
    .then(catsArray => {
      this.setState({ cats: catsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createCat = (newcat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      console.log(response)
      return response.json()
    })
    .then(() => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors", errors)
    })
  }

  updateCat = (editcat, id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(editcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(() => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  deleteCat = (id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      return response.json()
    })
    .then(() => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  render() {
    console.log(this.state.cats)
    return (
      <Router>
        <Header />

        <Switch>
          {/* Home */}
          <Route exact path="/" component={ Home } />

          {/* Index */}
          <Route
            path="/catindex"
            render={ (props) => <CatIndex cats={ this.state.cats } /> }
          />

          {/* Show */}
            <Route
              path="/catshow/:id"
              render={ (props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return <CatShow cat={ cat } deleteCat={ this.deleteCat } />
              }}
            />

          {/* New */}
          <Route
            path="/catnew"
            render={ (props) => <CatNew createCat={ this.createCat } /> }
          />

          {/* Edit */}
          <Route
            exact path="/catedit/:id"
            render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return <CatEdit updateCat={ this.updateCat } cat={ cat } />
            }}
          />

          <Route component={ NotFound } />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
export default App
