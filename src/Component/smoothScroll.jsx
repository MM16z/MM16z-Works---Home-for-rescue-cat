import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// var overscrollOption = {
//   enable: true,
//   effect: "",
//   damping: 0.05,
// };
var options = {
  damping: 0.05,
  renderByPixels: true,
  //   plugin: {
  //     overscroll: { ...overscrollOption },
  //   },
};

const Scroll = () => {
  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin);
    const scroll = Scrollbar.init(document.querySelector("#Homepage"), options);
  }, []);
  return null;
};

export default Scroll;
