import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.url})`
              }}
            />
            <div className="book-shelf-changer">
              {this.props.shelf === undefined && (
                <select
                  onChange={e => {
                    this.props.onChangeShelf(e, this.props.book)
                  }}
                  value="none"
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              )}
              {this.props.shelf === 'none' && (
                <select
                  onChange={e => {
                    this.props.onChangeShelf(e, this.props.book)
                  }}
                  value="none"
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              )}
              {this.props.shelf === 'currentlyReading' && (
                <select
                  onChange={e => {
                    this.props.onChangeShelf(e, this.props.book)
                  }}
                  value="currentlyReading"
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">√ Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              )}
              {this.props.shelf === 'wantToRead' && (
                <select
                  onChange={e => {
                    this.props.onChangeShelf(e, this.props.book)
                  }}
                  value="wantToRead"
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">√ Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              )}
              {this.props.shelf === 'read' && (
                <select
                  onChange={e => {
                    this.props.onChangeShelf(e, this.props.book)
                  }}
                  value="read"
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">√ Read</option>
                  <option value="none">None</option>
                </select>
              )}
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    )
  }
}

export default Book
