import logo from "./logo.svg";
import "./App.css";
import { Movie } from "./Movies";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import style from "./mov.module.css";
import React, { Fragment } from "react";
import Jumanji from "./Jumanji";
import Titaniki from "./Titaniki";
import lion from "./lion.jpg";
import avangers from "./avangers.jpg";
import pantera from "./pantera.jpg";
import Movies from "./Test";

const Motxovnadi = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>ყველაზე მოთხოვნადი</h1>;
      <div className="main-div">
        <div className="lion">
          <img src={lion} style={{ width: "150px", height: "250px" }} />
        </div>
        <div className="lion">
          <img src={avangers} style={{ width: "150px", height: "250px" }} />
        </div>
        <div className="lion">
          <img src={pantera} style={{ width: "150px", height: "250px" }} />
        </div>
        <div className="lion">
          <img src={lion} style={{ width: "150px", height: "250px" }} />
        </div>
        <div className="lion">
          <img src={avangers} style={{ width: "150px", height: "250px" }} />
        </div>
        <div className="lion">
          <img src={pantera} style={{ width: "150px", height: "250px" }} />
        </div>
        <div className="lion">
          <img src={lion} style={{ width: "150px", height: "250px" }} />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h2 className="footer">
        საკონტაქტო მონაცემები : saba.kosashvili.1@btu.edu.ge
      </h2>
    </div>
  );
};

const Error = () => {
  return <h1 style={{ marginBottom: "370px" }}>404 Page Not Found</h1>;
};
function App() {
  return (
    <div className="App">
      <Movie />
      <Switch>
        <Route path="/" exact component={Motxovnadi} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/fantastika" component={Jumanji} />
        <Route path="/movies/drama" component={Titaniki} />
        <Route path="*" component={Error} />
      </Switch>

      <hr />

      <Footer />
    </div>
  );
}

export default App;
