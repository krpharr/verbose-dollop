import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

function Saved(){

  const [saved, setSaved] = useState();

  useEffect(() => {
    API.getBooks().then(res => {
      console.log(res.data);
      setSaved(res.data);
    });
   }, [])

  const getSavedBooks = () => {
    API.getBooks().then(res => {
      console.log(res.data);
      setSaved(res.data);
    });
  };

  const mapSavedBooks = () => {
    if(saved === undefined)return;
    const savedMap = saved.map(book => {
      return(
        <li key={book.googleId}>
          <BookCard {...book} type="delete" />
        </li>
      );
    });
    return savedMap;
  };

  return(
    <div className="container">
      <h1>Saved</h1>
      <ul>
        {mapSavedBooks()}
      </ul>
    </div>
  );
};

export default Saved;