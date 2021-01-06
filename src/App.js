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
          <Route path='/catindex' component={ CatIndex } />
          <Route path='/catshow' component={ CatShow } />
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
