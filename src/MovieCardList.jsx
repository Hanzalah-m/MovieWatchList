import { memo } from 'react';

const MovieCardList = ({ movie, onRemove }) => {
  return (
    <div>
      <div className='flex items w-full flex-wrap gap-1.5 justify-between py-3'>
        <div className='flex items-center gap-6'>
          <div className='h-20 w-15 rounded-2xl overflow-hidden'>
            <img className='w-full h-full object-cover ' src={movie.image} alt='movie poster' />
          </div>
          <div>
            <h3 className='font-semibold text-white'>{movie.title}</h3>
            <p className='text-sm text-[#160079]'>{movie.genre} - {movie.year}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full'>In Watchlist</span>
          <button type='button' onClick={() => onRemove(movie.id)} className='text-neutral-400 border hover:bg-[#ff000055] border-white px-2 py-0.5 rounded-md'>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieCardList);
