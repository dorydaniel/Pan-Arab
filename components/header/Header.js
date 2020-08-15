function Header() {
  return (
    <div className="sticky top-0 z-10 shadow-xl">
      <div className="bg-black flex justify-around sm:justify-around md:justify-end lg:justify-end xl:justify-end py-2">
        <div className="flex mx-3 sm:mx-3 md:mx-16 lg:mx-16 xl:mx-16">
          <a
            className="mx-2 flex flex-col justify-center"
            href="https://facebook.com"
          >
            <img src="images/header/facebook.svg" alt="Facebook" />
          </a>
          <a
            className="mx-2 flex flex-col justify-center"
            href="https://twitter.com"
          >
            <img src="/images/header/twitter.svg" alt="Twitter" />
          </a>
          <a
            className="mx-2 flex flex-col justify-center"
            href="https://instagram.com"
          >
            <img src="/images/header/instagram.svg" alt="Instagram" />
          </a>
          <a
            className="mx-2 flex flex-col justify-center"
            href="https://youtube.com"
          >
            <img src="images/header/youtube.svg" alt="Youtube" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row text-xs sm:text-xs md:text-md lg:text-md xl:text-md">
          <div className="flex text-white">
            <div className="justify-center mr-2 mt-1">
              <img src="/images/header/lock.svg" alt="Lock" />
            </div>
            <p className="font-roboto-light">
              Sign up or <span className="font-roboto-regular">Login</span>
            </p>
          </div>
          <div className="flex font-poppins-bold mr-1 sm:mr-1 md:mx-6 lg:mx-6 xl:mx-6">
            <p className="text-white">DUBAI</p>
            <p className="text-grayish ml-2">CHANGE COUNTRY</p>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-between font-poppins-bold text-xl sm:text-xl md:text-xl lg:text-1xl xl:text-1xl tracking-wide">
        <div className="ml-2 sm:ml-2 md:ml-10 lg:ml-20 xl:ml-20 w-32">
          <img
            src="/images/header/PAN-ARAB-AGENDA.png"
            alt="Pan Arab Agenda"
            className="h-24 w-full"
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
