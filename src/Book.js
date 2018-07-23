import React from 'react'

let Book = props => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.url})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => {
              props.onChangeShelf(e, props.book)
            }}
            value={props.shelf ? props.shelf : 'none'}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              {props.shelf === 'currentlyReading' && '√ '}
              Currently Reading
            </option>
            <option value="wantToRead">
              {props.shelf === 'wantToRead' && '√ '}
              Want to Read
            </option>
            <option value="read">
              {props.shelf === 'read' && '√ '}
              Read
            </option>
            <option value="none">
              {props.shelf === 'none' && '√ '}
              {props.shelf === undefined && '√ '}
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.author}</div>
    </div>
  </li>
)

export default Book
