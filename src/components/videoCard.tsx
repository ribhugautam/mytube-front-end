
function VideoCard() {
  return (
    <div className={`flex h-full w-full bg-transparent`}>
        <div className="flex w-full aspect-video h-[120px] rounded-lg bg-neutral-700">
            <div className="aspect-video overflow-hidden rounded-l-lg bg-transparent ">
              <img
                src="https://loremflickr.com/320/240/dog"
                className="bg-transparent object-cover h-full w-full aspect-video"
              />
            </div>
            <div className="bg-transparent py-2 flex flex-col gap-2 px-4">
              <h3 className="bg-transparent text-pretty font-bold">
                A day in the life of a dog
              </h3>
              <p className="bg-transparent text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="bg-transparent flex flex-row gap-4" >
                <span className="bg-transparent text-sm">Mr.Beast</span>
                <span className="bg-transparent text-sm">2.8K views</span>
                <span className="bg-transparent text-sm">4 days ago</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default VideoCard