import React from "react";
import Book from "../components/Book";
import _ from "lodash";
import { DropTarget } from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    book: monitor.getItem()
  };
}

function BookShelf(props) {
  const {
    shelfTitle,
    shelfBooks,
    handleChange,
    handleDrop,
    connectDropTarget,
    hovered,
    book
  } = props;
  return connectDropTarget(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks
            .filter(book => book.shelf === _.camelCase(shelfTitle))
            .map(book => (
              <Book
                key={book.id}
                book={book}
                handleChange={handleChange}
                handleDrop={handleDrop}
              />
            ))}
        </ol>
      </div>
    </div>
  );
}

export default DropTarget("book", {}, collect)(BookShelf);
