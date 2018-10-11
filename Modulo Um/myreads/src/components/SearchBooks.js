import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

async function name(params) {}

const isEmptyString = string => string === "";
class SearchBooks extends Component {
  state = {
    books: []
  };
  handleSearch = query => {
    if (!isEmptyString(query)) {
      BooksAPI.search(query)
        .then(booksPromise => {
          this.setState(() => ({
            books: booksPromise
          }));
        })
        .catch(error => {
          this.setState(() => ({
            books: error
          }));
        });
    } else {
      this.setState(() => ({
        books: []
      }));
    }
  };
  render() {
    const { books } = this.state;
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
              onChange={event => this.handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.error !== "empty query" &&
              books.map(book => (
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
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
