import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Search(){
  const [search, setSearch] = useState("");
  const [searchResults, setResults] = useState();

  useEffect(()=>{
    if(search !== ""){    
        API.search(search).then(res => {
        const {data} = res;
        setResults(data)
      });
    }
  }, [search]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return(
    <div>
      <h1>Search</h1>
      <input 
        type="text"
        onChange={handleInputChange}
      >
      </input>
      <div>
        {searchResults}
      </div>
    </div>
  );
};

export default Search;