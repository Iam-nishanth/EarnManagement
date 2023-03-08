import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './components/Footer'
import Gorilla from './components/Gorilla'
import Gorilla2 from './components/Gorilla/Gorilla2'
import Home from './components/pages'
import './main.css'

function App() {

  return (
    <Router>
      <Home/>
      
    </Router>
    
  )
}
// const SRouter = styled.section`
//   display: flex;
//   justify-content: space-around;
//   flex-direction: column;

//   ${Footer}{
//     /* display: none; */
//     border-color: red;
//   }
// `

export default App
