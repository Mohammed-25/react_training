import React from "react";
import User from "./component/user";
import Library from "./component/Library";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Landmarks from "./component/landmarks";

function App() {
  return (
    <>
      <Navbar />
      <h1>Welcome to the App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/User" element={<User />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/landmarks" element={<Landmarks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
