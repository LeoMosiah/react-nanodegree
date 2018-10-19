import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "../components/Book";
import { DebounceInput } from "react-debounce-input";

const isEmptyString = string => string === "";
class SearchBooks extends Component {
  state = {
    searchBooks: []
  };
  async handleSearch(query) {
    if (!isEmptyString(query)) {
      try {
        this.setState({
          searchBooks: await BooksAPI.search(query)
        });
      } catch (e) {
        this.setState({
          searchBooks: e
        });
      }
    } else {
      this.setState({
        searchBooks: []
      });
    }
  }
  render() {
    const { searchBooks } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={3}
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.error !== "empty query" &&
              searchBooks.map(book => (
                <Book key={book.id} book={book} handleChange={handleChange} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
