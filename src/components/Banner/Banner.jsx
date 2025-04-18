import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='max-w-10/12 mx-auto bg-[#d4ebe3] rounded-2xl flex justify-around py-40 my-10'>
            <div>
                <h1 className='text-6xl font-semibold text-black mb-10 '>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-green-500 text-white text-xl'>View The List</button>
            </div>
            <div>
                <img className='rounded-xl shadow' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;