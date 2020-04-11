import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch"
import 'materialize-css/dist/css/materialize.min.css';
// import './dev/materialize.css';
import M from  'materialize-css/dist/js/materialize.min.js';

class App extends React.Component {
  
  componentDidMount() {
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {draggable: true});
  }

  render(){
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <NoMatch />
        </Switch>
      </Router>
    );
  }
}

export default App;
