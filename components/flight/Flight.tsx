import { useState } from "react";
import Form from "./Form";

function Flight() {
  const [plan, setPlan] = useState("Flight");

  return (
    <div className="">
      <div
        className="w-full h-32 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/images/flight/plane.jpg)" }}
      ></div>
      <div className="mx-3 font-sans">
        <div className="flex flex-col mt-3 mb-8 bg-grayish">
          <div className="flex">
            <button
              className={`flex-1 py-1 bg-no-repeat bg-contain bg-center hover:bg-grayish ${
                plan === "Flight" ? "bg-grayish" : "bg-grayished"
              }`}
              style={{
                backgroundImage: "url(/images/flight/planeicon.svg)",
                backgroundOrigin: "content-box",
                height: "1.85rem",
              }}
              onClick={() => setPlan("Flight")}
            ></button>
            <button
              className={`flex-1 py-1 bg-no-repeat bg-contain bg-center hover:bg-grayish border-l border-r border-white ${
                plan === "Hotel" ? "bg-grayish" : "bg-grayished"
              }`}
              style={{
                backgroundImage: "url(/images/flight/hotel.svg)",
                backgroundOrigin: "content-box",
                height: "1.85rem",
              }}
              onClick={() => setPlan("Hotel")}
            ></button>
            <button
              className={`flex-1 py-1 bg-no-repeat bg-contain bg-center hover:bg-grayish ${
                plan === "Flight + Hotel" ? "bg-grayish" : "bg-grayished"
              }`}
              style={{
                backgroundImage: "url(/images/flight/luggage.svg)",
                backgroundOrigin: "content-box",
                height: "1.85rem",
              }}
              onClick={() => setPlan("Flight + Hotel")}
            ></button>
          </div>
          <div className="m-4 text-lg font-medium text-white">
            <p>
              SEARCH <span className="text-yellowish">{plan}</span>
            </p>
          </div>
        </div>
        <div className="my-6 p-4 bg-grayish">
          <Form plan={plan} />
        </div>
      </div>
    </div>
  );
}

export default Flight;
