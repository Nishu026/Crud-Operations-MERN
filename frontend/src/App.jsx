import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create.jsx'
import Read from './components/Read.jsx'
import Update from './components/Update.jsx'

function App() {


  return (
    <>
  
      <div className="App">
      <Router>
        <Navbar/>
       <Routes>
        <Route exact path='/' element={<Create />} />
        <Route  path='/all' element={<Read/>} />
        <Route  path='/:id' element={<Update/>} /> 
        {/* all pages url id will be different */}
       </Routes>
        
    </Router>
        </div>
    </>
  )
}

export default App
