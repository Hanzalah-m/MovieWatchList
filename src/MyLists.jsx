import { memo } from 'react';
import Infobarlist from './infobarlist';
import MovieCardList from './MovieCardList';

const MyLists = ({ watchlistMovies = [], onRemove }) => {
    return (
        <div className='myhomepage flex justify-center p-10 px-40 gap-10 flex-wrap bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179]'>
            <div className='flex flex-wrap gap-3 px-3 w-full justify-between '>
                <Infobarlist />
                <Infobarlist />
                <Infobarlist />
            </div>

            <div className='flex flex-col w-full bg-[#ffffff75] justify-evenly rounded-xl px-4 divide-y divide-neutral-800'>
                {watchlistMovies.length === 0 ? (
                    <div className='p-10 text-center text-[#1f2937]'>Your watchlist is empty. Add movies from Browse.</div>
                ) : (
                    watchlistMovies.map((movie) => (
                        <MovieCardList key={movie.id} movie={movie} onRemove={onRemove} />
                    ))
                )}
            </div>
        </div>
    );
};

export default memo(MyLists);