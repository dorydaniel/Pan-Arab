function Header() {
  return (
    <div className="sticky top-0 z-10 shadow-xl">
      <div className="bg-white flex justify-between font-poppins-bold text-xl sm:text-xl md:text-xl lg:text-1xl xl:text-1xl tracking-wide">
        <div className="ml-2 sm:ml-2 md:ml-10 lg:ml-20 xl:ml-20 w-32">
          <img
            src="/images/header/PAN-ARAB-AGENDA.png"
            alt="Pan Arab Agenda"
            className="h-24 w-full transition"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
            <div className="flex flex-col justify-center text-center mx-5 border-b-2 border-transparent hover:border-black transition ease-in-out duration-200">
              <a href="">EVENTS</a>
            </div>
            <div className="flex flex-col justify-center text-center mx-5 border-b-2 border-transparent hover:border-black transition ease-in-out duration-200">
              <a href="">ARTICLES</a>
            </div>
            <div className="flex flex-col justify-center text-center mx-5 border-b-2 border-transparent hover:border-black transition ease-in-out duration-200">
              <a href="">PODCAST</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mr-2 sm:mr-2 md:mr-6 lg:mr-6 xl:mr-6">
            <div className="text-grayish mr-0 sm:mr-0 md:mr-0 lg:mr-6 xl:mr-6">
              <a>MY AGENDA</a>
            </div>
            <div className="flex">
              <div className="mx-6 flex flex-col justify-center">
                <img
                  src="/images/header/heart.png"
                  alt="Favorites"
                  className="transform hover:-translate-y-1 hover:scale-110 duration-200"
                />
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src="/images/header/search.svg"
                  alt="Search"
                  className="transform hover:-translate-y-1 hover:scale-110 duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
