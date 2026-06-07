import { memo } from 'react';
import MovieCard from './MovieCard';

const Home = ({ movies = [], onAddToWatchlist }) => {
    return (
        <div>
            <div className='flex p-10 gap-10 flex-wrap bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179]'>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onAdd={() => onAddToWatchlist(movie)}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(Home);
