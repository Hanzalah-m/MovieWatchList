# 🎬 Movie Watchlist App
 
A React practice project that covers 11 core React concepts — built as a simple movie browsing and watchlist management app.
 

 
---
 
## 📸 Preview
  

 
## ✨ Features
 
- Browse a curated list of movies
- Search movies by title in real-time
- Filter by genre
- Add or remove movies from your watchlist
- Mark movies as watched / unwatched
- Add custom movies via a form with validation
- Light / dark mode toggle
- Watchlist stats (total saved, watched, pending)

 
## 🗂️ Pages
 
```
/               → Home — browse all movies, search and filter by genre
/watchlist      → Watchlist — your saved movies with stats
/movie/:id      → Detail — single movie info, add to list / mark watched
```
 
---
 
## 🛠️ Tech Stack
 
- [React 18](https://react.dev/)
- [React Router v6](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Vite](https://vitejs.dev/)
---
 
## 🚀 Getting Started
 
```bash
# 1. Clone the repo
git clone https://github.com/your-username/movie-watchlist.git
cd movie-watchlist
 
# 2. Install dependencies
npm install
 
# 3. Start the dev server
npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) in your browser.
 
---
 
## 📁 Folder Structure
 
```
src/
├── components/
│   ├── Card.jsx          # children prop
│   ├── MovieList.jsx     # render prop + useMemo filter
│   ├── Navbar.jsx        # useContext for theme
│   └── SearchBar.jsx     # lifted state + useRef
├── pages/
│   ├── Home.jsx          # browse + search
│   ├── Watchlist.jsx     # saved movies
│   └── MovieDetail.jsx   # useParams + conditional rendering
├── store/
│   ├── store.js          # Redux configureStore
│   └── watchlistSlice.js # createSlice — add/remove/toggle
├── context/
│   └── ThemeContext.js   # createContext + useContext
├── hooks/
│   └── useLocalStorage.js
├── data/
│   └── movies.js         # hardcoded movie list
└── App.jsx               # routes
```
 
---
 

 
## 📝 License
 
This project is open source and available under the [MIT License](LICENSE).
 
---
 