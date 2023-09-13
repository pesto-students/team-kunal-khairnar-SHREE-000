import React, { memo } from 'react'

const Book = ({ book }) => {
    const {
        title,
        author,
        year
    } = book;
  return (
    <div>
    <h3>{title}</h3>
    <p>Author: {author}</p>
    <p>Year: {year}</p>
  </div>
  )
}

export default memo(Book);