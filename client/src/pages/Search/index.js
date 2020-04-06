import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

function Search(){
  const [search, setSearch] = useState("");
  const [searchResults, setResults] = useState("");
  const [pagination, setPagination] = useState({
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
    console.log(search);
    API.search(search, pagination.start, pagination.max).then(res => {
      const {data} = res;
      console.log(data);
      setResults(data);
    });
  };

  const mapResults = () => {
    if(searchResults){
      const {items} = searchResults;
      console.log(items);
      const itemMap = items.map(i => {
        return(
          <li key={i.id}>
            <BookCard {...i} />
            {/* <div>{i.volumeInfo.title}</div> */}
          </li>
        )
      });
      return itemMap;
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
      <ul>
        {mapResults()}
      </ul>
    </div>
  );
};

export default Search;