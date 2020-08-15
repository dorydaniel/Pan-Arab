function Footer() {
  return (
    <div>
      {/* <div
        className="h-64 my-4 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/images/footer/newslette.png)" }}
      > */}
      <img
        src="/images/footer/newslette.png"
        alt="Newsletter"
        className="w-full h-full"
      />
      {/* </div> */}
      <div className="h-6 sm:h-6 md:h-20 lg:h-24 xl:h-32 bg-grayed"></div>
      <div className="h-24 bg-black flex flex-col justify-around">
        <div className=" font-roboto-light text-grayed text-sm text-center">
          <p>
            ©2020 PAN ARAB AGENDA | Created by{" "}
            <a href="https://www.n-idea.net/" className="text-grayish">
              N IDEA
            </a>
          </p>
        </div>
        <div className="flex justify-center">
          <a
            className="mx-3 flex flex-col justify-center"
            href="https://facebook.com"
          >
            <img src="images/footer/facebook.svg" alt="Facebook" />
          </a>
          <a
            className="mx-3 flex flex-col justify-center"
            href="https://twitter.com"
          >
            <img src="/images/footer/twitter.svg" alt="Twitter" />
          </a>
          <a
            className="mx-3 flex flex-col justify-center"
            href="https://youtube.com"
          >
            <img src="images/footer/youtube.svg" alt="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
