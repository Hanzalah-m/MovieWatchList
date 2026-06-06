import { memo } from "react";

const AddMoviePage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // your logic here (e.g., send data to backend or update state)
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-linear-to-br from-[#0a0f1e] via-[#141e39] to-[#2d5179] p-6">
            <form
                // onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-lg bg-[#ffffff15] backdrop-blur-md rounded-xl p-6 shadow-lg border border-[#ffffff25]"
            >
                <h2 className="text-xl font-semibold mb-4 text-white">Add a movie</h2>


                <div className="flex flex-row gap-4 mb-4">
                    <div className="flex-1">
                        <label className="block text-sm text-gray-300 mb-1">Title *</label>
                        <input
                            type="text"
                            placeholder="Movie title"
                            className="w-full p-2 rounded-lg bg-[#ffffff20] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d5179]"
                            required
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm text-gray-300 mb-1">Year *</label>
                        <input
                            type="number"
                            placeholder="2024"
                            step="1"
                            min='1900'
                            className="w-full p-2 rounded-lg bg-[#ffffff20] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d5179]"
                            required
                        />
                    </div>
                </div>


                <div className="flex flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <label className="block text-sm text-gray-300 mb-1">Genre</label>
                        <select required className="w-full p-2 rounded-lg bg-[#ffffff20] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#2d5179]">
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm text-gray-300 mb-1">
                            Rating (1-10)
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            min='0'
                            max='10'
                            placeholder="8.5"
                            required
                            className="w-full p-2 rounded-lg bg-[#ffffff20] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d5179]"
                        />
                    </div>
                </div>
                <div className="flex-1 gap-4 mb-6">
                    <label className="block text-sm text-gray-300 mb-1">
                        About
                    </label>
                    <input
                        type="Text"
                        className="w-full h-30 p-2 rounded-lg bg-[#ffffff20] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d5179]"
                    />
                </div>


                <div className="flex gap-4 justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-[#ffffff35] text-white hover:bg-[#ffffff50] transition-all"
                    >
                        Add movie
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 rounded-lg bg-[#ffffff20] text-gray-300 hover:bg-[#ffffff35] transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default memo(AddMoviePage);
