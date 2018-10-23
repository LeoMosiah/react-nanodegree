import React from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";

function BooksList(props) {
  const { books, handleChange } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          shelfTitle="Currently Reading"
          shelfBooks={books}
          handleChange={handleChange}
        />
        <BookShelf
          shelfTitle="Want To Read"
          shelfBooks={books}
          handleChange={handleChange}
        />
        <BookShelf
          shelfTitle="Read"
          shelfBooks={books}
          handleChange={handleChange}
        />
      </div>
      <OpenSearch />
    </div>
  );
}

const OpenSearch = () => {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
};

export default BooksList;
