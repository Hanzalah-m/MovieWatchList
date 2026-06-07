import { memo } from 'react';
import { useNavigate, Link } from "react-router-dom";

const MovieCard = ({ movie, onAdd }) => {

    const navigate = useNavigate();

    const handleNavigation = (route) => {
        if (route.startsWith('#')) {
            const section = document.querySelector(route);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(route);
        }
    };

    return (
        <div className='Card cursor-pointer flex flex-col justify-center content-center w-55 rounded-xl bg-[#ffffff81] p-2 '
            onClick={() => handleNavigation("/MovieInfo")}
        >
            <div className='h-50 justify-center content-center rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={movie.image} alt={`${movie.title} Poster`} />
            </div>
            <div className='h-40 justify-center content-center rounded-2xl px-2 overflow-hidden py-0'>
                <div>
                    <h5 className='text-xl bold font-semibold font-serif mt-4'>{movie.title}</h5>
                    <p className='mb-3 px-0.5 text-[#242b37] text-[15px]'>
                        Rating {movie.rating}
                    </p>
                    <span className='bg-[#ffffff51] px-2 items-center pb-0.5 rounded-[10px]'>
                        {movie.genre}
                    </span>
                </div>
                <button type='button' onClick={onAdd} className='mt-5 text-sm w-auto px-2.5 bg-[#ffff] hover:bg-[#525252c2] text-[#2a2b35db] py-1 rounded-xl'>
                    Add to Watchlist
                </button>
            </div>
        </div>
    );
};

export default memo(MovieCard);
