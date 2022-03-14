import React from "react";
import booksRead from "../db/booksRead.json";

export default function Books() {
  return (
    <div>
      <h1>Dina lästa böcker</h1>
      {booksRead.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <img src={book.image} />
        </div>
      ))}
    </div>
  );
}
