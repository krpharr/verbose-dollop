import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import Paginator from "../../components/Paginator";
import API from "../../utils/API";

function Search(){
  const [search, setSearch] = useState("");
  const [searchResults, setResults] = useState();
  const [start, setStart] = useState(0); // start index for api call
  const [numItems, ] = useState(20);  // number of items returned in api call: 10min-40max
  const [totalItems, setTotalItems] = useState(0);  // total items to paginate through in google api
  const [saved, setSaved] = useState();

  useEffect(() => {
   API.getBooks().then(res => {
    const savedIds = res.data.map(book => {
      return book.googleId;
    });
    setSaved(savedIds);
   }); 
   querySearch();
   // eslint-disable-next-line
  }, [start])

  const querySearch = () => {
    if(search === "")return;
 
    API.search(search, start, numItems).then(res => {
      const {data} = res;
      setTotalItems(data.totalItems);
      setResults(data);
    });
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStart(0);
    querySearch();
  };

  const mapResults = () => {
    if(searchResults !== undefined){
      const {items} = searchResults;
      const itemMap = items.map(i => {

      const authors = i.volumeInfo.authors === undefined ? [] : i.volumeInfo.authors;
      const thumbnail = i.volumeInfo.imageLinks === undefined ? "/assets/images/unavailable.png" : i.volumeInfo.imageLinks.thumbnail;
      const description = i.volumeInfo.description === undefined ? "Description unavailable." : i.volumeInfo.description;
              
      const bookObj = {
        googleId: i.id,
        title: i.volumeInfo.title,
        authors: authors,
        description: description,
        image: thumbnail,
        link: i.volumeInfo.canonicalVolumeLink
      };

        return(
          <li key={i.id}>
            <BookCard {...bookObj} type="save" saved={saved.includes(i.id) ? true : false}/>
          </li>
        )
      });
      return itemMap;
    }
  };

  const handlePagination = (event) => {
    const id = event.target.id;
    if(id === "prev"){
      if(start > 0){
        let n = start - numItems;
        setStart(n);
      }
    }
    else if(id === "next"){
      if(start < totalItems){
        let n = start + numItems;
        setStart(n);
      }
    }
  };

  return(
    <main>
      <div className="container">
        <h1>Search</h1>
        <div className="right">
          <Paginator 
            searchResults={searchResults} 
            start={start} numItems={numItems} 
            totalItems={totalItems} 
            handlePagination={handlePagination}
          />
        </div>
        <form>
          <input 
            type="text"
            name="search"
            onChange={handleInputChange}
          >
          </input>
          <div>
          <button 
            className="btn"
            type="submit"
            onClick={handleSubmit}
          >Search
          </button>
          </div>
        </form>
        <ul>
          {mapResults()}
        </ul>
        <div className="center">
          <Paginator 
            searchResults={searchResults} 
            start={start} numItems={numItems} 
            totalItems={totalItems} 
            handlePagination={handlePagination}
          />
        </div>
      </div>
    </main>
  );
};

export default Search;