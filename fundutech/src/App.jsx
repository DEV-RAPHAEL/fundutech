import React from 'react'
import {Header} from './layout'
import {Volunteer, Register} from "./components"
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Volunteer />
      <Register />
    </div>
  )
}

export default App
