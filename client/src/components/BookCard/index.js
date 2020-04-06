import React from "react";

function BookCard(props){
  return(
  <div className="col s12 m7">
    <h2 className="header">{props.volumeInfo.title}</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src={props.volumeInfo.imageLinks.thumbnail}></img>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{props.volumeInfo.description}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BookCard;