import { useState } from "react";
import "./App.css";
import Navbar from "@/scenes/navbar/Navigation";

function App() {
  const [selectedPage, setSelectedPage] = useState("главная");
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
