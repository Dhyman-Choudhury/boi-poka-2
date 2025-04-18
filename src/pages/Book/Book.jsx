import React, { use } from 'react';
import { Star } from 'lucide-react';


const Book = ({ book }) => {
    // const data = use(bookPromise);
    // console.log(data)
    // console.log(book)
    const {bookName, author, image, review, rating, category, tags} = book;
    return (
        <div className='flex flex-col'>
            <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-5 ">
                <figure className='w-full mx-auto py-5 border border-gray-200 bg-gray-100 rounded-xl'>
                    <img
                        className='h-[166px] '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body flex-1">

                    <div className='flex justify-around items-center my-2'>
                    {
                        tags.map(tag => <button className='text-green-400 text-lg font-semibold bg-gray-100 px-3 rounded-full'>{tag}</button>)
                    }
                    </div>
                    <h2 className="card-title flex justify-between">
                        {bookName}
                        
                    </h2>
                    <p>By: {author} </p>

                    <hr className="border-dashed border-gray-300 my-2" />

                    <div className="card-actions justify-between">
                        <p>{category}</p>
                        <div className="flex gap-2">{rating} <Star /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;