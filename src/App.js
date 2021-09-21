import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./view/home";
import TodoForm from "./view/todoForm";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/newtodo">
            <TodoForm />
          </Route>
          <Route path="/todo/:id">
            <TodoForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}