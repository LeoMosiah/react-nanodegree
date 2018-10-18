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
    componentDidUpdate(prevProps,prevState){
        if(prevState.books !== this.state.books){
            this.setState({
                books:this.state.books
            })
        }
    }
    handleChange = (bookId, shelf) => {
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
    };
  render() {
      const {books}=this.state
    return (
      <div className="app">
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
