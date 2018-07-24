import React from 'react'
import Book from './Book'

let BookShelf = ({ books, onChangeShelf, shelfTitle }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, i) => (
          <Book
            url={book.imageLinks ? book.imageLinks.smallThumbnail : ''}
            title={book.title}
            author={book.authors}
            shelf={book.shelf}
            book={book}
            key={i}
            onChangeShelf={onChangeShelf}
          />
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf
