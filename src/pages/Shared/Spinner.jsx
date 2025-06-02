import React from 'react';

const Spinner = () => {
    return (
        <div className='w-full flex h-[80vh] items-center justify-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Spinner;