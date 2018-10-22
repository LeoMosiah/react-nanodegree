import React, { Component } from "react";
import { SelectMenu, Button } from "evergreen-ui";

class Book extends Component {
  render() {
    const { book, handleChange } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <BookShelfChanger handleChange={handleChange} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

class BookShelfChanger extends Component {
  render() {
    const { book, handleChange } = this.props;
    const bookHasShelf = shelf => (shelf !== undefined ? shelf : "none");
    return (
      <div className="book-shelf-changer">
        <SelectMenu
          hasFilter={false}
          height={180}
          width={160}
          title="Move to ..."
          options={[
            { label: "Currently Reading", value: "currentlyReading" },
            { label: "Want to Read", value: "wantToRead" },
            { label: "Read", value: "read" },
            { label: "None", value: "none" }
          ]}
          selected={bookHasShelf(book.shelf)}
          onSelect={item => handleChange(book, item.value)}
        >
          <Button style={{ opacity: 0 }} />
        </SelectMenu>
      </div>
    );
  }
}

export default Book;
