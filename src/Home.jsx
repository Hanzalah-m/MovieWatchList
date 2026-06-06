import { memo } from 'react';
import MovieCard from './MovieCard';
import tree from './assets/tree.jpg';
import batman from './assets/images.jpg';

const Home = () => {
    return (
        <div>
            <div className='flex p-10 gap-10 flex-wrap bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179]'>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
                <MovieCard image= {batman}/>
            </div>
        </div>
    );
};

export default memo(Home);