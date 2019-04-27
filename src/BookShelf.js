import React from "react"
import Book from "./Book"
import { CSSTransition } from "react-transition-group"

let BookShelf = ({ books, onChangeShelf, shelfTitle }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, i) => (
          <CSSTransition timeout={300} classNames="alert" in={true} key={i}>
            <Book
              url={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
              title={book.title}
              author={book.authors}
              shelf={book.shelf}
              book={book}
              onChangeShelf={onChangeShelf}
            />
          </CSSTransition>
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf
