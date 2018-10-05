import React, { Component } from "react";
import Book from "../components/Book";

class BookShelf extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book title="To Kill a Mockingbird" author="Harper Lee" />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
