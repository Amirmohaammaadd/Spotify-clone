import Display from "./display";
import DisplayAlbum from "./displayAlbum";
import Player from "./player";
import Sidebar from "./sidebar";

const Pagelayout = () => {
  return (
    <div className="">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <Player />
    </div>
  );
};

export default Pagelayout;
