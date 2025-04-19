import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/AddToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([]);

    const [sort, setSort] = useState('');
    const data = useLoaderData();


    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredData.includes(book.bookId));
        setReadList(myReadList);

    }, [])

    const  handleSort = (type) =>{
          setSort(type)
          if(type === "pages"){
            const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            
          }
          if(type === "ratings"){
            const sortedByRatings = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByRatings);
          }
    }


    return (
        <div className='my-10 max-w-10/12 mx-auto'>
            <details className="dropdown">
                <summary className="btn btn-info text-white  m-1">Sort By: {sort?sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() =>handleSort("ratings")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-center font-semibold text-2xl my-5'>Book I read {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-center font-semibold text-2xl my-5'>My Wish List</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;