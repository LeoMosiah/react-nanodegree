import React, { Component } from "react";
import Book from "../components/Book";

class BookShelf extends Component {
  byShelf = book => {};
  camelize = str => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };
  render() {
    const { title, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === this.camelize(title))
              .map(book => (
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

export default BookShelf;
