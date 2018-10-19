import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class BooksList extends Component {
  render() {
    const { books, handleChange } = this.props;
    return (
      <div className="list-books">
        <Header title="My Reads" />
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
}

const OpenSearch = () => {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
};

export default BooksList;
