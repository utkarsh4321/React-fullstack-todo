/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from "../components/BaseCompenents/Modal";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Todo from "../components/Todo";

export default function Main() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex justify-center items-center h-full flex-auto content-center">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
