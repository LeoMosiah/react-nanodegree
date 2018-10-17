import React from "react";
import BookShelfChanger from "./BookShelfChanger";

function Book(props) {
  const { title, author, coverURL, id, shelf } = props;
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
        <BookShelfChanger bookID={id} shelf={shelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

export default Book;
