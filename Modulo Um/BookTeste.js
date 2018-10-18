import React, { Component } from "react";
import { SelectMenu, Button } from "evergreen-ui";
import _ from "lodash";

class Book extends Component {
  render() {
    const { title, author, coverURL, id, handleChange, shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${coverURL})`
            }}
          />
          <BookShelfChanger
            bookID={id}
            handleChange={handleChange}
            shelf={shelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

class BookShelfChanger extends Component {
  render() {
    const { bookID, handleChange, shelf } = this.props;
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
          selected={bookHasShelf(shelf)}
          onSelect={item => handleChange(bookID, _.camelCase(item.value))}
        >
          <Button className="hidden" />
        </SelectMenu>
      </div>
    );
  }
}

export default Book;
