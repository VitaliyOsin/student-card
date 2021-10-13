import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import CreateCard from "./page/createCard";
import Card from "./page/card";

function App() {
  return (
    <>
      <Switch>
        <Route path="/create" component={CreateCard} />
        <Route path="/" exact component={Card} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
