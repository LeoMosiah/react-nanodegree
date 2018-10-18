import React, { Component } from "react";

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
    const bookHasShelf = shelf => (shelf !== undefined ? shelf : "none");
      return <div className="book-shelf-changer">
          <select
              defaultValue={bookHasShelf(shelf)}
              onChange={event => handleChange(bookID, event.target.value)}
          >
              <option value="move" disabled label="Move to..."/>
              <option value="currentlyReading" label="Currently Reading"/>
              <option value="wantToRead" label="Want to Read"/>
              <option value="read" label="Read"/>
              <option value="none" label="None"/>
          </select>
      </div>;
  }
}

export default Book;
