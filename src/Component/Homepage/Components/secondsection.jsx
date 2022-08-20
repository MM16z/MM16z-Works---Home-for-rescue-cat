import "./secondsection.css";

import SimpleImageSlider from "react-simple-image-slider";
import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=pexels-kelvin-valerio-617278.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/982299/pexels-photo-982299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/978555/pexels-photo-978555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/1082255/pexels-photo-1082255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/236660/pexels-photo-236660.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/751050/pexels-photo-751050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Secondsection() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 500px) and (max-width: 599px)").matches
  );
  const [matches1, setMatches1] = useState(
    window.matchMedia("(min-width: 600px) and (max-width: 899px)").matches
  );
  const [matches2, setMatches2] = useState(
    window.matchMedia("(min-width: 0px) and (max-width: 425px)").matches
  );
  const [imgWidth, setimgWidth] = useState({
    width1: "",
    height1: "",
  });
  useEffect(() => {
    window
      .matchMedia("(min-width: 500px) and (max-width: 599px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    if (matches) {
      setimgWidth({ width1: "330px", height1: "230px" });
    } else {
      setimgWidth({ width1: "37vw", height1: "27vw" });
    }
  }, [matches]);
  useEffect(() => {
    window
      .matchMedia("(min-width: 600px) and (max-width: 899px)")
      .addEventListener("change", (e) => setMatches1(e.matches));
    if (matches1) {
      setimgWidth({ width1: "330px", height1: "230px" });
    }
  }, [matches1]);
  useEffect(() => {
    window
      .matchMedia("(min-width: 0px) and (max-width: 425px)")
      .addEventListener("change", (e) => setMatches2(e.matches));
    if (matches2) {
      setimgWidth({ width1: "80vw", height1: "60vw" });
    }
  }, []);

  return (
    <div className="home-second-section">
      <span id="canvasid4"></span>
      <div className="secoudsection-texts">
        <div id="secoudsection-textId1">Check our meow!</div>
        <div id="secoudsection-textId2">
          &#x2022; This project is not for commercial use; this is only for my
          personal work.
          <p style={{ margin: "0", paddingTop: "5px", paddingLeft: "20px" }}>
            &#x2022; Responsive soon.
          </p>
        </div>
      </div>
      <video
        id="video1"
        autoPlay
        muted
        loop
        poster="https://png.pngtree.com/png-clipart/20190924/original/pngtree-simple-linear-loading-creative-element-png-image_4860864.jpg"
      >
        <source src="/video1.mp4" type="video/mp4"></source>
        Your browser does not support the video player.
      </video>
      <div className="caticons">
        <img className="caticon" id="caticonId1" src="/icon2.png"></img>
        <img className="caticon" id="caticonId2" src="/icon2.png"></img>
        <img className="caticon" id="caticonId3" src="/icon2.png"></img>
        <img className="caticon" id="caticonId4" src="/icon2.png"></img>
        <img className="caticon" id="caticonId5" src="/icon2.png"></img>
        <img className="caticon" id="caticonId6" src="/icon2.png"></img>
        <img className="caticon" id="caticonId7" src="/icon2.png"></img>
        <img className="caticon" id="caticonId8" src="/icon2.png"></img>
        <img className="caticon" id="caticonId9" src="/icon2.png"></img>
      </div>
      <div className="images">
        <div className="images-slider-container">
          <SimpleImageSlider
            width={imgWidth.width1}
            height={imgWidth.height1}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{
              borderRadius: "80px",
              position: "absolute",
              bottom: "15vh",
              left: "4.25vw",
              zIndex: "2",
            }}
            autoPlay={true}
            autoPlayDelay={4.0}
          />
        </div>
      </div>
      <footer className="footer">
        <div id="footerId1">&#169; 2022 MM16z. All rights reserved."</div>
        <div id="footerId2"></div>
        <div id="footerId2-1">
          <span id="footerId2-2">MM16z</span>
        </div>
        <img id="footerId3" src="/icon3.png"></img>
        <div className="footertexts">
          <span>Home</span>
          <span>Ourcats</span>
          <span>Aboutus</span>
          <span>Contactus</span>
        </div>
        <div className="footerId4">
          <img id="" src="/facebook.png"></img>
          <img id="" src="/twitter.png"></img>
          <img id="" src="/instagram.png"></img>
          <img id="" src="/telegram.png"></img>
        </div>
      </footer>
    </div>
  );
}

export default Secondsection;
