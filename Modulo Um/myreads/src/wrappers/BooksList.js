import React, { Component } from "react";
import BookShelf from "./BookShelf";
import OpenSearch from "../atoms/OpenSearch";

class BooksList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title="Currently Reading" />
          <BookShelf title="Want To Read" />
          <BookShelf title="Read" />
        </div>
        <OpenSearch />
      </div>
    );
  }
}

export default BooksList;