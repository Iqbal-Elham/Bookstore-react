import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Navbar />} >
        <Route index element={<Books />} />
        <Route path="/categories" element={<Categories />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
