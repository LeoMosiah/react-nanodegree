import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import BookShelf from "./wrappers/BookShelf";
import OpenSearch from "./atoms/OpenSearch";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf title="Currently Reading" />
            <BookShelf title="Want To Read" />
            <BookShelf title="Read" />
          </div>
        </div>
        <OpenSearch />
      </div>
    );
  }
}

export default BooksApp;
