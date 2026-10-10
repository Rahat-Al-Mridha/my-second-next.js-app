import React from 'react';

const menuLoading = () => {
    return (
        <div className='flex flex-col flex-1 items-center justify-center bg-amber-500 font-sans dark:bg-black'>
            <span className="loading loading-spinner loading-5xl"></span>
        </div>
    );
};

export default menuLoading;