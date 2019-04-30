import React from "react"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import BookListPage from "./pages/BookListPage"
import SearchPage from "./pages/SearchPage"
import { Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    isHint: false
  }

  componentDidMount() {
    //获取默认的书籍对象数组
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }

  changeShelf = (e, book) => {
    let i = e.target.selectedIndex
    let v = e.target.options[i].value
    // 先利用本地数据进行更新并渲染，这样能提高交互的即时性，因为不用等待服务器的返回
    // 书架页面书籍信息的本地更新
    this.setState(state => ({
      books: state.books.map(b => {
        if (b.id === book.id) {
          b.shelf = v
        }
        return b
      })
    }))

    // 搜索页面添加到本地数据
    let b = this.state.books
    // 判断书架中是否有这本书，没有才添加，有的话 只是改变其在书架中的位置
    // 使用 includes 方法判断是否已经存在这本书
    let hasThisBook = b.map(b => b.id).includes(book.id)

    if (!hasThisBook) {
      b.cancat(book)
      this.setState({
        books: b
      })
    }

    // 在服务器更新书的书架信息
    BooksAPI.update(book, v)
  }

  handlerSearch = query => {
    BooksAPI.search(query).then(books => {
      debugger
      // 如果搜索获得的结果有书籍则为搜索出来的书匹配书架上的书，并为其添加书架属性，这样便可以同步显示其书架信息
      if (books && books.length) {
        this.setState(state => ({
          searchBooks: books.map(book => {
            for (let b of state.books) {
              if (book.id === b.id) {
                book.shelf = b.shelf
              }
            }
            return book
          }),
          isHint: false
        }))
        // 如果返回的数据中没有数据，则提醒能够搜索的关键字
      } else {
        this.setState({
          searchBooks: [],
          isHint: true
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <CSSTransition timeout={300} classNames="page" in={true}>
              <BookListPage
                onChangeShelf={this.changeShelf}
                books={this.state.books}
              />
            </CSSTransition>
          )}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <CSSTransition timeout={300} classNames="page" in={true}>
              <SearchPage
                onSearch={this.handlerSearch}
                onChangeShelf={(e, book) => {
                  this.changeShelf(e, book)
                  history.push("/")
                  // 清除 search 页面中的书籍
                  this.setState({
                    searchBooks: []
                  })
                }}
                onCleanSearch={() => {
                  this.setState({
                    searchBooks: []
                  })
                }}
                books={this.state.searchBooks}
                isHint={this.state.isHint}
              />
            </CSSTransition>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
