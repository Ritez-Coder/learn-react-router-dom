import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HookDetail from "./pages/HookDetail";
import Hooks from "./pages/Hooks";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/hooks/:hookID" element={<HookDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
