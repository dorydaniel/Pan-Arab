function Trip({ data }) {
  const shadow = { boxShadow: "rgba(0,0,0,0.25) 0 3px 11px 0" };

  return (
    <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 my-6 px-2">
      <div className="w-full h-full flex flex-row" style={shadow}>
        <div className="flex w-1/2 h-56">
          <div
            className="w-full h-full bg-scroll bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${data.url})` }}
          ></div>
        </div>
        <div className="w-1/2 flex flex-col justify-between py-4 px-3">
          <p className="font-montserrat-semiregular text-2.5xl leading-8 break-words">
            {data.title}
          </p>
          <p className="font-roboto-semiregular text-blue-700 text-md leading-4">
            {data.period}
          </p>
          <p className="font-roboto-light text-md leading-4">
            {data.description}
          </p>
          <div className="flex flex-row">
            {data.fb && (
              <a
                className="mx-2 flex flex-col justify-center"
                href="https://facebook.com"
              >
                <img src="images/trips/facebook.svg" alt="Facebook" />
              </a>
            )}
            {data.twt && (
              <a
                className="mx-2 flex flex-col justify-center"
                href="https://twitter.com"
              >
                <img src="/images/trips/twitter.svg" alt="Twitter" />
              </a>
            )}
            {data.insta && (
              <a
                className="mx-2 flex flex-col justify-center"
                href="https://instagram.com"
              >
                <img src="/images/trips/instagram.svg" alt="Instagram" />
              </a>
            )}
            {data.yt && (
              <a
                className="mx-2 flex flex-col justify-center"
                href="https://youtube.com"
              >
                <img src="images/trips/youtube.svg" alt="Youtube" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
