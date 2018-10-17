import React, { Component } from "react";
import Book from "../components/Book";
import _ from "lodash";

class BookShelf extends Component {
  render() {
    const { title, books, handleChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === _.camelCase(title))
              .map(book => (
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.authors}
                  coverURL={book.imageLinks.thumbnail}
                  handleChange={handleChange}
                  shelf={book.shelf}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
