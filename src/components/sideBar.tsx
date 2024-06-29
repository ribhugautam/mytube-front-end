import { IoIosHome } from "react-icons/io";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SideBar() {

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-neutral-800 relative z-10 h-dvh px-4 py-4 w-[200px]"> 
        <div className="flex flex-col gap-4 bg-transparent">
          <button onClick={() => navigate("/home")} className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <IoIosHome size={20} className="bg-transparent" />
            Home
          </button>
          <button onClick={() => navigate("/upload")} className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <MdUpload size={20} className="bg-transparent" />
            Upload
          </button>
          <button className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <MdOutlineSubscriptions size={20} className="bg-transparent" />
            Subscriptions
          </button>
          <button className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <MdOutlineLibraryAdd size={20} className="bg-transparent" />
            Library
          </button>
          <button className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <MdHistory size={20} className="bg-transparent" />
            History
          </button>
          <button className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <BiSolidVideos size={20} className="bg-transparent" />
            Your videos
          </button>
          <button className="bg-transparent flex justify-left items-center gap-2 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold py-2 px-4 rounded-3xl w-full">
            <MdOutlineWatchLater size={20} className="bg-transparent" />
            Watch later
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
