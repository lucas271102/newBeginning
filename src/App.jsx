import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Helmet} from 'react-helmet'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Layout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="root">
      <Helmet>
        <title>Horizon Solutions</title>
        <meta name='description' content='Improve your online presence'/>
        <meta property='og:title' content='Horizon Solutions'/>
        <meta property='og:description'  content='Improve your online presence'/>
        <meta property='og:image' content='/src/assets/bacground.png'/>
      </Helmet>
  <Home/>
  
     

     
    
    </div>
  )
}

export default App
