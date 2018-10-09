import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

const isEmptyString = string => string === "";

class SearchBooks extends Component {
  state = {
    input: "",
    books: [],
    shelf: "Search"
  };
  updateQuery = input => {
    this.setState(() => ({
      input: input.trim()
    }));
  };
  searchBook = query => {
    if (!isEmptyString(query)){
        BooksAPI.search(query).then(books => {
            try {
              this.setState((currentState) => ({
                  books: (books.map(book => book))
              }))
            } catch (err){ console.log(err.message)}
        });
    } else {return query}
  };
  render() {
    const { input, books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={input}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.searchBook(input)}
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                title={`${book.title}`}
                author={book.authors}
                coverURL={book.imageLinks.smallThumbnail}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
