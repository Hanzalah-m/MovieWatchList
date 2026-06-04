import { memo } from 'react';
import reactLogo from './assets/react.svg'

const Navbar = () => {
    return (
        <div className='flex items-center px-5 py-1.5 h-15 gap-4 bg-[#4e0890] text-white p-4 justify-between'>
            <div className="Name and logo flex items-center gap-2">
                <img src={reactLogo} alt="Logo" className="w-8 h-8" />
                <h1 className="text-2xl font-bold">Movie Watch List</h1>

            </div>
            <div className='flex items-center gap-12 px-1 py-2 '>
                <div className="flex items-center h-10 gap-2 bg-[rgba(142,165,224,0.57)] px-2 rounded-full">
                    <input className="relative h-8 sbarcolor rounded-[50px] flex items-center gap-2 px-4 py-2 text-gray-700" placeholder="Search movies...">

                    </input>
                    <button className='bg-[#4e0890] h-8 align-text-center rounded-[50px] px-4  text-white font-semibold hover:bg-[#281b34] transition duration-300'>
                        Search
                    </button>
                </div>
                <div className="Navlist ">
                    <ul className='flex gap-8 justify-evenly'>
                        <li>Browse</li>
                        <li>My List</li>
                        <li>Add Movie</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;