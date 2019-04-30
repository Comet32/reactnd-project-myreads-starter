import React from "react"

let Book = ({ url, book, shelf, title, author, onChangeShelf }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${url})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => {
              onChangeShelf(e, book)
            }}
            value={shelf ? shelf : "none"}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {author && author.map(name => (
        <div className="book-authors" key={name}>{name}</div>
      ))}
    </div>
  </li>
)

export default Book
