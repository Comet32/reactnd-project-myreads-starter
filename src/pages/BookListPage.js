import React from "react"
import { Link } from "react-router-dom"
import BookShelf from "../components/BookShelf"

const BookListPage = ({ books, onChangeShelf }) => {
  // 将 books 对象数组中对象根据其 shelf 值进行分组
  let currentlyReadingbooks = books.filter(
      book => book.shelf === "currentlyReading"
    ),
    wantToReadbooks = books.filter(book => book.shelf === "wantToRead"),
    readBooks = books.filter(book => book.shelf === "read")

  //不同书架数据
  let listData = [
    { shelfTitle: "Currently Reading", shelfBooks: currentlyReadingbooks },
    { shelfTitle: "Want to Read", shelfBooks: wantToReadbooks },
    { shelfTitle: "Read", shelfBooks: readBooks }
  ]

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {listData.map((item, i) => (
            <BookShelf
              shelfTitle={item.shelfTitle}
              books={item.shelfBooks}
              onChangeShelf={onChangeShelf}
              key={i}
            />
          ))}
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookListPage
