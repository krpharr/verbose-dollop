import React from "react";
import API from "../../utils/API";
import "./style.css";

function BookCard(props){

  const thumbnail = props.volumeInfo.imageLinks === undefined ? "/assets/images/unavailable.png" : props.volumeInfo.imageLinks.thumbnail;
  const description = props.volumeInfo.description === undefined ? "Description unavailable." : props.volumeInfo.description;
  const bookObj = {
      googleId: props.id,
      title: props.volumeInfo.title,
      authors: props.volumeInfo.authors,
      description: description,
      image: thumbnail,
      link: props.volumeInfo.canonicalVolumeLink
  };

  const handleCardButton = (event) => {
    console.log("handleCardButton: ", props.id);
    console.log(event.target);
    API.saveBook(bookObj).then(res => {
      console.log(res);
      document.getElementById(props.id).disabled = true;
      document.getElementById(props.id).textContent = "Saved";
    });
   };

  return(
  <div className="col s12 m7">
    <div className="header-container">
      <h2 className="header">{bookObj.title}</h2>
      <button className="btn save-btn" id={props.id} onClick={(event)=> handleCardButton(event)}>Save</button>
    </div>
    <div className="card horizontal">
      <div className="card-image">
        <img src={bookObj.image} alt="image not available"></img>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <ul>
            {bookObj.authors.map((a,i) => {
              return(
                <li key={i}>{a}</li>
              );
            })}
          </ul>
        </div>
        <div className="card-content">
          <p>{bookObj.description}</p>
        </div>
        <div className="card-action">
          <a href={bookObj.link} target="_blank" rel="noopener noreferrer">View at Google Books</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BookCard;