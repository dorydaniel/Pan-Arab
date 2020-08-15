function Events() {
  const events = [
    { id: "event1", type: "CONCERTS", url: "/images/events/concert.jpg" },
    { id: "event2", type: "MUSEUMS", url: "/images/events/museum.jpg" },
    { id: "event3", type: "THEATRES", url: "/images/events/theatre.jpg" },
    { id: "event4", type: "GALLERIES", url: "/images/events/gallerie.jpg" },
  ];
  return (
    <div>
      <div className="bg-yellowor">
        <div className="flex justify-between mx-0 sm:mx-0 md:mx-8 lg:mx-16 xl:mx-16 text-yellowor leading-5 text-lg sm:text-lg md:text-1xl lg:text-2xl xl:text-2xl">
          <button className="w-1/4 bg-white rounded-lg py-4 mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 my-6 font-roboto-regular focus:outline-none hover:bg-black duration-200">
            THIS WEEK
          </button>
          <button className="w-1/4 bg-white rounded-lg py-4 mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 my-6 font-roboto-regular focus:outline-none hover:bg-black duration-200">
            THIS WEEK
          </button>
          <button className="w-1/4 bg-white rounded-lg py-4 mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 my-6 font-roboto-regular focus:outline-none hover:bg-black duration-200">
            THIS WEEKEND
          </button>
          <button className="w-1/4 bg-white rounded-lg py-4 mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 my-6 font-roboto-regular focus:outline-none hover:bg-black duration-200">
            THIS MONTH
          </button>
        </div>
      </div>

      <div className="mt-2 flex">
        <div className="w-1/12 flex flex-col justify-center">
          <div className="flex justify-center">
            <img src="/images/events/left-30.png" alt="Arrow Left" />
          </div>
        </div>

        <div className="flex w-10/12 p-2">
          {events.map(({ id, type, url }) => {
            return (
              <div key={id} className="w-1/4 h-64">
                <div className="mx-2 h-full relative">
                  <div
                    className="w-full h-full bg-no-repeat bg-cover bg-center opacity-75"
                    style={{ backgroundImage: `url(${url})` }}
                  ></div>
                  <div className="w-full h-full absolute top-0 flex flex-col justify-center">
                    <h3 className="text-center text-white text-3xl leading-6 font-poppins-bold break-words">
                      {type}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-1/12 flex flex-col justify-center">
          <div className="flex justify-center">
            <img src="/images/events/right-30.png" alt="Arrow Right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
