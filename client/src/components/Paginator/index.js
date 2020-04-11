import React from "react";
import "./style.css";

function Paginator(props){
  return(
    <div className="paginator" style={props.searchResults === undefined ? {display: "none"} : {display: "block"}}>
      <button className="btn" id="prev" onClick={(event)=>props.handlePagination(event)}>Prev</button>
      <span>{(props.start+1)} - {props.start+props.numItems} of ({props.totalItems})</span>
      <button className="btn" id="next" onClick={(event)=>props.handlePagination(event)}>Next</button>
    </div>
  );
};

export default Paginator;