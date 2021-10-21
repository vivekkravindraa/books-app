import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import atom from "../assets/atom.png";
import BooksList from "./BooksList";
import search from "../assets/search.png";
import { getBooks } from "../actions";

import "./Books.scss";

export default function Books() {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.books);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    dispatch(getBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBooks(booksList)
  }, [booksList])

  const handleSearch = (e) => {
    console.log(e.target.value);
    e.persist();
    setBooks(
      booksList.filter(
        (book) =>
          book.volumeInfo.title
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) >= 0
      )
    );
  };

  return (
    <div style={{ background: "#f9f9f9" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          height: 49,
          background: "#ffffff",
        }}
      >
        <img src={atom} alt="no_image" height={32} style={{ margin: 8 }} />
        <p
          style={{ margin: 0, fontWeight: 500, fontSize: 28, color: "#2751bf" }}
        >
          atom
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "20px 20px 20px 20px",
          boxShadow:
            "6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55) !important",
        }}
      >
        <p style={{ fontSize: 26, fontWeight: 600, margin: 0 }}>Books</p>
        <button
          style={{
            fontSize: 14,
            background: "#2751bf",
            color: "#ffffff",
            padding: 8,
            border: "none",
            borderRadius: 4,
          }}
        >
          Create New Book
        </button>
      </div>
      <div style={{ padding: "20px 0 0 20px" }}>
        <div
          className="searchBooks"
          style={{
            display: "grid",
            gridAutoFlow: "row",
            position: "relative",
            marginRight: 25,
          }}
        >
          <div style={{ position: "absolute", bottom: 6 }}>
            <img src={search} alt="no_image" height={16} />
          </div>
          <input
            type="text"
            style={{
              height: 26,
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              background: "#f9f9f9",
              outline: 0,
              paddingLeft: 25
            }}
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "20px 20px 0 20px",
        }}
      >
        <p style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>All Books</p>
      </div>
      <BooksList books={books} />
    </div>
  );
}
