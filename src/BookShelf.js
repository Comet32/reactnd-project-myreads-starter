import React from 'react'
import Book from './Book'

let BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book, i) => (
          <Book
            url={book.imageLinks ? book.imageLinks.smallThumbnail : ''}
            title={book.title}
            author={book.authors}
            shelf={book.shelf}
            book={book}
            key={i}
            onChangeShelf={props.onChangeShelf}
          />
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf
