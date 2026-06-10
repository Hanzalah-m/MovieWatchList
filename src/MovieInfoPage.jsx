import { memo } from 'react';
import { useParams } from 'react-router-dom';


const MovieInfoPage = ({ movies = [], onAddToWatchlist, onRemove, watchlistMovies = [] }) => {
    const { id } = useParams();
    const movieId = Number(id);
    const movie = movies.find((item) => item.id === movieId) || movies[0] || {};
    const addedalr = watchlistMovies.some((item) => item.id === movie.id);

    return (
        <div className='flex mt-5 flex-col w-full p-8 gap-4 justify-center content-center'>
            <div className='flex flex-col justify-center rounded-lg bg-[#ffffff35] content-center p-3 gap-1.5'>
                <div className='flex'>
                    <div className='h-100 min-w-60 w-[68%] rounded-lg  overflow-hidden'>
                        <img className='h-full w-full object-cover' src={movie.image || batman} alt="poster" />
                    </div>
                    <div className='flex ml-3 flex-col p-2 gap-2 '>
                        <div className='text-4xl font-bold '>
                            {movie.title || 'Movie not found'}
                        </div>
                        <div className='text-2xl '>
                            {movie.year || 'N/A'}, {movie.genre || 'Unknown'}
                        </div>
                        <div className=' text-lg text-yellow-600 '>
                            Rating - {movie.rating || 'N/A'}
                        </div>
                        <div className='flex flex-wrap  text-[20px] font-medium font-serif mt-8 mr-6'>
                            {movie.description || 'No description available'}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=' flex content-center gap-4 '>
                <button onClick={() => addedalr ? onRemove(movie.id) :onAddToWatchlist(movie)} className={`p-2 cursor-pointer rounded-2xl ${addedalr ? "bg-[#080d68] text-white hover:bg-[#05095e]" : "bg-[#ffffff73] hover:bg-[#525252c2]" }`}>
                    {addedalr ? 'Added to Watchlist' : 'Add to WatchList'}
                </button>
                <div className='p-2 cursor-pointer hover:bg-[#575454b6] rounded-2xl bg-[#ffffff73]'>
                    Mark as Watched
                </div>
            </div>
            {/* <div className="flex flex-col w-full mt-4">
                <div className="text-xl font-semibold mb-2 text-[#ffff] text-shadow-black">
                    More Like This
                </div>

                <div className="flex gap-4 overflow-x-auto pb-2">
                    <button className="min-w-30 p-3 bg-[#ffffff25] rounded-xl text-center">
                        Interstellar
                    </button>
                    <button className="min-w-30 p-3 bg-[#ffffff25] rounded-xl text-center">
                        Matrix
                    </button>
                    <button className="min-w-30 p-3 bg-[#ffffff25] rounded-xl text-center">
                        Superman
                    </button>
                </div>
            </div> */}

        </div>
    );
};

export default memo(MovieInfoPage);