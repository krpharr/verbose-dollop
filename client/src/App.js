import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Book from "./pages/Book";
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
      <Route exact path="/book/:id" component={Book} />
    </Router>
  );
}

export default App;
