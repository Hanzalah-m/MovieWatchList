import { memo } from 'react';

const Infobarlist = () => {
    return (
        <div className='bg-[#ffffff91] flex flex-col px-20 h-20 rounded-2xl justify-center content-center '>
            <span className='flex font-mono text-2xl justify-center content-center'>
                6
            </span>
            <p className=' font-bold text-xs content-center'>
                Saved
            </p>

        </div>
    );
};

export default memo(Infobarlist);