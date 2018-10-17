import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";

class BooksList extends Component {
  state = {
    books: []
  };
  async componentDidMount() {
    this.setState({
      books: await BooksAPI.getAll()
    });
  }
  handleChange = (bookId, shelf) => {
    if (shelf !== "none") {
      BooksAPI.update({ id: bookId }, shelf).then(() => {
        this.setState(prevState => ({
          books: prevState.books.map(book => {
            if (book.id === bookId) {
              book.shelf = shelf;
              return book;
            } else {
              return book;
            }
          })
        }));
      });
    }
  };
  render() {
    const { books } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            title="Currently Reading"
            books={books}
            handleChange={this.handleChange}
          />
          <BookShelf
            title="Want To Read"
            books={books}
            handleChange={this.handleChange}
          />
          <BookShelf
            title="Read"
            books={books}
            handleChange={this.handleChange}
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
