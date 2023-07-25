import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Movies from "./components/Movies";
import CompanyDetails from "./components/CompanyDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/aboutcompany" element={<CompanyDetails />} />
    </Routes>
  );
}

export default App;
