import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

function Saved(){

  const [saved, setSaved] = useState();

  useEffect(() => {
    API.getBooks().then(res => {
      setSaved(res.data);
    });
   }, [])

  const mapSavedBooks = () => {
    if(saved === undefined)return;
    const savedMap = saved.map(book => {
      const keyVal = book.googleId === undefined ? book._id : book.googleId;
      return(
        <li key={keyVal}>
          <BookCard {...book} type="delete" />
        </li>
      );
    });
    return savedMap;
  };

  return(
    <main>
      <div className="container">
        <h1>Saved Books</h1>
        <ul>
          {mapSavedBooks()}
        </ul>
      </div>
    </main>
  );
};

export default Saved;