import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar'
import './App.css'
import Home from './Home'
import MyLists from './MyLists'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieInfoPage from './MovieInfoPage'
import AddMoviePage from './AddMoviePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyList" element={<MyLists/>} />
          <Route path="/AddMovie" element={<AddMoviePage/>}/>

        </Routes>

      </div>
    </BrowserRouter >
  )
}

export default App
