import React, { Fragment } from "react";
import style from "./mov.module.css";
import { Route, Switch, Link, useHistory } from "react-router-dom";

import image from "./movie.jpg";

export class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    let mtavari = (
      <div className={style.navbar}>
        <Link className={style.border} to="/">
          მთავარი
        </Link>
      </div>
    );
    let movies = (
      <div className={style.navbar}>
        <Link className={style.border} to="/movies">
          ფილმები
        </Link>
      </div>
    );

    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              textAlign: "center",
              display: "inline",
              color: "blue",
              marginTop: 0,
            }}
          >
            ყოველთვის კარგი ფილმები!
          </h1>
          <img
            style={{
              width: "13vh",
              height: "10vh",
              display: "inline",
            }}
            src={image}
          />
        </div>

        <hr />
        {mtavari}
        {movies}
        <br />
        <br />
      </Fragment>
    );
  }
}
