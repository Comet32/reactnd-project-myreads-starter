import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookListPage extends Component {
  render() {
    const { books } = this.props

    // 将 books 对象数组中对象根据其 shelf 值进行分组
    let currentlyReadingbooks = books.filter(
        book => book.shelf === 'currentlyReading'
      ),
      wantToReadbooks = books.filter(book => book.shelf === 'wantToRead'),
      readBooks = books.filter(book => book.shelf === 'read')

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                shelfTitle="Currently Reading"
                books={currentlyReadingbooks}
                onChangeShelf={this.props.onChangeShelf}
              />
              <BookShelf
                shelfTitle="Want to Read"
                books={wantToReadbooks}
                onChangeShelf={this.props.onChangeShelf}
              />
              <BookShelf
                shelfTitle="Read"
                books={readBooks}
                onChangeShelf={this.props.onChangeShelf}
              />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookListPage
