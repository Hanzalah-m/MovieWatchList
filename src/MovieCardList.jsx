import { memo } from 'react';

const MovieCardList = (props) => {
  return (
    <div>
      <div class="flex items w-full flex-wrap gap-1.5 justify-between py-3">
                    <div class="flex items-center gap-6">
                        <div class="h-20 w-15 rounded-2xl overflow-hidden">
                            <img className='w-full h-full object-cover ' src={props.posterimg} alt='movieposter' />
                        </div>
                        <div>
                            <h3 class="font-semibold text-white">Inception</h3>
                            <p class="text-sm text-[#160079]">Sci-Fi · 2010</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">✓ Watched</span>
                        <button class="text-neutral-400 border hover:bg-[#ff000055] border-white px-2 py-0.5 rounded-md ">🗑️</button>
                    </div>
                </div>
    </div>
  );
};

export default memo(MovieCardList);