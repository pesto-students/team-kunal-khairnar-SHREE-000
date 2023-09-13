import React from 'react'
import Book from './Book';
import withLogger from '../HOC/withLogger';

const BookList = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
  ];

  return (
    <div>
      {books.map((book,idx) => {
        return(
          <li key={idx} style={{listStyle: "none"}}>
            <Book book={book} />
          </li>
        )
      })}
    </div>
  )
}

export default withLogger(BookList);