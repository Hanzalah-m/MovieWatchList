import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar'
import './App.css'
import Home from './Home'
import MyLists from './MyLists'
import MovieInfoPage from './MovieInfoPage'
import AddMoviePage from './AddMoviePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Home />
      <MyLists/>

      <MovieInfoPage/>
      <AddMoviePage/>
      

      
    </div>
  )
}

export default App
