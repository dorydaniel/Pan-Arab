const UpperHeader = () => {
  return (
    <div>
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
    </div>
  );
};

export default UpperHeader;
