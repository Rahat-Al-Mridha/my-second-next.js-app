'use client'
import React, { useState } from 'react';

const Counter = () => {
     const [count,setCount]=useState(0);
    console.log("counter page render");

    const handkeIncrese =() =>{
        console.log('Increase button clicked')
        setCount(count+1);
    }
    return (
        <div>
            <h1>Counter:{count}</h1> 
            <button 
            onClick={handkeIncrese}
            className='bg-blue-500 text-2xl text-white font-bold py-2 px-6 rounded-3xl'>
            increse!
            </button>          
        </div>
    );
};

export default Counter;