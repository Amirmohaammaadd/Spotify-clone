import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import Sidebar from "./sidebar";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumsdata = albumsData[id];

  return (
    <>
      <Navbar />


      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumsdata.image} alt="None" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumsdata.name}
          </h2>

          <h4>{albumsdata.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              alt="None"
              className="inline-block w-5 mr-3"
            />
            <b>Spotify</b> - 1,684,213 likes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="None" className="m-auto w-4" />
      </div>

      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-2 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} alt="None" className="inline w-10 mr-2" />
            {item.name}
          </p>

          <p className="text-[15px]">{albumsdata.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
