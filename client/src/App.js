import React from "react";
import { BrowserRouter as Router, 
         Route, 
         Switch } from "react-router-dom";
import Header from "./components/Header";
import Headlines from "./pages/Headlines";

const App = () => (
  <div>
    <Header />
    <Headlines />
  </div>
);

export default App;
