import React from "react";
import Editor from "./components/Editor/Editor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
