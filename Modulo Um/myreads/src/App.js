import React from "react";
import "./App.css";
import BooksList from "./pages/BooksList";
import { Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BooksList} />
        <Route path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
