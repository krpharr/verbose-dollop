import React from "react";
import API from "../../utils/API";
import "./style.css";

function BookCard(props){

  const handleCardButton = (event) => {
    if(props.type === "save"){
      API.saveBook(props).then(res => {
        document.getElementById(props.googleId).disabled = true;
        document.getElementById(props.googleId).textContent = "Saved";
      });  
    }else if(props.type === "delete"){
      API.deleteBook(props._id).then(res => {
        document.getElementById(props.googleId).disabled = true;
        document.getElementById(props.googleId).textContent = "Deleted";
      });
    }
  };

  return(
  <div className="col s12 m7">
    <div className="header-container">
      <h2 className="header">{props.title}</h2>
      <button 
        className="btn save-btn" 
        id={props.googleId} 
        onClick={(event)=> handleCardButton(event)}
        disabled={props.saved === true && props.type === "save" ? true : false}
        >
        {props.type === "save" ? "Save" : "Delete"}
      </button>     
    </div>
    <div className="card horizontal">
      <div className="card-image">
        <img src={props.image} alt="book cover"></img>
      </div>
      {/* <span className="activator">
          <i className="material-icons right">more_vert</i>
      </span>        */}

      <div className="card-stacked">
        <div className="card-content">
        <span className="card-title grey-text text-darken-4">{props.title}</span>
          <ul>
            {props.authors.map((a,i) => {
              return(
                <li key={i}>{a}</li>
              );
            })}
          </ul>
        </div>
        <div className="card-content">
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a href={props.link} target="_blank" rel="noopener noreferrer">View at Google Books</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BookCard;