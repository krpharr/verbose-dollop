import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Search(){
  const [search, setSearch] = useState("");

  useEffect(()=>{
    if(search !== ""){    
        API.search(search).then(res => {
        const {data} = res;
        console.log(data);
      });
    }
  }, [search]);

  return(
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default Search;