import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Laminat_app from "./Laminat_app";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Laminat_app />} exact></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
