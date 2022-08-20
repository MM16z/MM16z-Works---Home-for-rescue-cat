import "./fristsection.css";

function Fristsection() {
  return (
    <div className="home-frist-section">
      <div className="canvas-line">
        <span id="canvasid1"></span>
        <span id="canvasid2"></span>
        <span id="canvasid5"></span>
      </div>
      <div className="buttons">
        <div id="ourcats">
          <span id="ourcats-o-letter">O</span>urcats
        </div>
        <div id="aboutus">
          <span id="aboutus-a-letter">A</span>bout Us
        </div>
        <div id="contact">Contact Us</div>
      </div>
      <div className="images">
        <div className="mainlogo-container">
          <img id="mainlogo" src="/logo.png"></img>
        </div>
      </div>
      <div className="texts">
        <div id="txtid1">
          WE <span>RESCUE</span>
        </div>
        <div id="txtid2">
          WE <span id="txtid2-2">HELP</span>
        </div>
        <div id="txtid3">
          WE <span id="txtid3-1">LOOK</span>
        </div>
        <div id="txtid4">
          New home <span id="txtid4-1">FOR</span> them
        </div>
        <div id="txtid5">2022/7/16, Chiang mai , Thailand</div>
        <div id="txtid6">2022/8/1, Nan, Thailand</div>
        <div id="txtid7">
          <p style={{ margin: "0", marginLeft: "-2vw" }}>DO :</p>
          {"{"}We do simple things. It's what humans call "help", We are a
          non-profit organization. But the thing we want is to "give them life".
          {"}"}
        </div>
      </div>
      <div className="backgrounds">
        <img id="background2" src="/bg4.jpg"></img>
        <img id="background3" src="/bg5.jpg"></img>
      </div>
    </div>
  );
}

export default Fristsection;
