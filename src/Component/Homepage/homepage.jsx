import "./homepage.css";
import React, { useRef } from "react";
import Fristsection from "./Components/fristsection";
import Scroll from "../smoothScroll";
import Secondsection from "./Components/secondsection";

function Homepage() {
  return (
    <div id="Homepage">
      <Scroll />
      <Fristsection />
      <Secondsection />
    </div>
  );
}

export default Homepage;
