type Props = {
  plan: string;
};

function Form({ plan }: Props) {
  return (
    <div>
      <form action="">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row ">
          <div className="flex flex-wrap justify-between w-full sm:w-full md:w-full lg:w-full xl:w-1/3">
            <div className="flex flex-1 flex-col pr-4">
              <label htmlFor="fromCity">Flying from</label>
              <input
                type="text"
                name="fromCity"
                id="fromCity"
                className="border border-gray-500 mt-2"
              />
            </div>
            {plan !== "Hotel" && (
              <div className="flex flex-1 flex-col pr-4">
                <label htmlFor="toCity">Flying to</label>
                <input
                  type="text"
                  name="toCity"
                  id="toCity"
                  className="border border-gray-500 mt-2"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row w-full sm:w-full md:w-full lg:w-full xl:w-2/3">
            <div className="flex flex-1 flex-wrap justify-between">
              <div className="flex flex-1 flex-col pr-4">
                <label htmlFor="fromDate">Departing</label>
                <input
                  type="date"
                  name="fromDate"
                  id="fromDate"
                  className="border border-gray-500 mt-2"
                />
              </div>
              <div className="flex flex-1 flex-col pr-4">
                <label htmlFor="toDate">Returning</label>
                <input
                  type="date"
                  name="toDate"
                  id="toDate"
                  className="border border-gray-500 mt-2"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-wrap justify-between">
              <div className="flex flex-1 flex-col pr-4">
                <label htmlFor="adults">Adults (18+)</label>
                <select
                  name="adults"
                  id="adults"
                  className="border border-gray-500 mt-2"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="flex flex-1 flex-col pr-4">
                <label htmlFor="children">Children (2-17)</label>
                <select
                  name="children"
                  id="children"
                  className="border border-gray-500 mt-2"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              {plan !== "Hotel" && (
                <div className="flex flex-1 flex-col pr-4">
                  <label htmlFor="infant">Infant (under 2)</label>
                  <select
                    name="infant"
                    id="infant"
                    className="border border-gray-500 mt-2"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <img src="/images/flight/logo.png" alt="Logo" />
          <button
            className="bg-yellowor px-16 text-sm font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
