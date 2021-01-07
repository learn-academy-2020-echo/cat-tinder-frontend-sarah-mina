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
} from "react-router-dom"

import cats from './mockCats.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: cats
    }
  }
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={ Home } />
        {/* Static route - <Route path='/catindex' component={ CatIndex } /> */}
          <Route
            path='/catindex'
            render={ (props) => <CatIndex cats={ this.state.cats } /> }
          />


          {/* Static route - <Route path='/catshow/:id' component={ CatShow } /> */}

          <Route
            path='/catshow/:id'
            render={ (props) => {

              const id = props.match.params.id

              let cat = this.state.cats.find(cat => cat.id === parseInt(id))

              return <CatShow cat={ cat } />

            }}
          />




          <Route path='/catnew' component={ CatNew } />
          <Route path='/catedit' component={ CatEdit } />
          <Route component={ NotFound } />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
export default App
