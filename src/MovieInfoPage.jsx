import { memo } from 'react';
import { useParams } from 'react-router-dom';
import batman from './assets/images.jpg'

const MovieInfoPage = ({ movies = [] }) => {
    const { id } = useParams();
    const movieId = Number(id);
    const movie = movies.find((item) => item.id === movieId) || movies[0] || {};

    return (
        <div className='flex flex-col min-h-screen w-full p-8 gap-4 justify-center content-center bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179]'>
            <div className='flex flex-col justify-center rounded-lg bg-[#ffffff35] content-center p-3 gap-1.5'>
                <div className='flex'>
                    <div className='h-70 w-60 min-w-[15%] rounded-lg  overflow-hidden'>
                        <img className='h-full w-full object-cover' src={movie.image || batman} alt="poster" />
                    </div>
                    <div className='flex ml-3 flex-col p-2 gap-2 '>
                        <div className='text-2xl font-bold '>
                            {movie.title || 'Movie not found'}
                        </div>
                        <div className='text-lg '>
                            {movie.year || 'N/A'}, {movie.genre || 'Unknown'}
                        </div>
                        <div className=' text-xs text-yellow-600 '>
                            {movie.rating || 'N/A'}
                        </div>

                    </div>
                </div>
                <div className='text-lg font-medium font-serif mr-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus itaque corrupti nostrum, quaerat voluptatum labore necessitatibus quae beatae maxime inventore neque, eaque, delectus est sed quia voluptate consequuntur totam.
                </div>
            </div>
            <div className=' flex content-center gap-4 '>
                <button className='p-2 rounded-2xl bg-[#ffffff72]'>
                    Add to WatchList
                </button>
                <div className='p-2 rounded-2xl bg-[#ffffff72]'>
                    Mark as Watched
                </div>
            </div>
            <div className="flex flex-col w-full mt-4">
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
            </div>

        </div>
    );
};

export default memo(MovieInfoPage);