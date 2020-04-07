import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

const useForceUpdate = () => useState()[1];

function Search(){
  const forceUpdate = useForceUpdate();
  const [search, setSearch] = useState("");
  const [searchResults, setResults] = useState("");
  const [start, setStart] = useState(); // start index for api call
  const [numItems, setNumItems] = useState(20);  // number of items returned in api call: 10min-40max
  const [totalItems, setTotalItems] = useState(0);  // total items to paginate through in google api

  useEffect(()=>{
    if(search === "" || search === undefined){
      //may need to set start to -1 or something here to insure value changes when search is submiting
      return;
    }
    API.search(search, start, numItems).then(res => {
      const {data} = res;
      console.log(data);      
      console.log(data.totalItems);
      setTotalItems(data.totalItems);
      setResults(data);
    });
  }, [start]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    //reset pagination and invoke useEffect
    setStart(0);
    forceUpdate();
  };

  const mapResults = () => {
    if(searchResults){
      const {items} = searchResults;
      console.log(items);
      const itemMap = items.map(i => {
        return(
          <li key={i.id}>
            <BookCard {...i} />
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
        setStart(start - numItems);
      }
    }
    else if(id === "next"){
      if(start < totalItems){
        setStart(start + numItems);
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
      <div>
        <button className="btn" id="prev" onClick={(event)=>handlePagination(event)}>Prev</button>
        <span>{(start+1)} - {start+numItems} of ({totalItems})</span>
        <button className="btn" id="next" onClick={(event)=>handlePagination(event)}>Next</button>
      </div>
    </div>
  );
};

export default Search;