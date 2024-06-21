import All from "@components/All";
import Selected from "@components/Selected";
import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./App.less";

export const App = (): JSX.Element => (
  <div className="componentWrapper">
    <BrowserRouter>
      <nav className="routingWrapper">
        <Link to="/all">All Countries</Link>
        <Link to="/selected">Selected Countries</Link>
      </nav>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/selected" element={<Selected />} />
      </Routes>
    </BrowserRouter>
  </div>
);
