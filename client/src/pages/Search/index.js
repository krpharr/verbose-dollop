import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
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
    console.log("search:", search);
    if(search === "")return;
 
    API.search(search, start, numItems).then(res => {
      const {data} = res;
      console.log(data);      
      console.log(data.totalItems);
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
    console.log(search);
    setStart(0);
    querySearch();
  };

  const mapResults = () => {
    if(searchResults !== undefined){
      console.log("searchResults",searchResults, typeof searchResults)
      const {items} = searchResults;
      console.log(items);
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
    console.log(event.target.id);
    const id = event.target.id;
    if(id === "prev"){
      if(start > 0){
        let n = start - numItems;
        setStart(n);
        // querySearch();
      }
    }
    else if(id === "next"){
      if(start < totalItems){
        let n = start + numItems;
        // console.log("n:", n, typeof n);
        setStart(n);
        // console.log("start:", start, typeof start);
        // querySearch();
      }
    }
  };

  return(
    <div className="container">
      <h1>Search</h1>
      <form>
        <input 
          type="text"
          name="search"
          onChange={handleInputChange}
        >
        </input>
        <button 
          type="submit"
          onClick={handleSubmit}
        >Search
        </button>
      </form>
      <ul>
        {mapResults()}
      </ul>
      <div style={searchResults === undefined ? {display: "none"} : {display: "block"}}>
        <button className="btn" id="prev" onClick={(event)=>handlePagination(event)}>Prev</button>
        <span>{(start+1)} - {start+numItems} of ({totalItems})</span>
        <button className="btn" id="next" onClick={(event)=>handlePagination(event)}>Next</button>
      </div>
    </div>
  );
};

export default Search;