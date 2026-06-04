import { memo } from 'react';

const MovieCard = (props) => {
    return (
        <div className='Card cursor-pointer flex flex-col justify-center content-center w-55 rounded-xl bg-[#ffffff81] p-2 '>
            <div className='h-50 justify-center content-center rounded-xl  overflow-hidden'>
                <img className=' w-full h-full object-cover' src={props.image} alt="Movie Poster" />
            </div>
            <div className='h-40 justify-center content-center rounded-2xl  px-2 overflow-hidden py-0'>
                <div>
                    <h5 className='text-xl bold font-semibold font-serif  mt-4'>The Dark Knight</h5>
                    <p className='mb-3 px-0.5 text-[#242b37] text-[15px] '>
                       Rating  ⭐
                    </p>

                    <span className='bg-[#ffffff51] px-2 items-center pb-0.5  rounded-[10px] ' >
                        Scifi
                    </span>

                </div>

                <button className="mt-5 text-sm w-auto px-2.5 bg-[#ffff] hover:bg-[#525252c2] text-[#2a2b35db] py-1 rounded-xl">
                    Add to Watchlist
                </button>

            </div>

        </div>
    );
};

export default memo(MovieCard);