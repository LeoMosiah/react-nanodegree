import React, { Component } from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI"

class SearchBooks extends Component {
    state = {
        input : "",
        books : []
    }
    updateQuery = (input) =>{
        this.setState(() =>({
            input:input.trim()
        }))
    }
    search = book => {
        BooksAPI.search(book).then(book => {
            this.setState(currentState => ({
                books: currentState.books.concat([book])
            }));
        });
    };
  render() {
      return <div className="search-books">
          <div className="search-books-bar">
              <Link
                  className="close-search"
                  to="/"
              >
                  Close
              </Link>
              <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author"
                         value={this.state.input}
                         onChange={(event) =>(this.updateQuery(event.target.value))}
                  />
              </div>
          </div>
          <div className="search-books-results">
              <ol className="books-grid"/>
              <li>{console.log(BooksAPI.search("Art").then(res => res))}</li>
          </div>
      </div>;
  }
}

export default SearchBooks;
