import React, { Component } from "react";
import { SelectMenu, Button } from "evergreen-ui";
import _ from "lodash";

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
    const bookHasShelf = shelf =>
      shelf !== undefined ? _.startCase(shelf) : "None";
    return (
      <div className="book-shelf-changer">
        <SelectMenu
          hasFilter={false}
          hasTitle={false}
          height={170}
          width={150}
          title="Select name"
          options={[
            "Move to ...",
            "Currently Reading",
            "Want To Read",
            "Read",
            "None"
          ].map(label => ({ label, value: label }))}
          selected={bookHasShelf(book.shelf)}
          onSelect={item => handleChange(book, _.camelCase(item.value))}
        >
          <Button className="hidden" />
        </SelectMenu>
      </div>
    );
  }
}

export default Book;
