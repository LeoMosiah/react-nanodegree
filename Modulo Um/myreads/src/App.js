import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import BooksList from "./pages/BooksList";
import SearchBooks from "./pages/SearchBooks";
import * as BooksAPI from "./utils/BooksAPI";

class BooksApp extends React.Component {
    state = {
        books: []
    };
    async componentDidMount() {
        this.setState({
            books: await BooksAPI.getAll()
        });
    }
    handleChange = async (bookId, shelf) => {
        BooksAPI.update({ id: bookId }, shelf);
            this.setState({
                books: this.state.books.filter(book => book.id !== bookId).concat( await BooksAPI.get(bookId))
            });
    };
  render() {
      const {books}=this.state;
    return (
      <div className="app">
          {console.log(books)}
          <Route exact path="/" render={()=>(
              <BooksList books={books} handleChange={this.handleChange} />
          )} />
          <Route path="/search" render={()=>(
              <SearchBooks books={books} handleChange={this.handleChange}/>
          )}/>
      </div>
    );
  }
}

export default BooksApp;
