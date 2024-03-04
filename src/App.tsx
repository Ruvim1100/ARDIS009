import { useState } from "react";
import "./App.css";
import Navbar from "@/scenes/navbar/Navigation";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
