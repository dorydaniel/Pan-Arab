function Slider() {
  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url(/images/slider/burj-al-arab.jpg)" }}
    >
      <div className="flex flex-col ml-5 sm:ml-5 md:ml-20 lg:ml20 xl:ml-20 text-white">
        <div className="my-3">
          <img src="/images/slider/globe.svg" alt="Globe" />
        </div>
        <div className="my-2">
          <h3 className="font-roboto-light text-1xl sm:text-1xl md:text-3xl lg:text-3xl xl:text-3xl leading-6">
            Find the Pan Arab cultural events in
          </h3>
        </div>
        <div className="my-2 mr-5">
          <h1 className="font-montserrat-regular text-5.3xl sm:text-5.3xl md:text-5.5xl lg:text-5.5xl xl:text-5.5xl leading-none">
            Our top <b>destinations</b>
          </h1>
        </div>
        <div className="my-2">
          <button className="bg-yellowor rounded-lg px-20 py-4 text-black font-roboto-regular text-2xl leading-5 focus:outline-none">
            DISCOVER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
