import React from "react";

import "./BooksList.scss";

export default function BooksList({ books }) {
  return (
    <div
      className="booksList"
      style={{
        display: "grid",
        gridAutoFlow: "row",
        gridGap: 20,
        padding: 20,
        background: "#f9f9f9",
      }}
    >
      {books && books.map((book, index) => {
        return (
          <div
            key={index}
            style={{
              borderLeft: "3px solid #f5a640",
              borderTop: "1px solid #f9f9f9",
              borderBottom: "1px solid #f9f9f9",
              borderRight: "1px solid #f9f9f9",
              borderRadius: 4,
              padding: 10,
              background: "#ffffff",
            }}
          >
            <p style={{ margin: 0, color: "#607289", marginBottom: 4 }}>
              <b>{book.volumeInfo.title}</b>
            </p>
            <p
              style={{
                margin: 0,
                color: "#6c8096",
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              Author: {book.volumeInfo.authors[0]}
            </p>
            <p
              style={{
                margin: 0,
                color: "#6c8096",
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              Publisher: {book.volumeInfo.publisher}
            </p>
            <p style={{ margin: 0, color: "#6c8096", fontSize: 14 }}>
              Published Date: {book.volumeInfo.publishedDate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
