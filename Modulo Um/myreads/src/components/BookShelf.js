import React, { Component } from "react";
import Book from "../components/Book";
import _ from "lodash";

class BookShelf extends Component {
  render() {
    const { shelfTitle, shelfBooks, handleChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks
              .filter(book => book.shelf === _.camelCase(shelfTitle))
              .map(book => (
                <Book key={book.id} book={book} handleChange={handleChange} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
