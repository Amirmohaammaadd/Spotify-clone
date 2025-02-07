const SongItem = ({ image, name, desc, id, showItem }) => {
  return (
    <div
      onClick={showItem}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] "
    >
      <img src={image} alt="None" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
