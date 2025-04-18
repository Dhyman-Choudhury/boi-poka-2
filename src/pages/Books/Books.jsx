import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    
    // System-1
    // useEffect(()=>{
    //   fetch('bookData.json')
    //   .then(res=>res.json())
    //   .then(data => setAllBooks(data))
    // },[])

    // System-2
    // const bookPromise = fetch('bookData.json')
    //  .then(res=> res.json())
    return (
        <div className='max-w-10/12 mx-auto'>
            <h3 className='my-10 text-4xl text-center font-medium'>Books</h3>
            <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
                  <div  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                  {
                    data.map(book => <Book key={book.bookId} book={book}></Book>)
                   }
                  </div>
            </Suspense>
        </div>
    );
};

export default Books;