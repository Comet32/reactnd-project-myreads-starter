import React, { Component } from "react"
import { Link } from "react-router-dom"
import Book from "./Book"
import { CSSTransition } from "react-transition-group"

class SearchPage extends Component {
  state = {
    query: ""
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            onClick={this.props.onCleanSearch}
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              autoFocus
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => {
                this.setState({
                  query: e.target.value
                })
                this.props.onSearch(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books &&
              this.props.books.map((book, i) => (
                <CSSTransition
                  timeout={300}
                  classNames="alert"
                  in={true}
                  key={i}
                >
                  <Book
                    url={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                    title={book.title}
                    author={book.authors}
                    shelf={book.shelf}
                    book={book}
                    key={i}
                    onChangeShelf={this.props.onChangeShelf}
                  />
                </CSSTransition>
              ))}
          </ol>
          {this.props.isHint && (
            <div className="search-hint">
              <h1>提示信息</h1>
              <h3>
                您所使用的关键字搜索的信息缺失，请使用以下关键字进行搜索：
              </h3>
              <p>
                'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
                'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',
                'Brief', 'Business', 'Camus', 'Cervantes', 'Christie',
                'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai',
                'Design', 'Development', 'Digital Marketing', 'Drama',
                'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy',
                'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
                'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
                'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
                'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography',
                'Poetry', 'Production', 'Programming', 'React', 'Redux',
                'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',
                'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time',
                'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web
                Development', 'iOS'
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

// console.log(this.props.books)

export default SearchPage
