import React from 'react';

const Spiner = () => {
    return (
        <div className='w-full h-full items-center justify-center'>
            <div className="w-16 mx-auto h-16 items-center justify-center border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    );
};

export default Spiner;