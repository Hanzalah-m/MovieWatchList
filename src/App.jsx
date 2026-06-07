import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Home from './Home'
import MyLists from './MyLists'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddMoviePage from './AddMoviePage'
import batman from './assets/images.jpg'
import tree from './assets/tree.jpg'
import MovieInfoPage from './MovieInfoPage'

const availableMovies = [
  { id: 1, title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, image: batman },
  { id: 2, title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, image: tree },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.6, image: batman },
  { id: 4, title: 'Memento', year: 2000, genre: 'Thriller', rating: 8.4, image: tree },
]

function App() {
  const [watchlist, setWatchlist] = useState([])

  const handleAddToWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.some((item) => item.id === movie.id)) {
        return prev
      }
      return [...prev, movie]
    })
  }

  const handleRemoveFromWatchlist = (movieId) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== movieId))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home movies={availableMovies} onAddToWatchlist={handleAddToWatchlist} />} />
          <Route path="/MyList" element={<MyLists watchlistMovies={watchlist} onRemove={handleRemoveFromWatchlist} />} />
          <Route path="/AddMovie" element={<AddMoviePage />} />
          <Route path="/MovieInfo/:id" element={<MovieInfoPage movies={availableMovies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
