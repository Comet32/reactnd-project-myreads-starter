import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, i) => (
              <Book
                url={book.imageLinks.smallThumbnail}
                title={book.title}
                author={book.authors}
                shelf={book.shelf}
                book={book}
                key={i}
                onChangeShelf={this.props.onChangeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
