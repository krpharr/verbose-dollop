import React from "react";
import "./style.css";

function Footer(){
  return(
    <footer className="page-footer blue darken-2">
      <div className="container">
        <div className="row links">
          <div>
            <a href="https://www.linkedin.com/in/kennon-p-064994190/" target="_blank" rel="noopener noreferrer" alt="linkedin: krpharr">
              <img src="/assets/images/LI-In-Bug.png" alt="linkedin logo"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/krpharr" target="_blank" rel="noopener noreferrer" alt="github: krpharr">
              <img src="/assets/images/GitHub-Mark-32px.png" alt="github logo"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright red lighten-1">
        <div className="container center">
          © 2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;