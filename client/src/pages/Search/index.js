import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Search(){
  const [search, setSearch] = useState("");
  const [searchResults, setResults] = useState("");
  const [page, setPage] = useState({
    pageNumber: 0,
    numPages: 1,
    start: 0,
    max: 20
  });

  // useEffect(()=>{
  //   if(search !== ""){    
  //       API.search(search).then(res => {
  //       const {data} = res;
  //       setResults(data)
  //     });
  //   }
  // }, [search]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.search(search, page.start, page.max).then(res => {
      const {data} = res;
      console.log(data);
      setResults(data);
    });
  };

  const mapResults = () => {
    if(searchResults.length > 0){
      const {items} = searchResults;
      console.log(searchResults.items);
    }
  };

  return(
    <div>
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
      <div>
        {/* {searchResults} */}
      </div>
    </div>
  );
};

export default Search;