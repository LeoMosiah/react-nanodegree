import React, { Component } from "react";
import BookShelfChanger from "../atoms/BookShelfChanger";

class Book extends Component {
  render() {
    const { title, author, coverURL } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${coverURL})`
            }}
          />
          <BookShelfChanger />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

export default Book;
