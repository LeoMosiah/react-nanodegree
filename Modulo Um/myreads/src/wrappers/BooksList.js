import React, { Component } from "react";
import BookShelf from "./BookShelf";
import OpenSearch from "../atoms/OpenSearch";

class BooksList extends Component {
  render() {
    const { books } = this.props;
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
