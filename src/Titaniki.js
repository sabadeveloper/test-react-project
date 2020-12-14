import titaniki from "./titaniki.jpg";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import "./jumanjititaniki.scss";

const Titaniki = () => {
  return (
    <div>
      <img src={titaniki} style={{ width: "325px", height: "425px" }} />
      <div className="titanikidiv">
        <p className="titanikip">
          84 წლის შემდეგ, 101 წლის როუზ დე უიტ ბუქეითერი შვილიშვილებს საოცარი
          სიყვარულის ისტორიას უყვება.{" "}
        </p>
      </div>
    </div>
  );
};

export default Titaniki;
