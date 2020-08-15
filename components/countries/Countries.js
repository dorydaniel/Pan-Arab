function Countries() {
  const countries = [
    "Lebanon",
    "Dubai",
    "Abu Dhabi",
    "Qatar",
    "Bahrain",
    "Syria",
    "Iraq",
    "Jordan",
    "Saudi Arabia",
    "Oman",
    "Kuwait",
    "Morocco",
    "Palestine",
    "Egypt",
    "Algeria",
  ];
  return (
    <div className="flex flex-wrap justify-between -mt-16 mx-10 sm:mx-10 md:mx-20 lg:mx-20 xl:mx-20 bg-white">
      {countries.map((country) => {
        return (
          <div
            key={country}
            className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 my-12 text-center text-lg font-poppins-bold leading-4 "
          >
            <p className="px-1">{country}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
