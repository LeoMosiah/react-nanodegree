import React from "react";
import "./App.css";
import BooksList from "./wrappers/BooksList";
import { Route } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./utils/BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({ books }));
    });
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BooksList books={this.state.books} />}
        />
        <Route path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
