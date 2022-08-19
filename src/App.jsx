import "./App.css";
import "./Component/fixedElements.css";
import Homepage from "./Component/Homepage/homepage";
import Ourcats from "./Component/Ourcats/ourcats";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="fixedElements">
        <div id="backgroundcolor"></div>
        <img id="menubtn" src="/homebtn.png"></img>
        <span id="navigateicon"></span>
        <img id="background1" src="/bg1.png"></img>
      </div>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/ourcats" element={<Ourcats />} />
        <Route path="*" element={<Navigate to="/homepage" replace />} />
      </Routes>
    </div>
  );
}

export default App;
