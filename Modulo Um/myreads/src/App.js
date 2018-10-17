import React from "react";
import "./App.css";
import BooksList from "./wrappers/BooksList";
import { Route } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";

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
