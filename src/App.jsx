import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/HomePage'
import Map from './components/pages/RMPage'
import ContactPage from './components/pages/ContactPage'
import './main.css'

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/roadmap' element={<Map/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
      
    </Router>
    
  )
}


export default App
