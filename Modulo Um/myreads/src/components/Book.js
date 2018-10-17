import React, { Component } from "react";

class Book extends Component {
  state = {
    shelf: ""
  };
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
    const bookHasShelf = shelf => (shelf !== undefined ? shelf : "move");
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={bookHasShelf(shelf)}
          onChange={event => handleChange(bookID, event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Book;
