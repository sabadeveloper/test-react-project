import React, { Fragment } from "react";
import style from "./mov.module.css";
import { Route, Switch, Link, useHistory } from "react-dom";
import lion from "./lion.jpg";

export class Mtavari extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Motxovnadi = () => {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        <h1>ყველაზე მოთხოვნადი</h1>;
      </div>
    );
  };

  Lion = () => {
    return (
      <div>
        <img src={lion} alt="Logo" />;
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        {this.Motxovnadi}
        {this.Lion}
      </Fragment>
    );
  }
}
