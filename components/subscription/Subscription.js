function Subscription({ email, setEmail }) {
  return (
    <div
      className="flex bg-fixed bg-no-repeat bg-cover pb-20"
      style={{ backgroundImage: "url(/images/subscription/camels.jpg)" }}
    >
      <div className="w-full sm:w-full md:w-46/100 lg:w-37/100 xl:w-37/100 mx-4 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-20 py-12 px-8 bg-black bg-opacity-50 text-white">
        <p className="my-4 text-4xl sm:text-4xl md:text-5xl lg:text-5xxl xl:text-5xxl font-poppins-bold ">
          Be the First
          <br />
          To Know
        </p>
        <hr className="w-2/5" />
        <p className="my-4 font-roboto-light text-md leading-7">
          Maybe you're planning the trip of a lifetime. Maybe you just need a
          quick getaway. Whatever you need, we can make it happen. Send us your
          email and we'll get back to you to start planning a trip you'll never
          forget.
        </p>
        <form action="" className="flex flex-col w-4/5">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail}
            className="input-email my-4 px-2 py-1 text-base font-roboto-semiregular bg-transparent border-b border-grayed"
          />
          <button
            className="my-4 py-2 bg-yellowor text-grayed font-sans font-semibold rounded-full focus:outline-none"
            onClick={(e) => e.preventDefault()}
          >
            Tell me more!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
