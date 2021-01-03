import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import AdSense from 'react-adsense';

const Navigation = () => {
  console.log("====================================");
  console.log(process.env.REACT_APP_API_URI);
  console.log("====================================");
  return (
    <Router>
      <AdSense.Google
        client='ca-pub-7292810486004926'
        slot='7806394673'
      />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list">
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
