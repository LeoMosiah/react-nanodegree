import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import BooksList from "./pages/BooksList";
import SearchBooks from "./pages/SearchBooks";
import * as BooksAPI from "./utils/BooksAPI";
import _ from "lodash";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  async componentDidMount() {
    this.setState({
      books: await BooksAPI.getAll()
    });
  }
  handleChange = (bookHandle, bookShelf) => {
    BooksAPI.update({ id: bookHandle.id }, bookShelf);
    this.setState({
      books: this.state.books
        .filter(book => book.id !== bookHandle.id)
        .concat(_.set(bookHandle, "shelf", bookShelf))
    });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList books={books} handleChange={this.handleChange} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              booksOnShelf={books}
              handleChange={this.handleChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
