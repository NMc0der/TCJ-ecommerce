import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
    </div>
  );
}

export default App;
