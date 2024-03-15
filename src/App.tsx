import { useState } from "react";
import "./App.css";
import Navbar from "@/scenes/navbar/Navigation";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
    </>
  );
}

export default App;
