import React, { Component } from "react";
import BookShelf from "./BookShelf";
import OpenSearch from "../components/OpenSearch";
import * as BooksAPI from "../utils/BooksAPI";

class BooksList extends Component {
  state = {
    books: []
  };
  async componentDidMount() {
    this.setState({
      books: await BooksAPI.getAll()
    });
  }
  render() {
    const { books } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title="Currently Reading" books={books} />
          <BookShelf title="Want To Read" books={books} />
          <BookShelf title="Read" books={books} />
        </div>
        <OpenSearch />
      </div>
    );
  }
}

export default BooksList;
