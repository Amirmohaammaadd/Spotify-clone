import { createContext, useState } from "react";
import "./App.css";
import Display from "./components/display";
import Player from "./components/player";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Tets from "./TestMp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import DisplayHome from "./components/displayHome";
import DisplayAlbum from "./components/displayAlbum";
import Pagelayout from "./components/Page";

export const myContext = createContext();

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <myContext.Provider value={{ setShowSidebar, showSidebar }}>
      <div className=" h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>

        <Player />
      </div>

      {/* <div className="h-screen flex items-center justify-center">
        <Tets />
      </div> */}
    </myContext.Provider>
  );
}

export default App;
