import { memo } from 'react';
import Infobarlist from './infobarlist';
import MovieCardList from './MovieCardList';
import batman from './assets/images.jpg';

const MyLists = () => {
    return (
        <div className='myhomepage flex justify-center p-10 gap-10 flex-wrap bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179]'>
            <div className='flex gap-6 w-full justify-evenly '>
                <Infobarlist/>
                <Infobarlist/>
                <Infobarlist/>
            </div>

            <div className='flex flex-col gap-6 w-full bg-[#ffffff75]  justify-evenly rounded-xl px-4 divide-y mx-38 divide-neutral-800'>
                <MovieCardList posterimg={batman} />
                <MovieCardList posterimg={batman} />
                <MovieCardList posterimg={batman} />
                <MovieCardList posterimg={batman} />
                <MovieCardList posterimg={batman} />
                <MovieCardList posterimg={batman} />
                <MovieCardList posterimg={batman} />
            </div>
        </div>
    );
};

export default memo(MyLists);