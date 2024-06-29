import SideBar from "../../components/sideBar";
import TopBar from "../../components/topBar";
import { IoIosVideocam, IoIosImage } from "react-icons/io";
import { useState } from "react";

function Upload() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="h-dvh w-full overflow-hidden flex flex-col">
      <TopBar />
      <div className="flex flex-grow">
        <SideBar />
        <div className="flex flex-grow overflow-y-scroll p-8">
          <div className="w-full max-w-[800px] mx-auto">
            <div className="flex gap-6 justify-between items-center bg-white/20 rounded-xl p-6">
              <div className="flex flex-col justify-center items-center bg-transparent gap-4">
                <label
                  htmlFor="video"
                  className="text-white cursor-pointer bg-transparent flex items-center"
                >
                  <IoIosVideocam size={48} className=" bg-transparent" />
                </label>
                <div className="flex bg-transparent items-center">
                  <input
                    type="file"
                    name="video"
                    id="video"
                    className="hidden"
                    onChange={(e: any) => setSelectedVideo(e.target.files?.[0])}
                  />
                  <label
                    htmlFor="video"
                    className="text-white cursor-pointer bg-transparent w-full"
                  >
                    {selectedVideo ? selectedVideo.name : "Choose Video"}
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-transparent gap-4">
                <label
                  htmlFor="thumbnail"
                  className="text-white flex cursor-pointer bg-transparent items-center"
                >
                  <IoIosImage size={48} className="bg-transparent" />
                </label>
                <div className="flex bg-transparent items-center">
                  <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    className="hidden"
                    onChange={(e: any) =>
                      setSelectedThumbnail(e.target.files?.[0])
                    }
                  />
                  <label
                    htmlFor="thumbnail"
                    className="text-white cursor-pointer bg-transparent w-full"
                  >
                    {selectedThumbnail ? selectedThumbnail.name : "Choose thumbnail"}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-white/20 rounded-xl p-4 mt-4">
              <input
                value={title}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="text-white p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
              />
              <textarea
                value={description}
                name="description"
                id="description"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="text-white p-2 rounded-md  bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full h-[100px] resize-none"
              />
              <button
                type="submit"
                className="bg-red-700/50 hover:bg-red-700/70 text-white p-2  rounded-full w-full"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
