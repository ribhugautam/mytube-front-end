function VideoCard() {
  return (
    <div className="flex flex-col w-full max-w-[300px] bg-neutral-700/90 p-2 rounded-lg shadow-lg">
      <div className="h-[150px] bg-transparent overflow-hidden">
        <img
          src="https://loremflickr.com/320/240/dog"
          alt="Video Thumbnail"
          className="w-full rounded-lg h-full"
        />
      </div>
      <div className="flex flex-col bg-transparent gap-1 p-4">
        <h3 className="text-white text-lg bg-transparent font-semibold">
          A day in the life of a dog
        </h3>
        <div className="flex bg-transparent flex-row gap-2">
          <img
            src="https://loremflickr.com/50/50/dog"
            alt="Profile Picture"
            className="rounded-full w-8 h-8 object-cover"
          />
          <div className="flex bg-transparent flex-col">
            <p className="text-sm bg-transparent font-medium">Mr. Beast</p>
            <p className="text-sm bg-transparent text-gray-500">2.8K views • 4 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
