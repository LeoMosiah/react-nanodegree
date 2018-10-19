import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";
import Header from "../components/Header"

class BooksList extends Component {
  render() {
    const { books,handleChange } = this.props;
    return (
      <div className="list-books">
            <Header title="My Reads"/>
        <div className="list-books-content">
          <BookShelf
            title="Currently Reading"
            books={books}
            handleChange={handleChange}
          />
          <BookShelf
            title="Want To Read"
            books={books}
            handleChange={handleChange}
          />
          <BookShelf
            title="Read"
            books={books}
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
