import { Route, Routes } from "react-router-dom";
import DisplayHome from "./displayHome";
import DisplayAlbum from "./displayAlbum";
import Login from "./Login";

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:ml-0">
      <Routes>
        <Route path="/" Component={DisplayHome}  />
        <Route path="/album/:id" Component={DisplayAlbum} />
        {/* <Route path="*" Component={} /> */}
      </Routes>
    </div>
  );
};

export default Display;
