import React from "react";
import { BrowserRouter as Router, 
         Route, 
        //  Switch 
        } from "react-router-dom";
import Header from "./components/Header";
import Headlines from "./pages/Headlines";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path = "/" component = {Headlines} />
    </div>
  </Router>
);

export default App;
