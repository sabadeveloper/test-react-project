import pantera from "./pantera.jpg";
import lion from "./lion.jpg";
import { Route, Switch, Link, useHistory } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#DE4929" }}>
        ჟანრების ჩამონათვალი
      </h1>
      ;
      <div className="filmebi-div">
        <div className="fantastika">
          <Link
            to="/movies/fantastika"
            className="fanjumanji"
            style={{ textDecoration: "none", color: "white" }}
          >
            ფანტასტიკა
          </Link>
        </div>
        <br />
        <div className="drama">
          <Link
            to="/movies/drama"
            className="dramatitaniki"
            style={{ textDecoration: "none", color: "white" }}
          >
            დრამა
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;
