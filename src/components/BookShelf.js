import React from "react"
import Book from "./Book"
import { CSSTransition, TransitionGroup } from "react-transition-group"

let BookShelf = ({ books, onChangeShelf, shelfTitle }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      {books.length === 0 ? (
        "This book shelf has no books"
      ) : (
        <TransitionGroup component="ol" className="books-grid">
          {books.map((book) => (
            <CSSTransition timeout={300} classNames="alert" key={book.id}>
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
        </TransitionGroup>
      )}
    </div>
  </div>
)

export default BookShelf
