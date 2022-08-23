import React from 'react'
import { Register, Home, Contact } from './pages';
import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <div className="App">
      

      <Routes>
             <Route exact path='/' element={< Home />}></Route>
             <Route exact path='/register' element={< Register />}></Route>
             <Route exact path='/contact' element={< Contact />}></Route>

      </Routes>
    </div>
   
      </Router>
      </>
  )
  
}

export default App
