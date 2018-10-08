import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

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
    BooksAPI.search(query).then(books => {
      books.map(book => this.state.books.push(book));
    });
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
          {this.searchBook("Art")}
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                title={`${book.title}`}
                author={book.authors.join(" ")}
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
