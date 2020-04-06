import React from "react";
import "./style.css";

function BookCard(props){
  return(
  <div className="col s12 m7">
    <h2 className="header">{props.volumeInfo.title}</h2>
    <button className="save-btn">Save</button>
    <div className="card horizontal">
      <div className="card-image">
        <img src={props.volumeInfo.imageLinks.thumbnail}></img>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <ul>
            {props.volumeInfo.authors.map((a,i) => {
              return(
                <li key={i}>{a}</li>
              );
            })}
          </ul>
        </div>
        <div className="card-content">
          <p>{props.volumeInfo.description}</p>
        </div>
        <div className="card-action">
          <a href={props.volumeInfo.canonicalVolumeLink} target="_blank">View at Google Books</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BookCard;