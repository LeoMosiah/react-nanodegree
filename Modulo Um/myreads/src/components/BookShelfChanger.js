import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";

class BookShelfChanger extends Component {
  handleChange = (bookId, shelf) =>{
    if(shelf !== "none"){
      BooksAPI.update({ id: bookId }, shelf).then(res => console.log(res))
    }
  }
  render() {
    const { bookID,shelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={shelf}
          onChange={event => this.handleChange(bookID, event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
