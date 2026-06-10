import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Home from './Home'
import MyLists from './MyLists'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddMoviePage from './AddMoviePage'
import MovieInfoPage from './MovieInfoPage'
import moviesData from "./data/movies.json";
import tree from "./assets/tree.jpg";
import spiderman from "./assets/spiderman.jpg";
import batman from "./assets/batman.jpg";
import ironman from "./assets/ironman.jpg";
import darkhut from "./assets/darkhut.jpg"
import inception from "./assets/Inception.jpg"
import interstellar from "./assets/interstellar.jpg"
import lordofrings from "./assets/Lordofrings.jpg"
import nocomen from "./assets/nocomen.jpg"


const imageMap = {
  "tree.jpg": tree,
  "spiderman.jpg": spiderman,
  "batman.jpg": batman,
  "ironman.jpg": ironman,
  "darkhut.jpg": darkhut,
  "Inception.jpg": inception,
  "interstellar.jpg": interstellar,
  "Lordofrings.jpg": lordofrings,
  "nocomen.jpg": nocomen
};

const availableMovies = moviesData.map(movie => ({
  ...movie,
  image: imageMap[movie.image]
}));



// const availableMovies = [
//   { id: 1, title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, image: batman },
//   { id: 2, title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, image: tree },
//   { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.6, image: batman },
//   { id: 4, title: 'Memento', year: 2000, genre: 'Thriller', rating: 8.4, image: tree },
// ]

function App() {
  const [watchlist, setWatchlist] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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

  const filteredMovies = availableMovies.filter((movie) => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return true
    return (
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query)
    )
  })

  return (
    <BrowserRouter>
      <div className="App min-w-screen min-h-screen bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179]">
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home watchlistMovies={watchlist} movies={filteredMovies} onRemove={handleRemoveFromWatchlist}  onAddToWatchlist={handleAddToWatchlist} />} />
          <Route path="/MyList" element={<MyLists watchlistMovies={watchlist} onRemove={handleRemoveFromWatchlist} />} />
          <Route path="/AddMovie" element={<AddMoviePage />} />
          <Route path="/MovieInfo/:id" element={<MovieInfoPage movies={availableMovies} onRemove={handleRemoveFromWatchlist} onAddToWatchlist={handleAddToWatchlist} watchlistMovies={watchlist} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
