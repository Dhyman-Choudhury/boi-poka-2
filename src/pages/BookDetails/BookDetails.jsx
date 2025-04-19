import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utilities/AddToDB';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const newId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === newId);
    console.log(singleBook)
    const { bookId, bookName, totalPages, publisher, author, image, review, rating, category, tags, yearOfPublishing } = singleBook;

    const handleMarkAsRead = id =>{
        // Store with id
        // where to store 
        // array or like a collection
        // if book already exist then show an alert
        // if book not exist then push in the collection or array

        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   })
        toast("Wow so easy!")
        addToStoredDB(id)

        
    }
    const handleWishList = id =>{

    }
    return (
        
        <div className='flex gap-10 max-w-10/12 mx-auto my-10 flex-1/2'>
             <ToastContainer />
            {/* image */}
            <div className='bg-gray-200 rounded-xl py-5 w-1/2'>
                <img className='w-[70%] mx-auto ' src={image} alt="" />
            </div>

            {/* Content */}
            <div className='space-y-4 w-1/2'>
                <div className=''>
                    <h1 className='text-6xl font-bold'>{bookName}</h1>
                   
                    <p className='mt-3'>By: {author}</p>
                </div>
                <hr className='border-gray-200' />
                <p>{category}</p>
                <hr className='border-gray-200' />
                <p><span className='font-semibold'>Review:</span> {review}</p>
                <div className='flex gap-5'>
                    <h2 className='font-semibold'>Tag:</h2>
                    {
                        tags.map(tag => <button className='text-green-400  font-semibold bg-gray-100 px-3 rounded-full'>{tag}</button>)
                    }
                </div>
                <p>Number of Pages:   <span className='ml-6 font-semibold '>{totalPages}</span></p>
                <p>Publisher:         <span className='ml-10 font-semibold'>{publisher}</span></p>
                <p>Year of Publishing:<span className='ml-8 font-semibold'>{yearOfPublishing}</span>   </p>
                <p>Rating:            <span className='ml-22 font-semibold'> {rating}</span> </p>
                <div className='flex gap-5'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn'>Mark as Read</button>
                    <button onClick={() => handleWishList(id)} className='btn btn-accent text-white'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;