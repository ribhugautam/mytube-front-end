import SideBar from "../../components/sideBar";
import TopBar from "../../components/topBar";
import VideoCard from "../../components/videoCard";

function Home() {
  return (
    <div className="h-dvh w-full overflow-hidden flex flex-col">
      <TopBar />
      <div className="flex flex-grow">
        <SideBar />
        <div className={`flex flex-col gap-4 pb-[90px] h-dvh w-full overflow-y-scroll p-4`}>
          {
            Array.from({length: 10}).map((_, index) => <VideoCard key={index} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
