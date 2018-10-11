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
  async componentDidMount() {
    this.setState({
      books: await BooksAPI.getAll()
    });
  }
  async componentDidUpdate() {
    this.setState({ books: await BooksAPI.getAll() });
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
