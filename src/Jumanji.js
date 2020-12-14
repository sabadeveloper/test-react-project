import jumanji from "./jumnaji.jpg";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import "./jumanjititaniki.scss";

const Jumanji = () => {
  return (
    <div>
      <img src={jumanji} style={{ width: "325px", height: "425px" }} />
      <div
        style={{
          borderStyle: "double",
          display: "inline-block",

          backgroundColor: "yellow",
          position: "absolute",
          left: "500px",
          top: "300px",
        }}
      >
        <p className="jumanjip">
          მოკლე აღწერა:ჯუმანჯის სახიფათო სამყაროში ოთხი მოზარდი აღმოჩნდება. მათ
          ელით ბრძოლა მარტორქებთან და შავ მაბებთან. ყველა ნაბიჯზე უამრავი
          ხაფანგი და გამოცანაა.{" "}
        </p>
      </div>
    </div>
  );
};

export default Jumanji;
