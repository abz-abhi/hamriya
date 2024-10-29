import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Discription from "./components/discription";

function App() {
  return (
    <div>
      <Navbar />
      <Discription />
      <items />
    </div>
  );
}

export default App;
