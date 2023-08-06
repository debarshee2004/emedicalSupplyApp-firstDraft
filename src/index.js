import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TabApp from "./TabApp";
import DesktopApp from "./DesktopApp";
import './index.css'

const determineComponentToRender = () => {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 768) {
    return <App />;
  } else if (viewportWidth >= 768 && viewportWidth < 1024) {
    return <TabApp />;
  } else {
    return <DesktopApp />;
  }
};

ReactDOM.render(determineComponentToRender(), document.getElementById("root"));
