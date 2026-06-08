import { memo } from 'react';
import MovieCard from './MovieCard';

const Home = ({ movies = [], onAddToWatchlist, watchlistMovies,onRemove}) => {
    return (
        <div>
            <div className='flex p-10 gap-10 flex-wrap '>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onAdd={() => onAddToWatchlist(movie)}
                        watchlistMovies={watchlistMovies}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(Home);
