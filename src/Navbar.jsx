import { useNavigate } from "react-router-dom";
import { useState } from "react";
import reactLogo from './assets/react.svg'

const Navbar = ({ searchQuery, onSearchChange }) => {
    const [active, setActive] = useState(true);
    const tooglestate = () => {
        setActive(prev => {
            const newState = !prev;
            if (newState === true) {
                onSearchChange(""); // clear search when hiding
            }
            return newState;
        });
    };

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



    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className='flex items-center px-5 py-1.5 h-15 gap-4 bg-[#0a0f1e] text-white p-4 justify-between'>
            <div className="Name and logo cursor-pointer flex items-center gap-2"
                onClick={() => handleNavigation("/")}>
                <img src={reactLogo} alt="Logo" className="w-8 h-8" />
                <h1 className="text-2xl font-bold"

                >Movie Watch List</h1>

            </div>
            <div className='flex items-center gap-12 px-1 py-2 '>
                <form onSubmit={handleSearchSubmit} className={` ${active ? "hidden" : "flex"} items-center h-10 gap-2 bg-[#141e39] px-2 rounded-full`}>
                    <input
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="relative h-8 bg-[#1d2c53] rounded-[50px] flex items-center  gap-2 px-4 py-2 text-[#b8e8a8] outline-none"
                        placeholder="Search movies..."
                    />
                    <button type='submit' className='bg-[#2d5179] h-8 align-text-center rounded-[50px] px-4 text-white font-semibold hover:bg-[#281b34] transition duration-300'>
                        Search
                    </button>
                </form>
                <div className="Navlist ">
                    <ul className='flex gap-8 justify-evenly'>
                        <li className="border-b-3 border-[#fff0] cursor-pointer hover:border-[#ffffff] rounded-xs p-1 "
                            onClick={tooglestate}
                        >Browse</li>
                        <li className="hover:border-b-3 bo border-[#ffffff] cursor-pointer rounded-xs p-1 "
                            onClick={() => handleNavigation("/MyList")}
                        >My List</li>
                        <li className="hover:border-b-3 cursor-pointer border-[#ffffff] rounded-xs p-1 "
                            onClick={() => handleNavigation("/AddMovie")}
                        >Add Movie</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;