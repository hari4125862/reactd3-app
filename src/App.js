import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import './App.css';
import Extract from "./Extract";
import Denny from "./Components/Denny";
import Harry from "./Components/Harry";
import Ho from "./Components/Ho";
import Kay from "./Components/Kay";
import Love from "./Components/Love";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       React + D3

       <Route exact path="/Denny" component={Denny} />
          <Route exact path="/Harry" component={Harry} />
          <Route exact path="/Ho" component={Ho} />
          <Route exact path="/Kay" component={Kay} />
          <Route exact path="/Love" component={Love} />
<br/>

 <Link className="nav-link" to="/Denny">
 <button>Denny</button>
  </Link>
  <Link className="nav-link" to="/Harry">
 <button>Harry</button>
  </Link>
  <Link className="nav-link" to="/Ho">
 <button>Ho</button>
  </Link>
  <Link className="nav-link" to="/Kay">
 <button>Kay</button>
  </Link>
  <Link className="nav-link" to="/Love">
 <button>Love</button>
  </Link>
       {/* <Extract/> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
