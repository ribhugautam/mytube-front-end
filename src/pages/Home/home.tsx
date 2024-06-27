import SideBar from "../../components/sideBar";
import TopBar from "../../components/topBar";
import VideoCard from "../../components/videoCard";

function Home() {
  return (
    <div className="h-dvh w-full overflow-hidden flex flex-col">
      <TopBar />
      <div className="flex flex-grow">
        <SideBar />
        <div className="flex flex-wrap gap-4 justify-center h-dvh w-full overflow-y-scroll pb-[108px] mt-4 pt-0 p-4">
          {Array.from({length: 12}).map((_, index) => (
            <VideoCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
