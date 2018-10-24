import React from "react";
import { Button, SelectMenu } from "evergreen-ui";
import { DragSource } from "react-dnd";
import _ from "lodash";

const bookSource = {
  beginDrag(props) {
    return props.book;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(
      props.book,
      _.camelCase(monitor.getDropResult().title)
    );
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

function Book(props) {
  const { book, handleChange, isDragging, connectDragSource } = props;
  const bookHasImageLink = book =>
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : null;
  const opacity = isDragging ? 0 : 1;
  return connectDragSource(
    <div className="book" style={{ opacity }}>
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookHasImageLink(book)})`
          }}
        />
        <BookShelfChanger handleChange={handleChange} book={book} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}

function BookShelfChanger(props) {
  const { book, handleChange } = props;
  const bookHasShelf = shelf => (shelf !== undefined ? shelf : "none");
  return (
    <div className="book-shelf-changer">
      <SelectMenu
        hasFilter={false}
        height={180}
        width={160}
        title="Move to ..."
        options={[
          { label: "Currently Reading", value: "currentlyReading" },
          { label: "Want to Read", value: "wantToRead" },
          { label: "Read", value: "read" },
          { label: "None", value: "none" }
        ]}
        selected={bookHasShelf(book.shelf)}
        onSelect={item => handleChange(book, item.value)}
      >
        <Button style={{ opacity: 0 }} />
      </SelectMenu>
    </div>
  );
}

export default DragSource("book", bookSource, collect)(Book);
